/* ================================================================
   MAIN APP — Trainer's Ledger
================================================================ */

const LS_KEY = 'pokecollector-v3';

function loadState() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
  catch(_) { return {}; }
}
function saveState(s) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch(_){}
}

function App() {
  const [themeId, setThemeId] = useState(() => loadState().themeId || 'luxury');
  const [statusMap, setStatusMap] = useState(() => loadState().statusMap || {});
  const [notes, setNotes] = useState(() => loadState().notes || {});
  const [trainerName, setTrainerName] = useState(() => loadState().trainerName || 'Trainer');
  const [tab, setTab] = useState('main');
  const [mode, setMode] = useState('principal');
  const [sort, setSort] = useState('default');
  const [query, setQuery] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showStats, setShowStats] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [drawerId, setDrawerId] = useState(null);
  const [themeOpen, setThemeOpen] = useState(false);

  const theme = THEMES[themeId];

  useEffect(() => {
    saveState({ themeId, statusMap, notes, trainerName });
  }, [themeId, statusMap, notes, trainerName]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([k,v]) => root.style.setProperty(k, v));
    document.body.setAttribute('data-mood', theme.mood);
  }, [theme]);

  const setStatus = (id, st) => setStatusMap(m => ({ ...m, [id]: st }));
  const setNote   = (id, v)  => setNotes(n => ({ ...n, [id]: v }));

  const activeList = tab === 'main' ? window.MAIN : window.SPINOFF;

  const platforms = useMemo(() => {
    const set = new Set(activeList.map(g => g.platform));
    return ['all', ...Array.from(set)];
  }, [activeList]);

  const processed = useMemo(() => {
    let list = activeList.filter(g => {
      if (filterPlatform !== 'all' && g.platform !== filterPlatform) return false;
      if (filterStatus !== 'all') {
        const st = statusMap[g.id] || 'none';
        if (filterStatus === 'owned' && !OWNED_STATUSES.has(st)) return false;
        if (filterStatus === 'missing' && OWNED_STATUSES.has(st)) return false;
        if (filterStatus !== 'owned' && filterStatus !== 'missing' && st !== filterStatus) return false;
      }
      if (query) {
        const q = query.toLowerCase();
        if (!g.name.toLowerCase().includes(q) &&
            !g.platform.toLowerCase().includes(q) &&
            !g.group.toLowerCase().includes(q)) return false;
      }
      return true;
    });
    if (sort === 'year-asc')  list = [...list].sort((a,b)=>a.year-b.year);
    if (sort === 'year-desc') list = [...list].sort((a,b)=>b.year-a.year);
    if (sort === 'az')        list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
    if (sort === 'platform')  list = [...list].sort((a,b)=>a.platform.localeCompare(b.platform) || a.year-b.year);
    return list;
  }, [activeList, filterPlatform, filterStatus, query, sort, statusMap]);

  const grouped = useMemo(() => {
    if (sort !== 'default') return null;
    const g = {};
    processed.forEach(item => {
      (g[item.group] = g[item.group] || []).push(item);
    });
    return g;
  }, [processed, sort]);

  const scopedGames = mode === 'principal' ? window.MAIN : [...window.MAIN, ...window.SPINOFF];
  const stats = useMemo(() => computeStats(scopedGames, statusMap), [scopedGames, statusMap]);

  const drawerGame = drawerId
    ? [...window.MAIN, ...window.SPINOFF].find(g => g.id === drawerId)
    : null;

  const resetAll = () => {
    if (confirm('Limpar toda a coleção? Isso apagará status e notas.')) {
      setStatusMap({}); setNotes({});
    }
  };

  return (
    <>
      <ParticleCanvas theme={theme} density={theme.mood === 'light' ? 40 : 70}/>

      {/* ═══════ TOP BAR ═══════ */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <PokeballOrb theme={theme} size={54}/>
            <div className="brand-text">
              <div className="brand-eyebrow">Luxury Collection</div>
              <h1 className="brand-title">Trainer's Ledger</h1>
            </div>
          </div>
          <div className="topbar-actions">
            <input
              className="trainer-input"
              value={trainerName}
              onChange={e=>setTrainerName(e.target.value)}
              placeholder="Seu nome"
              maxLength={24}
            />
            <div className="theme-picker">
              <button className="theme-btn" onClick={()=>setThemeOpen(!themeOpen)} title="Mudar tema">
                <span className="theme-swatch" style={{background: theme.vars['--accent']}}/>
                <span>{theme.name}</span>
                <span className="theme-caret">▾</span>
              </button>
              {themeOpen && (
                <div className="theme-menu" onMouseLeave={()=>setThemeOpen(false)}>
                  {Object.values(THEMES).map(t => (
                    <button key={t.id}
                      className={`theme-menu-item ${themeId===t.id?'active':''}`}
                      onClick={()=>{ setThemeId(t.id); setThemeOpen(false); }}>
                      <span className="theme-swatch" style={{background: t.vars['--accent']}}/>
                      <div>
                        <div className="theme-menu-name">{t.name}</div>
                        <div className="theme-menu-sub">{t.tagline} · {t.mood}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="app">
        {/* ═══════ PROGRESS / MODE TOGGLE ═══════ */}
        <section className="progress-card">
          <div className="progress-mode">
            <button
              className={`mode-pill ${mode==='principal'?'active':''}`}
              onClick={()=>setMode('principal')}>
              <span className="mode-dot"/>
              <div>
                <div className="mode-label">Colecionador da Série Principal</div>
                <div className="mode-sub">Apenas jogos da série principal</div>
              </div>
            </button>
            <button
              className={`mode-pill ${mode==='completionist'?'active':''}`}
              onClick={()=>setMode('completionist')}>
              <span className="mode-dot"/>
              <div>
                <div className="mode-label">Completionist Absoluto</div>
                <div className="mode-sub">Série principal + todos os spin-offs</div>
              </div>
            </button>
          </div>

          <div className="progress-body">
            <div className="progress-top">
              <div>
                <div className="progress-eyebrow">Progresso da Coleção</div>
                <div className="progress-count">
                  <em>{stats.owned}</em>
                  <span>/ {stats.total}</span>
                </div>
              </div>
              <div className="progress-pct">
                <div className="progress-pct-big">{stats.total ? Math.round(stats.owned/stats.total*100) : 0}%</div>
                <div className="progress-pct-lab">completo</div>
              </div>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: (stats.total? stats.owned/stats.total*100:0) + '%' }}/>
            </div>
            <div className="progress-chips">
              {STATUS_ORDER.filter(k=>k!=='none').map(k=>{
                const s = STATUS[k];
                const c = stats.byStatus[k] || 0;
                return (
                  <div key={k} className="progress-chip" style={{'--c': s.color}}>
                    <span className="progress-chip-glyph">{s.short}</span>
                    <span className="progress-chip-label">{s.label}</span>
                    <span className="progress-chip-count">{c}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="progress-actions">
            <button className="btn-ghost-sm" onClick={()=>setShowStats(true)}>
              <span>◐</span> Estatísticas
            </button>
            <button className="btn-ghost-sm" onClick={()=>setShowShare(true)}>
              <span>↗</span> Compartilhar
            </button>
            <button className="btn-ghost-sm" onClick={()=>window.print()}>
              <span>⎙</span> Imprimir
            </button>
            <button className="btn-ghost-sm" onClick={()=>generatePDF(stats, trainerName, statusMap)}>
              <span>⬇</span> PDF
            </button>
            <button className="btn-ghost-sm danger" onClick={resetAll}>
              <span>⌫</span> Limpar
            </button>
          </div>
        </section>

        {/* ═══════ TABS ═══════ */}
        <div className="tabs">
          <button className={`tab ${tab==='main'?'active':''}`} onClick={()=>setTab('main')}>
            <span className="tab-label">Série Principal</span>
            <span className="tab-count">{window.MAIN.length}</span>
          </button>
          <button className={`tab ${tab==='spinoff'?'active':''}`} onClick={()=>setTab('spinoff')}>
            <span className="tab-label">Spin-offs</span>
            <span className="tab-count">{window.SPINOFF.length}</span>
          </button>
        </div>

        {/* ═══════ FILTER BAR ═══════ */}
        <div className="filter-bar">
          <div className="search-wrap">
            <span className="search-ico">⌕</span>
            <input
              className="search-input"
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Buscar por nome, plataforma, geração…"
            />
            {query && <button className="search-clear" onClick={()=>setQuery('')}>✕</button>}
          </div>
          <select className="select" value={filterPlatform} onChange={e=>setFilterPlatform(e.target.value)}>
            {platforms.map(p => <option key={p} value={p}>{p==='all' ? 'Todas plataformas' : p}</option>)}
          </select>
          <select className="select" value={filterStatus} onChange={e=>setFilterStatus(e.target.value)}>
            <option value="all">Todos status</option>
            <option value="owned">Qualquer possuído</option>
            <option value="missing">Faltando</option>
            <option value="want">Quero</option>
            <option value="have">Tenho</option>
            <option value="playing">Jogando</option>
            <option value="done">Zerado</option>
          </select>
          <select className="select" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="default">Ordem: por região</option>
            <option value="year-asc">Ano ↑</option>
            <option value="year-desc">Ano ↓</option>
            <option value="az">A → Z</option>
            <option value="platform">Plataforma</option>
          </select>
        </div>

        {/* ═══════ GAMES LIST ═══════ */}
        <div className="games-area">
          {processed.length === 0 && (
            <div className="empty">Nenhum jogo bate com esses filtros.</div>
          )}
          {grouped ? (
            Object.entries(grouped).map(([gname, items]) => (
              <section key={gname} className="game-section">
                <div className="sec-head">
                  <span className="sec-title">{gname}</span>
                  <div className="sec-rule"/>
                  <span className="sec-badge">
                    {items.filter(g => OWNED_STATUSES.has(statusMap[g.id])).length}
                    <span>/</span>
                    {items.length}
                  </span>
                </div>
                <div className="games-grid">
                  {items.map(g => (
                    <GameCard key={g.id} game={g}
                      status={statusMap[g.id] || 'none'}
                      hasNote={!!notes[g.id]}
                      onCycle={(st)=>setStatus(g.id, st)}
                      onClick={()=>setDrawerId(g.id)}/>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="games-grid flat">
              {processed.map(g => (
                <GameCard key={g.id} game={g}
                  status={statusMap[g.id] || 'none'}
                  hasNote={!!notes[g.id]}
                  onCycle={(st)=>setStatus(g.id, st)}
                  onClick={()=>setDrawerId(g.id)}/>
              ))}
            </div>
          )}
        </div>

        <footer className="footer">
          <span>Trainer's Ledger · tema {theme.name}</span>
          <span className="footer-dot">·</span>
          <span>estado salvo no seu navegador</span>
        </footer>
      </main>

      {showStats && <StatsPanel games={scopedGames} statusMap={statusMap} onClose={()=>setShowStats(false)}/>}
      {showShare && <ShareCard theme={theme} stats={stats} trainerName={trainerName} onClose={()=>setShowShare(false)}/>}
      {drawerGame && (
        <DetailDrawer
          game={drawerGame}
          status={statusMap[drawerGame.id] || 'none'}
          note={notes[drawerGame.id] || ''}
          onStatus={(st)=>setStatus(drawerGame.id, st)}
          onNote={(v)=>setNote(drawerGame.id, v)}
          onClose={()=>setDrawerId(null)}
        />
      )}
    </>
  );
}

function GameCard({ game, status, hasNote, onCycle, onClick }) {
  const s = STATUS[status];
  const owned = OWNED_STATUSES.has(status);
  return (
    <div
      className={`game-card status-${status} ${owned?'owned':''}`}
      onClick={onClick}
    >
      <StatusCycle value={status} onChange={onCycle}/>
      <div className="game-info">
        <div className="game-name">{game.name}</div>
        <div className="game-meta">
          <span className="game-platform">{game.platform}</span>
          <span className="game-year">{game.year}</span>
          {game.region && <span className="game-region">{game.region}</span>}
          {hasNote && <span className="game-note-ind" title="Tem anotação">✎</span>}
          {game.tip && (
            <span className="game-tip-badge" onClick={e=>e.stopPropagation()}>
              <span className="game-tip-icon">i</span>
              <span className="game-tip-popup">{game.tip}</span>
            </span>
          )}
        </div>
      </div>
      <div className="game-status-tag" style={{color: s.color}}>
        {status !== 'none' && s.label}
      </div>
    </div>
  );
}

/* ═══════ PDF GENERATION ═══════ */
function generatePDF(stats, trainerName, statusMap) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  const W = 210, H = 297, ML = 15, MR = 15, CW = W - ML - MR;
  const theme = THEMES[loadState().themeId || 'luxury'];
  const accent = theme.vars['--accent'];
  const hex2rgb = h => { const n = parseInt(h.slice(1),16); return [(n>>16)&255, (n>>8)&255, n&255]; };
  const [ar,ag,ab] = hex2rgb(accent);
  const dateStr = new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
  let y = 0;

  const drawHeader = () => {
    doc.setFillColor(18, 14, 8); doc.rect(0,0,W,44,'F');
    doc.setFillColor(ar, ag, ab); doc.rect(0,44,W,1.5,'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(18); doc.setTextColor(ar,ag,ab);
    doc.text("Trainer's Ledger", ML, 20);
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(170,160,140);
    doc.text(trainerName || 'Trainer', ML, 28);
    doc.setFontSize(8); doc.setTextColor(140,130,110);
    doc.text(`${stats.owned}/${stats.total} · ${Math.round(stats.owned/stats.total*100)}% · ${dateStr}`, W-MR, 28, {align:'right'});
  };

  drawHeader();
  y = 58;

  doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(40,30,10);
  doc.text('Resumo', ML, y); y += 6;
  doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(80,70,50);
  STATUS_ORDER.filter(k=>k!=='none').forEach(k => {
    const s = STATUS[k], c = stats.byStatus[k] || 0;
    doc.text(`${s.label}: ${c}`, ML, y); y += 5;
  });
  y += 4;

  const allGames = [...window.MAIN, ...window.SPINOFF];
  const grouped = {};
  allGames.forEach(g => { (grouped[g.group] = grouped[g.group] || []).push(g); });

  Object.entries(grouped).forEach(([grp, items]) => {
    if (y > H - 30) { doc.addPage(); drawHeader(); y = 58; }
    doc.setFillColor(ar,ag,ab);
    doc.rect(ML, y, 2, 6, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(40,30,10);
    doc.text(grp, ML + 4, y + 4.5); y += 8;

    items.forEach(g => {
      if (y > H - 20) { doc.addPage(); drawHeader(); y = 58; }
      const st = statusMap[g.id] || 'none';
      const s = STATUS[st];
      const owned = OWNED_STATUSES.has(st);
      doc.setDrawColor(200,190,170);
      doc.setLineWidth(0.2);
      doc.rect(ML, y-3.5, 4, 4, 'S');
      if (owned) {
        doc.setFillColor(ar,ag,ab);
        doc.rect(ML+0.5, y-3, 3, 3, 'F');
      }
      doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(30,22,10);
      doc.text(g.name, ML + 7, y);
      doc.setFontSize(7.5); doc.setTextColor(120,110,90);
      doc.text(`${g.platform} · ${g.year}`, ML + 100, y);
      if (st !== 'none') {
        doc.setTextColor(ar,ag,ab);
        doc.text(s.label, W-MR, y, {align:'right'});
      }
      y += 5.2;
    });
    y += 3;
  });

  doc.save(`trainers-ledger-${Date.now()}.pdf`);
}

ReactDOM.render(<App/>, document.getElementById('root'));
