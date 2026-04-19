/* ================================================================
   STATS — Trainer's Ledger
================================================================ */

function computeStats(games, statusMap) {
  const byGroup = {}, byPlatform = {}, byDecade = {}, byStatus = {};
  let owned = 0;
  games.forEach(g => {
    const st = statusMap[g.id] || 'none';
    byStatus[st] = (byStatus[st]||0) + 1;
    const isOwned = OWNED_STATUSES.has(st);
    if (isOwned) owned++;

    if (!byGroup[g.group])       byGroup[g.group]       = { total:0, owned:0 };
    if (!byPlatform[g.platform]) byPlatform[g.platform] = { total:0, owned:0 };
    const dec = `${Math.floor(g.year/10)*10}s`;
    if (!byDecade[dec])          byDecade[dec]          = { total:0, owned:0 };

    byGroup[g.group].total++;
    byPlatform[g.platform].total++;
    byDecade[dec].total++;
    if (isOwned) {
      byGroup[g.group].owned++;
      byPlatform[g.platform].owned++;
      byDecade[dec].owned++;
    }
  });
  return { total: games.length, owned, byGroup, byPlatform, byDecade, byStatus };
}

function StatBar({ label, owned, total, accent }) {
  const pct = total ? (owned/total*100) : 0;
  return (
    <div className="statbar">
      <div className="statbar-top">
        <span className="statbar-label">{label}</span>
        <span className="statbar-count">
          <em>{owned}</em>
          <span className="statbar-slash">/</span>
          {total}
        </span>
      </div>
      <div className="statbar-track">
        <div className="statbar-fill" style={{ width: pct+'%', background: accent || 'var(--accent)' }}/>
      </div>
    </div>
  );
}

function StatsPanel({ games, statusMap, onClose }) {
  const stats = useMemo(()=>computeStats(games, statusMap), [games, statusMap]);
  const sortedGroup = Object.entries(stats.byGroup);
  const sortedPlat  = Object.entries(stats.byPlatform).sort((a,b)=>b[1].total-a[1].total);
  const sortedDec   = Object.entries(stats.byDecade).sort((a,b)=>a[0].localeCompare(b[0]));

  return (
    <div className="stats-overlay" onClick={onClose}>
      <div className="stats-sheet" onClick={e=>e.stopPropagation()}>
        <div className="stats-head">
          <div>
            <div className="stats-eyebrow">Análise da Coleção</div>
            <h2 className="stats-title">Estatísticas</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        <div className="stats-status-row">
          {STATUS_ORDER.filter(k=>k!=='none').map(k=>{
            const s = STATUS[k];
            const count = stats.byStatus[k] || 0;
            return (
              <div key={k} className="stats-status-chip" style={{'--c': s.color}}>
                <span className="stats-status-glyph">{s.short}</span>
                <div>
                  <div className="stats-status-label">{s.label}</div>
                  <div className="stats-status-count">{count}</div>
                </div>
              </div>
            );
          })}
          <div className="stats-status-chip" style={{'--c':'var(--text2)'}}>
            <span className="stats-status-glyph">∅</span>
            <div>
              <div className="stats-status-label">Sem status</div>
              <div className="stats-status-count">{stats.byStatus.none || 0}</div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <section className="stats-section">
            <h3 className="stats-sec-title">Por geração / grupo</h3>
            {sortedGroup.map(([name, v]) =>
              <StatBar key={name} label={name} owned={v.owned} total={v.total}/>)}
          </section>
          <section className="stats-section">
            <h3 className="stats-sec-title">Por plataforma</h3>
            {sortedPlat.map(([name, v]) =>
              <StatBar key={name} label={name} owned={v.owned} total={v.total}
                accent="var(--info)"/>)}
          </section>
          <section className="stats-section">
            <h3 className="stats-sec-title">Por década</h3>
            {sortedDec.map(([name, v]) =>
              <StatBar key={name} label={name} owned={v.owned} total={v.total}
                accent="var(--chip-done)"/>)}
          </section>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { computeStats, StatBar, StatsPanel });
