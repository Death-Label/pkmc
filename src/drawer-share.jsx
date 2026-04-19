/* ================================================================
   DETAIL DRAWER — Trainer's Ledger
================================================================ */

function DetailDrawer({ game, status, note, onStatus, onNote, onClose }) {
  if (!game) return null;
  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <div className="drawer-eyebrow">{game.group}</div>
          <h2 className="drawer-title">{game.name}</h2>
          <div className="drawer-meta-row">
            <span className="drawer-platform">{game.platform}</span>
            <span className="drawer-year">{game.year}</span>
            {game.region && <span className="drawer-region">{game.region}</span>}
          </div>
          <button className="icon-btn drawer-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        <div className="drawer-body">
          {/* Tooltip do jogo — só aparece se existir */}
          {game.tip && (
            <div className="drawer-tip">
              <span className="drawer-tip-icon">ℹ</span>
              <p>{game.tip}</p>
            </div>
          )}

          <div className="drawer-label">Status</div>
          <StatusMenu value={status} onChange={onStatus}/>

          <div className="drawer-label" style={{marginTop:22}}>Anotações pessoais</div>
          <textarea
            className="drawer-note"
            placeholder="Platinado, edição especial, falta caixa, etc."
            value={note || ''}
            onChange={e=>onNote(e.target.value)}
            rows={5}
          />
          <div className="drawer-hint">Salvo automaticamente no seu navegador.</div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   SHARE CARD
════════════════════════════════════════════════════════════ */
function ShareCard({ theme, stats, trainerName, onClose }) {
  const pct = stats.total ? Math.round(stats.owned/stats.total*100) : 0;
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const drawCard = () => {
    const canvas = canvasRef.current; if (!canvas) return;
    const W = 1080, H = 1350;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const t = theme;

    const bgGrad = ctx.createLinearGradient(0,0,W,H);
    bgGrad.addColorStop(0, t.vars['--bg']);
    bgGrad.addColorStop(1, t.vars['--bg2']);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0,0,W,H);

    const glow = ctx.createRadialGradient(W*0.8, H*0.2, 0, W*0.8, H*0.2, 800);
    glow.addColorStop(0, t.vars['--accent'] + '44');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow; ctx.fillRect(0,0,W,H);

    ctx.strokeStyle = t.vars['--border2'];
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, W-80, H-80);
    ctx.strokeStyle = t.vars['--accent'] + '33';
    ctx.lineWidth = 1;
    ctx.strokeRect(56, 56, W-112, H-112);

    ctx.fillStyle = t.vars['--accent'];
    ctx.font = '600 22px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText("T R A I N E R ' S   L E D G E R", W/2, 140);

    ctx.fillStyle = t.vars['--accent'];
    ctx.fillRect(W/2 - 60, 160, 120, 2);

    ctx.fillStyle = t.vars['--text'];
    ctx.font = '700 54px "Fraunces", serif';
    ctx.fillText(trainerName || 'Trainer', W/2, 240);

    ctx.fillStyle = t.vars['--accent'];
    ctx.font = '900 360px "Fraunces", serif';
    ctx.fillText(String(stats.owned), W/2, 620);

    ctx.fillStyle = t.vars['--text2'];
    ctx.font = '400 44px "Fraunces", serif';
    ctx.fillText(`/ ${stats.total}`, W/2, 690);

    ctx.fillStyle = t.vars['--text'];
    ctx.font = '600 36px "JetBrains Mono", monospace';
    ctx.fillText(`${pct}%  da  coleção  completa`, W/2, 770);

    const barY = 840, barW = W - 240, barX = 120;
    ctx.fillStyle = t.vars['--surface2'];
    ctx.fillRect(barX, barY, barW, 14);
    ctx.fillStyle = t.vars['--accent'];
    ctx.fillRect(barX, barY, barW * (pct/100), 14);

    const topGroups = Object.entries(stats.byGroup).slice(0, 6);
    ctx.textAlign = 'left';
    ctx.font = '400 26px "JetBrains Mono", monospace';
    topGroups.forEach(([name, v], i) => {
      const y = 950 + i*48;
      ctx.fillStyle = t.vars['--text2'];
      ctx.fillText(name, 120, y);
      ctx.textAlign = 'right';
      ctx.fillStyle = t.vars['--text'];
      ctx.fillText(`${v.owned}/${v.total}`, W-120, y);
      ctx.textAlign = 'left';
    });

    ctx.textAlign = 'center';
    ctx.fillStyle = t.vars['--text3'];
    ctx.font = '500 22px "JetBrains Mono", monospace';
    ctx.fillText('Tema: ' + t.name + ' • ' + new Date().toLocaleDateString('pt-BR'), W/2, H-90);
  };

  useEffect(()=>{ drawCard(); }, [theme, stats, trainerName]);

  const download = () => {
    const canvas = canvasRef.current; if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url; a.download = `trainers-ledger-${Date.now()}.png`;
    document.body.appendChild(a); a.click(); a.remove();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(()=>setCopied(false), 1600);
    } catch(_) {}
  };

  return (
    <div className="share-overlay" onClick={onClose}>
      <div className="share-sheet" onClick={e=>e.stopPropagation()}>
        <div className="share-head">
          <div>
            <div className="share-eyebrow">Compartilhar</div>
            <h2 className="share-title">Cartão da Coleção</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        <div className="share-preview">
          <canvas ref={canvasRef} className="share-canvas"/>
        </div>
        <div className="share-actions">
          <button className="btn-primary" onClick={download}>Baixar imagem</button>
          <button className="btn-ghost" onClick={copyLink}>{copied ? '✓ Link copiado' : 'Copiar link'}</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DetailDrawer, ShareCard });
