/* ================================================================
   UI PRIMITIVES — Trainer's Ledger
================================================================ */

const { useState, useEffect, useMemo, useRef, useCallback } = React;

/* ── Status model ── */
const STATUS = {
  none:    { key:'none',    label:'—',         short:'',   color:'var(--text3)',        bg:'transparent' },
  have:    { key:'have',    label:'Tenho',     short:'◆',  color:'var(--chip-have)',    bg:'var(--accentSoft)' },
  want:    { key:'want',    label:'Quero',     short:'◇',  color:'var(--chip-want)',    bg:'rgba(111,212,224,.12)' },
  playing: { key:'playing', label:'Jogando',   short:'▶',  color:'var(--chip-playing)', bg:'rgba(255,138,61,.14)' },
  done:    { key:'done',    label:'Zerado',    short:'★',  color:'var(--chip-done)',    bg:'rgba(154,211,124,.14)' },
};
const STATUS_ORDER = ['none','have','want','playing','done'];
const OWNED_STATUSES = new Set(['have','playing','done']);

window.STATUS = STATUS;
window.STATUS_ORDER = STATUS_ORDER;
window.OWNED_STATUSES = OWNED_STATUSES;

/* ══════════════════════════════════════════════════════════════
   PokeballOrb — ícone temático por tema
   luxury   → Luxury Ball (corpo negro, faixas douradas/vermelhas)
   spectral → Dusk Ball adaptada (painéis roxos facetados)
   mythic   → Pokébola padrão rosa/branca
══════════════════════════════════════════════════════════════ */
function PokeballOrb({ theme, size = 54 }) {
  const s = size;

  /* ── LUXURY BALL ── */
  if (theme.id === 'luxury') {
    const body  = '#0D0A05';
    const gold  = '#F5C248';
    const gold2 = '#C8951E';
    const red1  = '#7A1515';
    const red2  = '#BB2200';
    return (
      <div className="orb-wrap" style={{ width: s, height: s }}>
        <svg viewBox="0 0 100 100" width={s} height={s} className="orb-svg">
          <defs>
            <clipPath id="lb-c"><circle cx="50" cy="50" r="43"/></clipPath>
            <radialGradient id="lb-g" cx="33%" cy="24%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.14"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Corpo escuro */}
          <circle cx="50" cy="50" r="43" fill={body}/>

          {/* Faixas decorativas + banda equatorial — tudo recortado ao círculo */}
          <g clipPath="url(#lb-c)">
            {/* Faixa fina dourada */}
            <rect x="0" y="22" width="100" height="2.5" fill={gold}/>
            {/* Gap escuro */}
            <rect x="0" y="24.5" width="100" height="1.5" fill={body}/>
            {/* Faixa vermelha escura (marrom-vermelho) */}
            <rect x="0" y="26" width="100" height="5" fill={red1}/>
            {/* Faixa vermelha vibrante */}
            <rect x="0" y="31" width="100" height="4" fill={red2}/>
            {/* Gap escuro */}
            <rect x="0" y="35" width="100" height="1.5" fill={body}/>
            {/* Faixa fina dourada */}
            <rect x="0" y="36.5" width="100" height="2.5" fill={gold2}/>
            {/* Banda equatorial dourada larga */}
            <rect x="0" y="43" width="100" height="14" fill={gold}/>
            {/* Bordas da banda */}
            <rect x="0" y="43" width="100" height="2" fill={gold2}/>
            <rect x="0" y="55" width="100" height="2" fill={gold2}/>
          </g>

          {/* Contorno dourado */}
          <circle cx="50" cy="50" r="43" fill="none" stroke={gold2} strokeWidth="2"/>
          {/* Gloss */}
          <circle cx="50" cy="50" r="43" fill="url(#lb-g)"/>

          {/* Botão central: anel escuro → anel dourado → centro escuro */}
          <circle cx="50" cy="50" r="13" fill={body}/>
          <circle cx="50" cy="50" r="10" fill={gold}/>
          <circle cx="50" cy="50" r="6.5" fill={body}/>
          {/* Ponto pulsante vermelho */}
          <circle cx="50" cy="50" r="3.5" fill="#FF2222" className="pokeball-pulse"/>
        </svg>
      </div>
    );
  }

  /* ── DUSK BALL → GENGAR (Fantasmagórico) ── */
  if (theme.id === 'spectral') {
    const body   = '#0C0618';
    const panel1 = '#1C0D38';  // painel escuro
    const panel2 = '#2D1555';  // painel médio
    const band   = '#7B4FD4';  // anel equatorial roxo (equivalente ao laranja)
    const band2  = '#5A35A8';  // sombra do anel
    return (
      <div className="orb-wrap" style={{ width: s, height: s }}>
        <svg viewBox="0 0 100 100" width={s} height={s} className="orb-svg">
          <defs>
            <clipPath id="db-c"><circle cx="50" cy="50" r="43"/></clipPath>
            <radialGradient id="db-g" cx="38%" cy="28%" r="52%">
              <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Corpo escuro */}
          <circle cx="50" cy="50" r="43" fill={body}/>

          {/* Painéis facetados — clipped ao círculo */}
          <g clipPath="url(#db-c)">
            {/* Painel superior esquerdo */}
            <polygon points="50,7 8,32 16,50 50,50"  fill={panel1}/>
            {/* Painel superior direito */}
            <polygon points="50,7 92,32 84,50 50,50" fill={panel2}/>
            {/* Painel inferior esquerdo */}
            <polygon points="50,93 8,68 16,50 50,50"  fill={panel2}/>
            {/* Painel inferior direito */}
            <polygon points="50,93 92,68 84,50 50,50" fill={panel1}/>
            {/* Divisórias centrais (escuras) */}
            <line x1="50" y1="7"  x2="50" y2="43" stroke={body} strokeWidth="2.5"/>
            <line x1="50" y1="57" x2="50" y2="93" stroke={body} strokeWidth="2.5"/>

            {/* Banda equatorial roxa */}
            <rect x="0" y="43" width="100" height="14" fill={band}/>
            <rect x="0" y="43" width="100" height="2"  fill={band2}/>
            <rect x="0" y="55" width="100" height="2"  fill={band2}/>
          </g>

          {/* Contorno roxo */}
          <circle cx="50" cy="50" r="43" fill="none" stroke={band} strokeWidth="2"/>
          {/* Gloss */}
          <circle cx="50" cy="50" r="43" fill="url(#db-g)"/>

          {/* Botão central: anel escuro → face acinzentada → ponto pulsante */}
          <circle cx="50" cy="50" r="13" fill={body} stroke={band} strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="8.5" fill="#D8CCEE"/>
          <circle cx="50" cy="50" r="4"   fill="#FF2222" className="pokeball-pulse"/>

          {/* Reflexo no topo (como a dusk ball) */}
          <ellipse cx="36" cy="26" rx="7" ry="5.5" fill="white" opacity="0.15" transform="rotate(-20,36,26)"/>
        </svg>
      </div>
    );
  }

  /* ── MEW (padrão, pokébola rosa/branca) ── */
  const top  = theme.ballTop  || theme.vars['--accent'];
  const bot  = theme.ballBot  || '#FFF0F5';
  const band = theme.ballBand || '#D0B0B8';
  const ring = theme.ballRing || theme.vars['--border2'];
  return (
    <div className="orb-wrap" style={{ width: s, height: s }}>
      <svg viewBox="0 0 100 100" width={s} height={s} className="orb-svg">
        <defs>
          <clipPath id="mb-top"><rect x="0" y="0" width="100" height="49"/></clipPath>
          <radialGradient id="mb-g" cx="38%" cy="30%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill={bot}/>
        <circle cx="50" cy="50" r="44" fill={top} clipPath="url(#mb-top)"/>
        <rect x="6" y="43.5" width="88" height="13" fill={band}/>
        <circle cx="50" cy="50" r="44" fill="none" stroke={ring} strokeWidth="2.5"/>
        <circle cx="50" cy="50" r="44" fill="url(#mb-g)"/>
        <circle cx="50" cy="50" r="13" fill={band}/>
        <circle cx="50" cy="50" r="9"  fill="#F8F2FF" stroke={ring} strokeWidth="1.2"/>
        <circle cx="50" cy="50" r="5"  fill="#FF2222" className="pokeball-pulse"/>
        <circle cx="34" cy="27" r="5"  fill="white" opacity="0.18"/>
        <circle cx="38" cy="31" r="2"  fill="white" opacity="0.28"/>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   StatusToggle — botão principal: clica → toggle none⇄have
   Modo híbrido recomendado por testes de usuário.
══════════════════════════════════════════════════════════════ */
function StatusToggle({ value, onChange, size = 26 }) {
  const s = STATUS[value || 'none'];
  const toggle = () => {
    if (!value || value === 'none') onChange('have');
    else onChange('none');
  };
  return (
    <button
      className={`status-cycle status-${s.key}`}
      onClick={(e)=>{ e.stopPropagation(); toggle(); }}
      onContextMenu={(e)=>{ e.preventDefault(); onChange('none'); }}
      title={value && value !== 'none' ? `${s.label} — clique para limpar` : 'Clique para marcar como Tenho'}
      style={{ width: size, height: size }}
    >
      <span className="status-glyph">{s.short}</span>
    </button>
  );
}

/* ══════════════════════════════════════════════════════════════
   StatusCycle (legacy — mantido para retro-compat)
══════════════════════════════════════════════════════════════ */
function StatusCycle({ value, onChange, size = 26 }) {
  const idx = STATUS_ORDER.indexOf(value || 'none');
  const next = () => {
    const n = STATUS_ORDER[(idx + 1) % STATUS_ORDER.length];
    onChange(n);
  };
  const s = STATUS[value || 'none'];
  return (
    <button
      className={`status-cycle status-${s.key}`}
      onClick={(e)=>{ e.stopPropagation(); next(); }}
      onContextMenu={(e)=>{ e.preventDefault(); onChange('none'); }}
      title={`${s.label} (clique para alternar, clique-direito limpa)`}
      style={{ width: size, height: size }}
    >
      <span className="status-glyph">{s.short}</span>
    </button>
  );
}

/* ══════════════════════════════════════════════════════════════
   StatusMenu
══════════════════════════════════════════════════════════════ */
function StatusMenu({ value, onChange }) {
  return (
    <div className="status-menu">
      {STATUS_ORDER.map(k => {
        const s = STATUS[k];
        return (
          <button
            key={k}
            className={`status-menu-item ${value===k?'active':''}`}
            onClick={()=>onChange(k)}
            style={{ '--c': s.color }}
          >
            <span className="status-menu-dot">{s.short || '○'}</span>
            {s.label}
          </button>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   ParticleCanvas — efeitos únicos por tema:
   luxury   → partículas douradas grandes (diamantes + esferas)
   spectral → fogos-fátuos fantasmagóricos (chama + balanço sinusoidal)
   mythic   → bolhas de sabão que aparecem e estouram
══════════════════════════════════════════════════════════════ */
function ParticleCanvas({ theme, density = 60 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = theme.particles;
    let particles = [];

    /* ─── LUXURY: ouro ascendente por toda a tela ─── */
    if (theme.id === 'luxury') {
      class GoldDust {
        reset() {
          // nasce em qualquer ponto da tela — mais espalhado verticalmente
          this.x      = Math.random() * canvas.width;
          this.y      = Math.random() * canvas.height;
          this.r      = Math.random() * 5 + 2.5;
          this.vx     = (Math.random() - 0.5) * 0.4;
          this.vy     = -(Math.random() * 0.7 + 0.2);   // sobe com velocidades variadas
          this.rot    = Math.random() * Math.PI * 2;
          this.rotSpd = (Math.random() - 0.5) * 0.03;
          // todas começam invisíveis e ganham alpha gradual (sem pop)
          this.maxL   = Math.random() * 500 + 300;
          this.life   = 0;
          this.alpha  = 0;
          this.spawnDelay = Math.random() * 240; // espalha entradas no tempo (apenas no spawn inicial)
          this.maxA   = Math.random() * 0.6 + 0.2;
          this.color  = cols[Math.floor(Math.random() * cols.length)];
          this.shape  = Math.random() > 0.4 ? 'diamond' : 'circle';
        }
        constructor() { this.reset(); }
        tick() {
          if (this.spawnDelay > 0) { this.spawnDelay--; this.alpha = 0; return; }
          this.x   += this.vx;
          this.y   += this.vy;
          this.rot += this.rotSpd;
          this.life++;
          const t = this.life / this.maxL;
          this.alpha = t < 0.12
            ? (t / 0.12) * this.maxA
            : t > 0.8
              ? ((1 - t) / 0.2) * this.maxA
              : this.maxA;
          if (this.life >= this.maxL || this.y < -30) this.reset();
        }
        draw() {
          ctx.save();
          ctx.globalAlpha = this.alpha;
          ctx.fillStyle   = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur  = this.r * 7;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rot);
          if (this.shape === 'diamond') {
            const s = this.r * 1.8;
            ctx.beginPath();
            ctx.moveTo(0, -s); ctx.lineTo(s * 0.55, 0);
            ctx.lineTo(0, s);  ctx.lineTo(-s * 0.55, 0);
            ctx.closePath(); ctx.fill();
          } else {
            ctx.beginPath(); ctx.arc(0, 0, this.r, 0, Math.PI * 2); ctx.fill();
          }
          ctx.restore();
        }
      }
      particles = Array.from({ length: density }, () => new GoldDust());

    /* ─── SPECTRAL: fogos-fátuos surgindo e apagando por toda a tela ─── */
    } else if (theme.id === 'spectral') {
      class WispFlame {
        reset() {
          // posição totalmente aleatória em toda a tela — sem tendência de baixo
          this.x      = Math.random() * canvas.width;
          this.y      = Math.random() * canvas.height;
          // movimento leve — deriva suave em qualquer direção
          const ang   = Math.random() * Math.PI * 2;
          const spd   = Math.random() * 0.3 + 0.05;
          this.vx     = Math.cos(ang) * spd;
          this.vy     = Math.sin(ang) * spd - 0.15; // leve tendência pra cima mas sutil
          this.r      = Math.random() * 6 + 3;
          this.sway   = Math.random() * 0.8 + 0.2;
          this.phase  = Math.random() * Math.PI * 2;
          this.wobble = Math.random() * 0.03 + 0.015;
          // todas começam invisíveis e ganham alpha gradual (sem pop)
          this.maxL   = Math.random() * 400 + 150;
          this.life   = 0;
          this.alpha  = 0;
          this.spawnDelay = Math.random() * 240;
          this.maxA   = Math.random() * 0.55 + 0.15;
          this.color  = cols[Math.floor(Math.random() * cols.length)];
        }
        constructor() { this.reset(); }
        tick() {
          if (this.spawnDelay > 0) { this.spawnDelay--; this.alpha = 0; return; }
          this.x += this.vx + Math.sin(this.life * this.wobble + this.phase) * this.sway;
          this.y += this.vy;
          this.life++;
          const t = this.life / this.maxL;
          // fade suave in/out — sem posição fixa na tela
          this.alpha = t < 0.18
            ? (t / 0.18) * this.maxA
            : t > 0.65
              ? ((1 - t) / 0.35) * this.maxA
              : this.maxA;
          if (this.life >= this.maxL) this.reset();
        }
        draw() {
          ctx.save();
          ctx.globalAlpha = this.alpha;
          ctx.translate(this.x, this.y);
          ctx.rotate(Math.sin(this.life * this.wobble * 1.4 + this.phase) * 0.22);
          ctx.shadowColor = this.color;
          ctx.shadowBlur  = this.r * 12;
          ctx.fillStyle   = this.color;
          const r = this.r;
          ctx.beginPath();
          ctx.moveTo(0, -r * 2.6);
          ctx.bezierCurveTo( r, -r * 0.9,  r,  r * 0.5, 0,  r * 1.1);
          ctx.bezierCurveTo(-r,  r * 0.5, -r, -r * 0.9, 0, -r * 2.6);
          ctx.closePath(); ctx.fill();
          // miolo brilhante
          ctx.globalAlpha = this.alpha * 0.6;
          ctx.fillStyle   = '#F0E0FF';
          ctx.beginPath();
          ctx.ellipse(0, -r * 0.5, r * 0.4, r * 0.65, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      particles = Array.from({ length: density }, () => new WispFlame());

    /* ─── MYTHIC: bolhas distribuídas por toda a tela ─── */
    } else {
      class SoapBubble {
        reset() {
          // nasce em qualquer lugar da tela
          this.x      = Math.random() * canvas.width;
          this.y      = Math.random() * canvas.height;
          this.r      = Math.random() * 20 + 6;
          // direção aleatória — não só para cima
          const ang   = Math.random() * Math.PI * 2;
          const spd   = Math.random() * 0.35 + 0.08;
          this.vx     = Math.cos(ang) * spd;
          this.vy     = Math.sin(ang) * spd - 0.2; // leve flutuação pra cima
          this.drift  = Math.random() * 0.02 + 0.008;
          this.phase  = Math.random() * Math.PI * 2;
          this.maxL   = Math.random() * 500 + 250;
          this.life   = 0;
          this.alpha  = 0;
          this.scale  = 0;
          this.spawnDelay = Math.random() * 240;
          this.maxA   = Math.random() * 0.5 + 0.2;
          this.color  = cols[Math.floor(Math.random() * cols.length)];
          this.scale  = 1;
        }
        constructor() { this.reset(); }
        tick() {
          if (this.spawnDelay > 0) { this.spawnDelay--; this.alpha = 0; return; }
          this.x += this.vx + Math.sin(this.life * this.drift + this.phase) * 0.4;
          this.y += this.vy + Math.cos(this.life * this.drift * 0.7 + this.phase) * 0.2;
          this.life++;
          const t = this.life / this.maxL;
          if (t < 0.1) {
            this.scale = t / 0.1;
            this.alpha = (t / 0.1) * this.maxA;
          } else if (t > 0.85) {
            const pt = (t - 0.85) / 0.15;
            this.scale = 1 + pt * 2.2;
            this.alpha = (1 - pt) * this.maxA;
          } else {
            this.scale = 1;
            this.alpha = this.maxA;
          }
          if (this.life >= this.maxL) this.reset();
        }
        draw() {
          const r = this.r * this.scale;
          ctx.save();
          ctx.globalAlpha = this.alpha;
          // anel da bolha
          ctx.strokeStyle = this.color;
          ctx.lineWidth   = 1.6;
          ctx.shadowColor = this.color;
          ctx.shadowBlur  = r * 2.5;
          ctx.beginPath();
          ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
          ctx.stroke();
          // preenchimento translúcido
          ctx.globalAlpha = this.alpha * 0.08;
          ctx.fillStyle   = this.color;
          ctx.fill();
          // brilho interno
          ctx.globalAlpha = this.alpha * 0.45;
          ctx.fillStyle   = 'rgba(255,255,255,0.9)';
          ctx.beginPath();
          ctx.arc(this.x - r * 0.32, this.y - r * 0.32, r * 0.2, 0, Math.PI * 2);
          ctx.fill();
          // reflexo menor
          ctx.globalAlpha = this.alpha * 0.25;
          ctx.beginPath();
          ctx.arc(this.x - r * 0.15, this.y - r * 0.5, r * 0.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      // Bolhas são mais esparsas e maiores — menos quantidade
      const count = Math.floor(density * 0.45);
      particles = Array.from({ length: count }, () => new SoapBubble());
    }

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.tick(); p.draw(); });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return <canvas ref={ref} className="particles"/>;
}

Object.assign(window, { PokeballOrb, StatusCycle, StatusToggle, StatusMenu, ParticleCanvas });
