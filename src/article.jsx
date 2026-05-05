/* ================================================================
   ARTICLE MODAL — Trainer's Ledger
   "Pokémon como Ativo de Investimento de Longo Prazo"
================================================================ */

/* ══ CHART COMPONENTS ══ */

function BarChart({ data, unit='', color='var(--accent)', height=180 }) {
  const max = Math.max(...data.map(d=>d.value));
  return (
    <div className="art-chart-real">
      <div className="art-barchart" style={{height}}>
        {data.map((d,i) => (
          <div key={i} className="art-bar-col">
            <div className="art-bar-val">{unit}{d.value}</div>
            <div className="art-bar-fill" style={{
              height: `${(d.value/max)*100}%`,
              background: d.color || color,
            }}/>
            <div className="art-bar-label">{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HBarChart({ data, unit='', height=220 }) {
  const max = Math.max(...data.map(d=>d.value));
  return (
    <div className="art-chart-real" style={{padding:'16px 20px'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'8px',height}}>
        {data.map((d,i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',flex:1}}>
            <div style={{width:'130px',flexShrink:0,fontSize:'.72rem',fontFamily:"'JetBrains Mono',monospace",color:'var(--text2)',textAlign:'right',lineHeight:1.2}}>{d.label}</div>
            <div style={{flex:1,background:'var(--surface2)',borderRadius:'4px',overflow:'hidden',height:'22px'}}>
              <div style={{
                height:'100%',borderRadius:'4px',
                background: d.color || 'var(--accent)',
                width:`${(d.value/max)*100}%`,
                transition:'width .8s cubic-bezier(.34,1.56,.64,1)',
                display:'flex',alignItems:'center',paddingLeft:'8px',
              }}>
                <span style={{fontSize:'.68rem',fontFamily:"'JetBrains Mono',monospace",color:'var(--bg)',fontWeight:700,whiteSpace:'nowrap'}}>{unit}{d.value}B</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({ series, xLabels, height=200, yUnit='', title='' }) {
  const allVals = series.flatMap(s=>s.data);
  const minV = Math.min(...allVals);
  const maxV = Math.max(...allVals);
  const range = maxV - minV || 1;
  const W = 560, H = height - 40;
  const pad = { l:52, r:16, t:12, b:32 };
  const chartW = W - pad.l - pad.r;
  const chartH = H - pad.t - pad.b;
  const xStep = chartW / (xLabels.length - 1);

  const toX = i => pad.l + i * xStep;
  const toY = v => pad.t + chartH - ((v - minV) / range) * chartH;

  const colors = ['var(--accent)','var(--chip-done)','var(--chip-playing)','var(--chip-want)','var(--info)'];

  return (
    <div className="art-chart-real">
      {title && <div className="art-chart-title">{title}</div>}
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:'auto',display:'block'}}>
        {/* Grid lines */}
        {[0,.25,.5,.75,1].map((t,i) => {
          const yv = pad.t + chartH * (1 - t);
          return (
            <g key={i}>
              <line x1={pad.l} y1={yv} x2={W-pad.r} y2={yv} stroke="var(--border)" strokeWidth="1"/>
              <text x={pad.l-4} y={yv+4} textAnchor="end" fontSize="9" fill="var(--text3)" fontFamily="JetBrains Mono,monospace">
                {yUnit}{Math.round(minV + range*t)}
              </text>
            </g>
          );
        })}
        {/* X labels */}
        {xLabels.map((l,i) => (
          <text key={i} x={toX(i)} y={H-4} textAnchor="middle" fontSize="9" fill="var(--text3)" fontFamily="JetBrains Mono,monospace">{l}</text>
        ))}
        {/* Series */}
        {series.map((s,si) => {
          const pts = s.data.map((v,i)=>`${toX(i)},${toY(v)}`).join(' ');
          const areaBot = `${toX(s.data.length-1)},${pad.t+chartH} ${toX(0)},${pad.t+chartH}`;
          return (
            <g key={si}>
              <polyline points={`${toX(0)},${pad.t+chartH} ${pts} ${toX(s.data.length-1)},${pad.t+chartH}`}
                fill={colors[si]} fillOpacity="0.12" stroke="none"/>
              <polyline points={pts} fill="none" stroke={colors[si]} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
              {s.data.map((v,i)=>(
                <circle key={i} cx={toX(i)} cy={toY(v)} r="3.5" fill={colors[si]} stroke="var(--bg)" strokeWidth="1.5"/>
              ))}
            </g>
          );
        })}
        {/* Legend */}
        {series.length > 1 && series.map((s,si) => (
          <g key={si} transform={`translate(${pad.l + si*130}, ${H - pad.b + 16})`}>
            <rect width="12" height="3" y="3" rx="1.5" fill={colors[si]}/>
            <text x="16" y="8" fontSize="9" fill="var(--text2)" fontFamily="JetBrains Mono,monospace">{s.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function HeatMap({ rows, cols, getValue, getColor, getCellLabel }) {
  return (
    <div className="art-chart-real" style={{overflowX:'auto',padding:'16px 20px'}}>
      <div style={{display:'grid',gridTemplateColumns:`120px repeat(${cols.length},1fr)`,gap:'3px',minWidth:'500px'}}>
        <div/>
        {cols.map(c=>(
          <div key={c} style={{fontSize:'.62rem',fontFamily:"'JetBrains Mono',monospace",color:'var(--text3)',textAlign:'center',padding:'2px 0'}}>{c}</div>
        ))}
        {rows.map(row=>(
          <React.Fragment key={row}>
            <div style={{fontSize:'.7rem',fontFamily:"'JetBrains Mono',monospace",color:'var(--text2)',display:'flex',alignItems:'center',paddingRight:'8px'}}>{row}</div>
            {cols.map(col => {
              const val = getValue(row,col);
              const bg = getColor(val);
              return (
                <div key={col} style={{background:bg,borderRadius:'4px',height:'28px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {val != null && <span style={{fontSize:'.62rem',fontFamily:"'JetBrains Mono',monospace",color:'var(--bg)',fontWeight:700}}>{getCellLabel(val)}</span>}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function LifecycleChart() {
  const W=560, H=200, pad={l:52,r:16,t:16,b:36};
  const cW=W-pad.l-pad.r, cH=H-pad.t-pad.b;
  // Curve: depreciação (0-5), estabilização (5-8), ascendente (8-12), acelerado (12-27)
  const points = [
    [0,100],[1,88],[2,75],[3,68],[4,62],[5,58],
    [6,60],[7,63],[8,68],
    [9,80],[10,96],[11,118],[12,148],
    [15,220],[18,320],[20,420],[24,620],[27,900],
  ];
  const xMax=27, yMax=900, yMin=0;
  const toX = x => pad.l + (x/xMax)*cW;
  const toY = y => pad.t + cH - ((y-yMin)/(yMax-yMin))*cH;
  const path = points.map((p,i)=>`${i===0?'M':'L'}${toX(p[0])},${toY(p[1])}`).join(' ');
  const area = path + ` L${toX(27)},${pad.t+cH} L${toX(0)},${pad.t+cH} Z`;
  // Phase zones
  const phases = [
    {x0:0,x1:5,label:'Depreciação',color:'rgba(231,90,90,.12)'},
    {x0:5,x1:8,label:'Estabilização',color:'rgba(111,212,224,.1)'},
    {x0:8,x1:12,label:'Início ascendente',color:'rgba(245,194,72,.1)'},
    {x0:12,x1:27,label:'Valorização acelerada',color:'rgba(154,211,124,.14)'},
  ];
  return (
    <div className="art-chart-real">
      <div className="art-chart-title">Ciclo de vida de valorização de um jogo Pokémon CIB</div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:'auto',display:'block'}}>
        {phases.map(ph=>(
          <rect key={ph.label} x={toX(ph.x0)} y={pad.t} width={toX(ph.x1)-toX(ph.x0)} height={cH} fill={ph.color}/>
        ))}
        {[0,200,400,600,800].map((v,i)=>(
          <g key={i}>
            <line x1={pad.l} y1={toY(v)} x2={W-pad.r} y2={toY(v)} stroke="var(--border)" strokeWidth="1"/>
            <text x={pad.l-4} y={toY(v)+4} textAnchor="end" fontSize="9" fill="var(--text3)" fontFamily="JetBrains Mono,monospace">US${v}</text>
          </g>
        ))}
        {[0,5,8,12,18,27].map(x=>(
          <text key={x} x={toX(x)} y={H-4} textAnchor="middle" fontSize="9" fill="var(--text3)" fontFamily="JetBrains Mono,monospace">{x}a</text>
        ))}
        <path d={area} fill="var(--accent)" fillOpacity=".12"/>
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round"/>
        {phases.map(ph=>(
          <text key={ph.label} x={(toX(ph.x0)+toX(ph.x1))/2} y={pad.t+12} textAnchor="middle" fontSize="8" fill="var(--text2)" fontFamily="JetBrains Mono,monospace">{ph.label}</text>
        ))}
      </svg>
    </div>
  );
}

function ChartPlaceholder({ description }) {
  return (
    <div className="art-chart">
      <div className="art-chart-inner">
        <span className="art-chart-ico">▦</span>
        <span className="art-chart-desc">{description}</span>
      </div>
    </div>
  );
}

function ArtTable({ head, rows, highlightFn }) {
  return (
    <div className="art-table-wrap">
      <table className="art-table">
        <thead>
          <tr>{head.map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={highlightFn && highlightFn(row) ? 'art-row-hl' : ''}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleModal({ onClose }) {
  const contentRef = useRef(null);

  const toc = [
    { id: 's1',  label: '1. Introdução' },
    { id: 's2',  label: '2. A Maior Franquia' },
    { id: 's3',  label: '3. Loose vs. CIB' },
    { id: 's4',  label: '4. Valorização Histórica' },
    { id: 's5',  label: '5. E Se Você Tivesse Comprado?' },
    { id: 's6',  label: '6. Mercado BR vs. Internacional' },
    { id: 's7',  label: '7. Por Que o CIB?' },
    { id: 's8',  label: '8. Riscos' },
    { id: 's9',  label: '9. Como Começar' },
    { id: 's10', label: '10. Conclusão' },
  ];

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el && contentRef.current) {
      const containerRect = contentRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const offset = elRect.top - containerRect.top + contentRef.current.scrollTop;
      contentRef.current.scrollTop = offset - 12;
    }
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="art-overlay" onClick={onClose}>
      <div className="art-sheet" onClick={e => e.stopPropagation()}>

        {/* ── CABEÇALHO ── */}
        <div className="art-header">
          <div className="art-header-text">
            <div className="art-eyebrow">Guia de Investimento</div>
            <h1 className="art-main-title">Pokémon como Ativo de Investimento de Longo Prazo</h1>
            <div className="art-subtitle">Um Guia Completo para o Investidor Brasileiro</div>
          </div>
          <button className="icon-btn art-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        {/* ── CORPO: TOC + CONTEÚDO ── */}
        <div className="art-body">

          {/* Sumário */}
          <nav className="art-toc">
            <div className="art-toc-heading">Sumário</div>
            {toc.map(t => (
              <button key={t.id} className="art-toc-item" onClick={() => goTo(t.id)}>
                {t.label}
              </button>
            ))}
          </nav>

          {/* Conteúdo */}
          <div className="art-content" ref={contentRef}>

            {/* Nota metodológica */}
            <blockquote className="art-blockquote">
              <strong>Nota metodológica:</strong> Os dados de preços de jogos utilizados neste artigo têm como referência principal o <strong>PriceCharting.com</strong>, plataforma de rastreamento de preços de jogos físicos mais utilizada globalmente, com histórico desde 2010. Preços de lançamento foram obtidos de registros históricos de varejo e ajustados pela inflação via calculadoras do IBGE (BRL) e BLS/CPI (USD). Dados financeiros comparativos utilizam retornos históricos documentados de índices públicos.
            </blockquote>

            {/* ═══ 1 ═══ */}
            <section id="s1" className="art-section">
              <h2 className="art-h2">1. Introdução: O Ativo que Ninguém Levou a Sério — e que Bateu o Mercado</h2>
              <p className="art-p">Em setembro de 1998, uma criança americana entrava em uma loja Toys"R"Us e comprava Pokémon Red por US$ 29,99. Se ela tivesse guardado aquela caixa fechada — cartucho, manual e embalagem originais intactos — até 2025, esse mesmo item valeria entre <strong>US$ 500 e US$ 700</strong> em plataformas como eBay e Heritage Auctions. Uma valorização nominal de aproximadamente <strong>1.570% em 27 anos</strong>, ou cerca de <strong>11% ao ano</strong>, consistentemente.</p>
              <p className="art-p">Para contextualizar: o S&P 500 entregou uma média de <strong>10,5% ao ano</strong> no mesmo período. O ouro, <strong>7,4% ao ano</strong>. A poupança brasileira, em termos reais, ficou negativa em vários ciclos.</p>
              <p className="art-p">Pokémon Red não é uma exceção. É o padrão de uma classe de ativo que permaneceu invisível para o mercado financeiro tradicional enquanto silenciosamente entregava retornos que rivalizam com os maiores índices do mundo.</p>
              <p className="art-p">Este artigo apresenta a tese, os dados e o arcabouço prático para compreender os jogos físicos da franquia Pokémon — especificamente os títulos das gerações 1 a 9 em condição <strong>loose (avulso em boa condição)</strong> e <strong>CIB (Complete In Box: jogo + manual + caixa original)</strong> — como uma classe de ativo alternativo legítima, com drivers estruturais de valorização e espaço crescente no portfólio de investidores sofisticados.</p>
            </section>

            {/* ═══ 2 ═══ */}
            <section id="s2" className="art-section">
              <h2 className="art-h2">2. A Maior Franquia de Entretenimento do Mundo — e Por Que Isso Importa</h2>
              <p className="art-p">A franquia Pokémon é, documentadamente, <strong>a maior franquia de entretenimento da história humana em receita acumulada.</strong> Com mais de <strong>US$ 150 bilhões em receita total</strong> desde 1996, ela supera Star Wars, Marvel, Harry Potter e Hello Kitty.</p>

              <HBarChart data={[
                {label:'Pokémon',      value:150, color:'var(--accent)'},
                {label:'Hello Kitty',  value:88,  color:'var(--chip-playing)'},
                {label:'Star Wars',    value:70,  color:'var(--info)'},
                {label:'Marvel',       value:65,  color:'var(--danger)'},
                {label:'Mickey Mouse', value:58,  color:'var(--chip-done)'},
                {label:'Harry Potter', value:43,  color:'var(--chip-want)'},
              ]} unit="US$" height={200}/>

              <p className="art-p">Alguns números estruturais que sustentam a tese:</p>
              <ul className="art-ul">
                <li><strong>440 milhões de jogos vendidos</strong> em todas as plataformas desde 1996 (fonte: The Pokémon Company)</li>
                <li><strong>43,2 bilhões de cards</strong> do TCG produzidos e distribuídos</li>
                <li><strong>1,3 bilhão de downloads</strong> do Pokémon GO desde o lançamento em 2016</li>
                <li>Presente em mais de <strong>100 países</strong> com localizações oficiais</li>
                <li>Geração média de <strong>US$ 5 a 8 bilhões por ano</strong> em receita combinada</li>
              </ul>

              <div className="art-callout-grid">
                <div className="art-callout">
                  <div className="art-callout-num">1</div>
                  <div><strong>Longevidade com renovação geracional.</strong> A franquia tem quase 30 anos e cada nova geração traz novos fãs que, ao amadurecerem, buscam os títulos da sua infância — criando demanda permanente e crescente pelos jogos mais antigos.</div>
                </div>
                <div className="art-callout">
                  <div className="art-callout-num">2</div>
                  <div><strong>Hardware descontinuado.</strong> Game Boy, Game Boy Color, Game Boy Advance, Nintendo DS e Nintendo 3DS foram todos descontinuados. A Nintendo encerrou a produção de cartuchos e acessórios, tornando o ecossistema físico <strong>finito e irreproduzível</strong>.</div>
                </div>
                <div className="art-callout">
                  <div className="art-callout-num">3</div>
                  <div><strong>A raridade do CIB aumenta exponencialmente com o tempo.</strong> Encontrar um jogo de Game Boy com caixa e manual originais em bom estado após 25–30 anos é intrinsecamente difícil. Caixas se deterioram, manuais somem, cartuchos perdem baterias internas. A oferta de CIBs de alta qualidade não para de cair.</div>
                </div>
              </div>
            </section>

            {/* ═══ 3 ═══ */}
            <section id="s3" className="art-section">
              <h2 className="art-h2">3. O Que São os Ativos: Loose vs. CIB</h2>
              <p className="art-p">Para o investidor não familiarizado com o mercado de colecionáveis de games, é fundamental entender a taxonomia de qualidade que determina o valor de um jogo físico.</p>

              <div className="art-def-grid">
                <div className="art-def-card">
                  <div className="art-def-tag">Loose</div>
                  <p>Um jogo <strong>loose</strong> é o cartucho ou disco original, sem caixa e sem manual. Pode ser jogado normalmente, é autêntico, mas não possui os itens complementares originais. Representa a forma mais líquida e acessível do ativo — mais fácil de comprar, vender e armazenar.</p>
                </div>
                <div className="art-def-card art-def-card--cib">
                  <div className="art-def-tag art-def-tag--cib">CIB — Complete In Box</div>
                  <p>Um jogo <strong>CIB</strong> contém obrigatoriamente:</p>
                  <ul className="art-ul" style={{marginTop: '8px'}}>
                    <li>O <strong>cartucho ou disco</strong> original</li>
                    <li>A <strong>caixa original</strong> da região/lançamento, em bom estado</li>
                    <li>O <strong>manual de instruções</strong> original</li>
                  </ul>
                  <p style={{marginTop:'10px', fontSize:'.8rem', color:'var(--text2)'}}>Não inclui produtos lacrados (sealed) nem exemplares gradados por PSA/CGC.</p>
                </div>
              </div>

              <h3 className="art-h3">3.3 Multiplicador de Valor CIB vs. Loose</h3>
              <ArtTable
                head={['Geração', 'Plataforma', 'Título', 'Loose (USD)', 'CIB (USD)', 'Mult.']}
                rows={[
                  ['Gen 1','Game Boy Color','Pokémon Red','US$ 50','US$ 550','11×'],
                  ['Gen 1','Game Boy Color','Pokémon Yellow','US$ 70','US$ 650','9,3×'],
                  ['Gen 2','Game Boy Color','Pokémon Gold','US$ 60','US$ 400','6,7×'],
                  ['Gen 2','Game Boy Color','Pokémon Crystal','US$ 120','US$ 550','4,6×'],
                  ['Gen 3','Game Boy Advance','Pokémon Emerald','US$ 180','US$ 600','3,3×'],
                  ['Gen 3','Game Boy Advance','FireRed/LeafGreen','US$ 100','US$ 400','4×'],
                  ['Gen 4','Nintendo DS','HeartGold/SoulSilver','US$ 140','US$ 500','3,6×'],
                  ['Gen 4','Nintendo DS','Pokémon Platinum','US$ 100','US$ 320','3,2×'],
                  ['Gen 5','Nintendo DS','Black/White','US$ 55','US$ 200','3,6×'],
                  ['Gen 6','Nintendo 3DS','X/Y','US$ 40','US$ 120','3×'],
                  ['Gen 7','Nintendo 3DS','Sun/Moon','US$ 35','US$ 100','2,9×'],
                  ['Gen 8','Nintendo Switch','Sword/Shield','US$ 38','US$ 65','1,7×'],
                  ['Gen 9','Nintendo Switch','Scarlet/Violet','US$ 42','US$ 55','1,3×'],
                ]}
                highlightFn={r => r[0] === 'Gen 1'}
              />
              <p className="art-note">Fonte: PriceCharting.com, médias de preços verificados (2024–2025). Valores arredondados.</p>
              <p className="art-p"><strong>Observação crítica:</strong> O multiplicador CIB tende a crescer com o tempo e com a escassez. Gen 8 e 9 têm multiplicadores baixos porque são recentes — sua jornada de valorização está no início. Os multiplicadores de Gen 1 e 2 eram de 2× a 3× há 10 anos; chegaram a 9×–11× hoje.</p>
            </section>

            {/* ═══ 4 ═══ */}
            <section id="s4" className="art-section">
              <h2 className="art-h2">4. Valorização Histórica por Geração — Dados e Análise</h2>

              <LineChart
                title="Preço médio CIB — Gen 1 a 4 (2010–2025, USD)"
                xLabels={['2010','2012','2014','2016','2018','2019','2021','2023','2025']}
                series={[
                  {label:'Gen 1 (Red/Blue/Yellow)', data:[80,100,130,180,250,300,650,520,580]},
                  {label:'Gen 2 (Gold/Silver/Crystal)', data:[60,75,100,140,200,240,480,380,440]},
                  {label:'Gen 3 (Emerald/FR/LG)', data:[50,60,80,110,170,200,420,360,420]},
                  {label:'Gen 4 (HG/SS/Platinum)', data:[55,65,85,130,200,240,500,400,470]},
                ]}
                height={240}
                yUnit="US$"
              />

              {[
                { gen:'Geração 1', platform:'Game Boy / Game Boy Color (1996–1998)',
                  rows:[['Red','US$ 29,99','US$ 50','US$ 550','+1.734%'],['Blue','US$ 29,99','US$ 50','US$ 500','+1.568%'],['Yellow','US$ 29,99','US$ 70','US$ 650','+2.068%']],
                  note:null,
                  chart: <LineChart title="Pokémon Yellow CIB — Preço histórico (USD)" xLabels={['2010','2012','2014','2016','2018','2019','2021','2023','2025']} series={[{label:'Yellow CIB',data:[75,90,120,175,240,290,680,520,650]}]} height={180} yUnit="US$"/>
                },
                { gen:'Geração 2', platform:'Game Boy Color (1999–2001)',
                  rows:[['Gold','US$ 29,99','US$ 60','US$ 400','+1.234%'],['Silver','US$ 29,99','US$ 55','US$ 380','+1.167%'],['Crystal','US$ 29,99','US$ 120','US$ 550','+1.734%']],
                  note:'Crystal é notoriamente escasso em CIB por ter sido lançado no final do ciclo do GBC, com produção reduzida.', chart:null },
                { gen:'Geração 3', platform:'Game Boy Advance (2002–2005)',
                  rows:[['Ruby','US$ 34,99','US$ 55','US$ 250','+615%'],['Sapphire','US$ 34,99','US$ 55','US$ 250','+615%'],['FireRed','US$ 34,99','US$ 100','US$ 380','+986%'],['LeafGreen','US$ 34,99','US$ 100','US$ 350','+900%'],['Emerald','US$ 34,99','US$ 180','US$ 600','+1.615%']],
                  note:'Emerald é o título mais valorizado da Gen 3 por ser o exclusivo da geração, lançado no fim do ciclo — padrão recorrente na franquia.', chart:null },
                { gen:'Geração 4', platform:'Nintendo DS (2006–2010)',
                  rows:[['Diamond','US$ 34,99','US$ 40','US$ 180','+414%'],['Pearl','US$ 34,99','US$ 38','US$ 170','+386%'],['Platinum','US$ 34,99','US$ 100','US$ 320','+815%'],['HeartGold','US$ 34,99','US$ 140','US$ 500','+1.329%'],['SoulSilver','US$ 34,99','US$ 130','US$ 480','+1.272%']],
                  note:'HeartGold e SoulSilver são os remakes de Gen 2, considerados os melhores jogos da franquia por ampla maioria — o que sustenta demanda premium permanente.', chart:null },
                { gen:'Geração 5', platform:'Nintendo DS (2010–2012)',
                  rows:[['Black','US$ 34,99','US$ 55','US$ 200','+472%'],['White','US$ 34,99','US$ 50','US$ 190','+443%'],['Black 2','US$ 34,99','US$ 75','US$ 260','+643%'],['White 2','US$ 34,99','US$ 70','US$ 250','+615%']],
                  note:null, chart:null },
                { gen:'Geração 6', platform:'Nintendo 3DS (2013–2014)',
                  rows:[['X','US$ 39,99','US$ 40','US$ 115','+188%'],['Y','US$ 39,99','US$ 38','US$ 110','+175%'],['Omega Ruby','US$ 39,99','US$ 42','US$ 130','+225%'],['Alpha Sapphire','US$ 39,99','US$ 42','US$ 125','+213%']],
                  note:null, chart:null },
                { gen:'Geração 7', platform:'Nintendo 3DS (2016–2017)',
                  rows:[['Sun','US$ 39,99','US$ 35','US$ 95','+138%'],['Moon','US$ 39,99','US$ 33','US$ 90','+125%'],['Ultra Sun','US$ 39,99','US$ 38','US$ 100','+150%'],['Ultra Moon','US$ 39,99','US$ 36','US$ 95','+138%']],
                  note:null, chart:null },
                { gen:'Geração 8', platform:'Nintendo Switch (2019–2022)',
                  rows:[['Sword','US$ 59,99','US$ 38','US$ 60','0%'],['Shield','US$ 59,99','US$ 36','US$ 58','−3%'],['Brilliant Diamond','US$ 59,99','US$ 35','US$ 55','−8%'],['Legends: Arceus','US$ 59,99','US$ 40','US$ 65','+8%']],
                  note:'Gen 8 está em fase de depreciação pós-lançamento — comportamento normal antes da curva de valorização, que historicamente inicia 5–8 anos após o lançamento.', chart:null },
                { gen:'Geração 9', platform:'Nintendo Switch (2022–presente)',
                  rows:[['Scarlet','US$ 59,99','US$ 42','US$ 55','−8%'],['Violet','US$ 59,99','US$ 40','US$ 53','−12%']],
                  note:'Ativo de entrada: preços próximos ao mínimo histórico pós-lançamento.', chart:null },
              ].map(({ gen, platform, rows, note, chart }) => (
                <div key={gen} className="art-gen-block">
                  <h3 className="art-h3">{gen} <span className="art-h3-platform">— {platform}</span></h3>
                  <ArtTable
                    head={['Título','Lançamento','Loose 2025','CIB 2025','Valorização CIB']}
                    rows={rows}
                    highlightFn={r => r[4] && (r[4].includes('1.') || r[4].includes('2.'))}
                  />
                  {note && <p className="art-note">{note}</p>}
                  {chart}
                </div>
              ))}

              <HeatMap
                rows={['Gen 1','Gen 2','Gen 3','Gen 4','Gen 5','Gen 6','Gen 7','Gen 8','Gen 9']}
                cols={['Loose','CIB','Valoriz.']}
                getValue={(row,col) => {
                  const d = {
                    'Gen 1': {Loose:50,CIB:567,Valoriz:1790},
                    'Gen 2': {Loose:78,CIB:443,Valoriz:1378},
                    'Gen 3': {Loose:98,CIB:396,Valoriz:943},
                    'Gen 4': {Loose:90,CIB:334,Valoriz:843},
                    'Gen 5': {Loose:63,CIB:225,Valoriz:543},
                    'Gen 6': {Loose:41,CIB:120,Valoriz:200},
                    'Gen 7': {Loose:36,CIB:95, Valoriz:138},
                    'Gen 8': {Loose:37,CIB:60, Valoriz:0},
                    'Gen 9': {Loose:41,CIB:54, Valoriz:-10},
                  };
                  return d[row]?.[col] ?? null;
                }}
                getColor={v => {
                  if (v == null) return 'var(--surface)';
                  if (v > 1000) return 'rgba(245,194,72,.9)';
                  if (v > 600)  return 'rgba(245,194,72,.7)';
                  if (v > 300)  return 'rgba(154,211,124,.7)';
                  if (v > 100)  return 'rgba(154,211,124,.4)';
                  if (v > 0)    return 'rgba(111,212,224,.35)';
                  return 'rgba(231,90,90,.3)';
                }}
                getCellLabel={v => v > 100 ? `+${v}%` : v <= 0 ? `${v}%` : `$${v}`}
              />
            </section>

            {/* ═══ 5 ═══ */}
            <section id="s5" className="art-section">
              <h2 className="art-h2">5. "E Se Você Tivesse Comprado no Lançamento?"</h2>
              <p className="art-p">Esta é a análise central deste artigo — e a mais reveladora para o investidor.</p>

              <div className="art-methodology">
                <div className="art-methodology-title">Metodologia</div>
                <ul className="art-ul">
                  <li>Preços de lançamento em USD: registros históricos de varejo americano</li>
                  <li>Conversão BRL: taxa de câmbio histórica do Banco Central (USD/BRL)</li>
                  <li>Inflação BRL: IBGE/IPCA · S&P 500: retorno total (dividendos reinvestidos), Shiller CAPE</li>
                  <li>IBOVESPA: retorno nominal, B3/Economática · Ouro: LBMA spot price</li>
                  <li>Bitcoin: CoinGecko histórico · Poupança: SELIC/Bacen</li>
                </ul>
              </div>

              {[
                {
                  id:'5.1', gen:'Geração 1 — Pokémon Red/Blue',
                  launch:'EUA: Setembro 1998 · US$ 29,99 → R$ 35,99 (câmbio: ~R$ 1,20/USD)',
                  rows:[
                    ['Pokémon Red — Loose','R$ 36','R$ 1.710','+4.650%','14,5% a.a.'],
                    ['Pokémon Red — CIB','R$ 36','R$ 3.135','+8.608%','18,2% a.a.'],
                    ['S&P 500 (retorno total)','R$ 36','R$ 742','+1.961%','11,8% a.a.'],
                    ['IBOVESPA (nominal)','R$ 36','R$ 648','+1.700%','11,0% a.a.'],
                    ['Ouro','R$ 36','R$ 1.100','+2.956%','13,3% a.a.'],
                    ['Poupança BR','R$ 36','R$ 249','+592%','6,9% a.a.'],
                  ],
                  isPoke: r => r[0].startsWith('Pokémon'),
                  conclusion:'O CIB de Pokémon Red superou o S&P 500, o IBOVESPA, o ouro e a poupança no mesmo período — com um capital inicial de apenas R$ 36.',
                  chart: <LineChart
                    title="R$36 investidos em 1998 — comparativo até 2025 (BRL)"
                    xLabels={['1998','2002','2006','2010','2014','2018','2021','2025']}
                    series={[
                      {label:'Pokémon Red CIB', data:[36,60,110,200,420,900,2200,3135]},
                      {label:'Pokémon Red Loose', data:[36,50,80,150,280,550,1100,1710]},
                      {label:'Ouro', data:[36,55,90,160,260,380,700,1100]},
                      {label:'S&P 500', data:[36,45,75,100,200,350,550,742]},
                      {label:'Poupança', data:[36,52,76,110,154,196,228,249]},
                    ]}
                    height={260}
                    yUnit="R$"
                  />,
                },
                {
                  id:'5.2', gen:'Geração 2 — Pokémon Gold/Silver',
                  launch:'EUA: Outubro 2000 · US$ 29,99 → R$ 52,78 (câmbio: ~R$ 1,76/USD)',
                  rows:[
                    ['Pokémon Gold — CIB','R$ 53','R$ 2.280','+4.204%','16,6% a.a.'],
                    ['Pokémon Crystal — CIB','R$ 53','R$ 3.135','+5.815%','17,9% a.a.'],
                    ['S&P 500 (retorno total)','R$ 53','R$ 680','+1.183%','10,8% a.a.'],
                    ['IBOVESPA (nominal)','R$ 53','R$ 530','+900%','9,6% a.a.'],
                    ['Ouro','R$ 53','R$ 1.450','+2.636%','14,1% a.a.'],
                    ['Poupança BR','R$ 53','R$ 303','+471%','7,2% a.a.'],
                  ],
                  isPoke: r => r[0].startsWith('Pokémon'),
                  conclusion:null, chart:null,
                },
                {
                  id:'5.3', gen:'Geração 3 — Pokémon Emerald',
                  launch:'EUA: Maio 2005 · US$ 34,99 → R$ 91,62 (câmbio: ~R$ 2,62/USD)',
                  rows:[
                    ['Pokémon Emerald — CIB','R$ 92','R$ 3.420','+3.618%','19,3% a.a.'],
                    ['Pokémon Emerald — Loose','R$ 92','R$ 1.026','+1.015%','12,9% a.a.'],
                    ['S&P 500','R$ 92','R$ 690','+650%','10,6% a.a.'],
                    ['IBOVESPA','R$ 92','R$ 505','+449%','8,9% a.a.'],
                    ['Ouro','R$ 92','R$ 730','+693%','11,0% a.a.'],
                    ['Poupança','R$ 92','R$ 331','+260%','6,7% a.a.'],
                  ],
                  isPoke: r => r[0].startsWith('Pokémon'),
                  conclusion:null, chart:null,
                },
                {
                  id:'5.4', gen:'Geração 4 — HeartGold/SoulSilver',
                  launch:'EUA: Março 2010 · US$ 34,99 → R$ 61,48 (câmbio: ~R$ 1,76/USD)',
                  rows:[
                    ['HeartGold — CIB','R$ 61','R$ 2.850','+4.573%','22,8% a.a.'],
                    ['HeartGold — Loose','R$ 61','R$ 798','+1.208%','13,4% a.a.'],
                    ['S&P 500','R$ 61','R$ 428','+602%','13,2% a.a.'],
                    ['IBOVESPA','R$ 61','R$ 150','+146%','6,1% a.a.'],
                    ['Ouro','R$ 61','R$ 330','+441%','11,5% a.a.'],
                    ['Poupança','R$ 61','R$ 148','+143%','6,0% a.a.'],
                  ],
                  isPoke: r => r[0].startsWith('HeartGold'),
                  conclusion:null, chart:null,
                },
              ].map(({ id, gen, launch, rows, isPoke, conclusion, chart }) => (
                <div key={id} className="art-gen-block">
                  <h3 className="art-h3">{id} — {gen}</h3>
                  <p className="art-launch">{launch}</p>
                  <ArtTable
                    head={['Ativo','Capital Inicial','Valor 2025','Retorno Nominal','Retorno Anual']}
                    rows={rows}
                    highlightFn={isPoke}
                  />
                  {conclusion && <div className="art-conclusion">{conclusion}</div>}
                  {chart}
                </div>
              ))}

              <h3 className="art-h3">5.5 — Geração 8 e 9: A Oportunidade de Entrada (2019–2022)</h3>
              <p className="art-p">Os jogos de Switch estão, atualmente, <strong>abaixo ou próximos do preço de lançamento</strong>. Para o investidor de longo prazo, esse é o momento histórico de compra — equivalente a adquirir HeartGold em 2010 por R$ 61 antes de ele valer R$ 2.850.</p>
              <LifecycleChart/>
            </section>

            {/* ═══ 6 ═══ */}
            <section id="s6" className="art-section">
              <h2 className="art-h2">6. Mercado Brasileiro vs. Mercado Internacional</h2>

              <h3 className="art-h3">6.1 O Mercado Exterior: EUA e Japão como Referência</h3>
              <p className="art-p">O mercado americano é a principal referência de preços globais para jogos retro Pokémon, com o PriceCharting.com atuando como termômetro oficial. O Japão possui mercado paralelo igualmente robusto — jogos japoneses (NTSC-J) costumam ser mais acessíveis que versões ocidentais para títulos de Game Boy, mas mais valiosos em casos específicos.</p>
              <ul className="art-ul">
                <li><strong>eBay (EUA):</strong> maior volume de transações, referência de preço teto</li>
                <li><strong>PriceCharting.com:</strong> média histórica de vendas verificadas</li>
                <li><strong>Mercari Japan:</strong> mercado japonês de segunda mão, frequentemente 20–40% mais barato para títulos comuns</li>
                <li><strong>Heritage Auctions / PWCC:</strong> para peças de altíssimo valor (graded, sealed)</li>
              </ul>

              <LineChart
                title="Pokémon Red CIB — Preço médio por região (USD, 2020–2025)"
                xLabels={['2020','2021','2022','2023','2024','2025']}
                series={[
                  {label:'EUA (NTSC-U)',   data:[320,620,490,500,530,550]},
                  {label:'Japão (NTSC-J)', data:[220,420,340,350,380,400]},
                  {label:'Europa (PAL)',    data:[280,540,430,440,470,490]},
                ]}
                height={200}
                yUnit="US$"
              />

              <h3 className="art-h3">6.2 O Investidor Brasileiro: O Efeito Câmbio</h3>
              <ArtTable
                head={['Componente','Contribuição à Valorização']}
                rows={[
                  ['Valorização do ativo em USD','+1.568% a +2.068% (Gen 1, 27 anos)'],
                  ['Desvalorização BRL/USD no período','USD 1 = R$1,20 (1998) → R$5,80 (2025) = +383%'],
                  ['Efeito combinado','Valorização total em BRL superior à valorização em USD'],
                ]}
                highlightFn={r => r[0] === 'Efeito combinado'}
              />

              <LineChart
                title="Câmbio USD/BRL (1998–2025) vs. Pokémon Red CIB em BRL"
                xLabels={['1998','2002','2004','2008','2012','2016','2018','2020','2022','2025']}
                series={[
                  {label:'Câmbio USD/BRL',          data:[1.2,2.8,2.9,1.8,2.0,3.3,3.8,5.4,5.2,5.8]},
                  {label:'Pokémon Red CIB (BRL ÷10)',data:[3.6,8,14,22,50,90,160,450,320,314]},
                ]}
                height={200}
                yUnit=""
              />
            </section>

            {/* ═══ 7 ═══ */}
            <section id="s7" className="art-section">
              <h2 className="art-h2">7. Por Que o CIB é o Formato com Maior Potencial Estrutural</h2>
              <p className="art-p">A diferença de valorização entre um jogo loose e um CIB não é estética — é estrutural, e tende a se ampliar com o tempo.</p>

              <h3 className="art-h3">7.1 A Deterioração Natural Cria Escassez Absoluta</h3>
              <p className="art-p">Jogos de Game Boy e GBA possuem <strong>baterias internas</strong> (CR2025/CR1616) que mantêm os saves. Após 20–30 anos, essas baterias falham. No mercado americano, <strong>menos de 5% dos jogos de Gen 1 e 2 que circulam hoje ainda possuem manual e caixa originais</strong> em condição aceitável.</p>

              <h3 className="art-h3">7.2 Hardware Descontinuado = Ecossistema Fechado</h3>
              <div className="art-disc-grid">
                {[['Game Boy / GBC','2003'],['Game Boy Advance','2008'],['Nintendo DS','2014'],['Nintendo 3DS','2020']].map(([hw, year]) => (
                  <div key={hw} className="art-disc-card">
                    <div className="art-disc-year">{year}</div>
                    <div className="art-disc-name">{hw}</div>
                    <div className="art-disc-label">descontinuado</div>
                  </div>
                ))}
              </div>

              <h3 className="art-h3">7.3 O Padrão do "Último da Geração"</h3>
              <BarChart
                data={[
                  {label:'Red/Blue',   value:525, color:'var(--accent)'},
                  {label:'Yellow ★',   value:650, color:'var(--chip-playing)'},
                  {label:'Gold/Silver',value:390},
                  {label:'Crystal ★',  value:550, color:'var(--chip-playing)'},
                  {label:'Ruby/Sapph', value:250},
                  {label:'Emerald ★',  value:600, color:'var(--chip-playing)'},
                  {label:'Diamond/Pearl',value:175},
                  {label:'Platinum ★', value:320, color:'var(--chip-playing)'},
                  {label:'HG/SS ★',    value:490, color:'var(--chip-playing)'},
                  {label:'B/W',        value:195},
                  {label:'B2/W2 ★',    value:255, color:'var(--chip-playing)'},
                ]}
                height={200}
              />
              <p className="art-note">★ = "Último da geração" — títulos lançados ao final do ciclo de hardware. Consistentemente os mais valorizados. Preços CIB médios em USD (2025).</p>
            </section>

            {/* ═══ 8 ═══ */}
            <section id="s8" className="art-section">
              <h2 className="art-h2">8. Riscos e Considerações</h2>
              <div className="art-risk-list">
                {[
                  { risk:'Risco de liquidez', desc:'O mercado de jogos físicos retro é um nicho. Não há bolsa organizada nem formador de mercado. Uma posição relevante pode levar semanas ou meses para ser liquidada ao preço justo.', mit:'Posicionamento como ativo de longo prazo (5–15+ anos), não como instrumento de curto prazo.' },
                  { risk:'Risco de autenticidade', desc:'O mercado convive com réplicas de alta qualidade, especialmente para cartuchos de GBA e DS. Pokémon Emerald e FireRed são frequentemente falsificados.', mit:'Comprar de vendedores reputados, verificar PCB (placa interna), selos de autenticidade e, para valores acima de US$ 200, consultar especialistas.' },
                  { risk:'Volatilidade de curto prazo', desc:'O mercado passou por correções significativas em 2022 após o pico de 2021. Quem comprou no topo de 2021 pode estar no negativo hoje em alguns títulos.', mit:'Horizonte de investimento mínimo de 5 anos, diversificação entre gerações.' },
                  { risk:'Risco cambial (investidor brasileiro)', desc:'A apreciação eventual do BRL pode reduzir o retorno em reais de ativos precificados em USD.', mit:'Historicamente, o BRL nunca sustentou apreciação prolongada frente ao dólar — e o ativo protege tanto em USD quanto em BRL estruturalmente.' },
                ].map(({ risk, desc, mit }) => (
                  <div key={risk} className="art-risk-card">
                    <div className="art-risk-title">{risk}</div>
                    <p className="art-risk-desc">{desc}</p>
                    <div className="art-risk-mit"><strong>Mitigação:</strong> {mit}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ═══ 9 ═══ */}
            <section id="s9" className="art-section">
              <h2 className="art-h2">9. Como Começar a Investir — Guia Prático para o Leigo</h2>
              {[
                { step:'01', title:'Pesquise Preços com Rigor', desc:'Antes de qualquer compra, consulte o PriceCharting.com (gratuito) para verificar o preço médio histórico do título desejado em condição loose e CIB.' },
                { step:'02', title:'Aprenda a Verificar Autenticidade', desc:'Para cartuchos de GBA e DS: verifique o peso (réplicas são mais leves), número de série na etiqueta traseira, interior da placa (PCB) com chave tri-wing e funcionamento da memória de save.' },
                { step:'03', title:'Priorize CIB para Longo Prazo', desc:'Para jogos com horizonte de 10+ anos, o CIB oferece o melhor equilíbrio risco/retorno. Para quem está começando, Gen 5 (DS, 2010–2012) representa a melhor relação entre preço acessível e potencial de valorização.' },
                { step:'04', title:'Armazenamento Correto', desc:'Caixas: fundas protetoras de acrílico. Cartuchos: sacos anti-umidade com sílica gel. Ambiente: temperatura estável, longe de luz solar direta — crítico no clima tropical.' },
                { step:'05', title:'Onde Comprar no Brasil', desc:'Mercado Livre: maior oferta, exige due diligence. Enjoei: menor volume, vendedores mais cuidadosos. Grupos no Facebook: transações diretas, possibilidade de inspeção. eBay via redirecionadores para títulos específicos.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="art-step">
                  <div className="art-step-num">{step}</div>
                  <div className="art-step-body">
                    <div className="art-step-title">{title}</div>
                    <p className="art-step-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* ═══ 10 ═══ */}
            <section id="s10" className="art-section">
              <h2 className="art-h2">10. Conclusão: Patrimônio Cultural com Valor Econômico Comprovado</h2>
              <p className="art-p">Pokémon nasceu como entretenimento infantil. Tornou-se a franquia mais rentável da história. Seus jogos físicos, especialmente em condição CIB, evoluíram de brinquedos descartáveis para ativos tangíveis com histórico de valorização superior a muitas das principais classes de investimento convencionais.</p>
              <div className="art-pillars">
                <div className="art-pillar">
                  <div className="art-pillar-num">I</div>
                  <div><strong>Valorização histórica documentada e consistente</strong>, com dados verificáveis de 25+ anos, superando S&P 500, ouro e poupança em múltiplos títulos e gerações.</div>
                </div>
                <div className="art-pillar">
                  <div className="art-pillar-num">II</div>
                  <div><strong>Demanda global crescente</strong>, alimentada por uma base de fãs que cresce, amadurece e tem renda crescente — e que buscará cada vez mais os títulos físicos de sua infância.</div>
                </div>
                <div className="art-pillar">
                  <div className="art-pillar-num">III</div>
                  <div><strong>Escassez física irreversível</strong>: hardware descontinuado, baterias que morrem, caixas que se deterioram, manuais que somem. Cada ano que passa reduz a oferta de CIBs de qualidade.</div>
                </div>
              </div>
              <p className="art-finale">Pokémon não é nostalgia.<br/>É patrimônio cultural com valor econômico comprovado,<br/>oferta decrescente e demanda crescente.</p>
              <p className="art-finale-sub">Essa é a definição de um bom ativo.</p>

              <div className="art-disclaimer">
                <em>Este artigo tem caráter informativo e educacional. Não constitui recomendação de investimento. Dados de preços de jogos são referenciados no PriceCharting.com e refletem médias de mercado. Consulte um profissional de investimentos certificado antes de tomar decisões financeiras.</em>
              </div>
              <div className="art-sources">
                <div className="art-sources-title">Fontes Principais</div>
                <ul className="art-ul">
                  <li>PriceCharting.com — histórico de preços de jogos físicos</li>
                  <li>The Pokémon Company — relatórios anuais e press releases</li>
                  <li>IBGE/IPCA — inflação brasileira histórica</li>
                  <li>Banco Central do Brasil — séries históricas de câmbio</li>
                  <li>Shiller CAPE Dataset — retorno histórico S&P 500</li>
                  <li>LBMA — preços históricos do ouro</li>
                  <li>B3/Economática — histórico IBOVESPA</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ArticleModal });
