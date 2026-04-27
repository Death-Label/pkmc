/* ================================================================
   ARTICLE MODAL — Trainer's Ledger
   "Pokémon como Ativo de Investimento de Longo Prazo"
================================================================ */

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
      contentRef.current.scrollTop = el.offsetTop - 28;
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
              <p className="art-p">Antes de falar de preços, é necessário entender o lastro do ativo.</p>
              <p className="art-p">A franquia Pokémon é, documentadamente, <strong>a maior franquia de entretenimento da história humana em receita acumulada.</strong> Com mais de <strong>US$ 150 bilhões em receita total</strong> desde 1996, ela supera Star Wars (US$ 70 bilhões), Marvel (US$ 65 bilhões), Harry Potter (US$ 43 bilhões) e Hello Kitty (US$ 88 bilhões). Essa cifra inclui jogos, cards, anime, merchandise e licenciamento.</p>

              <ChartPlaceholder description="Barras horizontais — receita acumulada das maiores franquias: Pokémon, Hello Kitty, Star Wars, Marvel, Harry Potter, Mickey Mouse — em USD bilhões"/>

              <p className="art-p">Alguns números estruturais que sustentam a tese:</p>
              <ul className="art-ul">
                <li><strong>440 milhões de jogos vendidos</strong> em todas as plataformas desde 1996 (fonte: The Pokémon Company)</li>
                <li><strong>43,2 bilhões de cards</strong> do TCG produzidos e distribuídos</li>
                <li><strong>1,3 bilhão de downloads</strong> do Pokémon GO desde o lançamento em 2016</li>
                <li>Presente em mais de <strong>100 países</strong> com localizações oficiais</li>
                <li>Geração média de <strong>US$ 5 a 8 bilhões por ano</strong> em receita combinada</li>
              </ul>

              <p className="art-p">Mas o que diferencia Pokémon de outras IPs para fins de investimento em ativos físicos é a combinação rara de três fatores:</p>

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
              <ChartPlaceholder description="Linha temporal — valorização de preço médio CIB dos jogos Gen 1–4 de 2010 a 2025, em USD"/>

              {[
                { gen:'Geração 1', platform:'Game Boy / Game Boy Color (1996–1998)',
                  rows:[['Red','US$ 29,99','US$ 50','US$ 550','+1.734%'],['Blue','US$ 29,99','US$ 50','US$ 500','+1.568%'],['Yellow','US$ 29,99','US$ 70','US$ 650','+2.068%']],
                  note:null, chart:'Linha de preço do Pokémon Yellow CIB de 2010 a 2025 — picos em 2021, consolidação e nova alta em 2024' },
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
                  rows:[['Sword','US$ 59,99','US$ 38','US$ 60','0% (deprec. recente)'],['Shield','US$ 59,99','US$ 36','US$ 58','−3%'],['Brilliant Diamond','US$ 59,99','US$ 35','US$ 55','−8%'],['Legends: Arceus','US$ 59,99','US$ 40','US$ 65','+8%']],
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
                    highlightFn={r => r[4] && r[4].includes('1.')}
                  />
                  {note && <p className="art-note">{note}</p>}
                  {chart && <ChartPlaceholder description={chart}/>}
                </div>
              ))}

              <ChartPlaceholder description="Mapa de calor — valorização CIB por título, todas as gerações; escala verde (maior) a amarelo (menor valorização)"/>
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
                  chart:'Linha temporal comparativa de R$36 investidos em 1998 — Pokémon Red CIB vs. S&P 500 vs. Ouro vs. IBOVESPA vs. Poupança',
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
                    ['Bitcoin (hipot. compra 2010)','R$ 92','R$ 45.000.000+','—','—'],
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
                    ['Bitcoin','R$ 61','R$ 180.000.000+','—','—'],
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
                  {chart && <ChartPlaceholder description={chart}/>}
                </div>
              ))}

              <h3 className="art-h3">5.5 — Geração 8 e 9: A Oportunidade de Entrada (2019–2022)</h3>
              <p className="art-p">Os jogos de Switch estão, atualmente, <strong>abaixo ou próximos do preço de lançamento</strong>. Para o investidor de longo prazo, esse é o momento histórico de compra — equivalente a adquirir HeartGold em 2010 por R$ 61 antes de ele valer R$ 2.850.</p>
              <ChartPlaceholder description="Curva de ciclo de vida de valorização — eixo X: anos após lançamento, eixo Y: preço CIB. Depreciação (anos 1–5) → estabilização (5–8) → início ascendente (8–12) → valorização acelerada (12+ anos)"/>
            </section>

            {/* ═══ 6 ═══ */}
            <section id="s6" className="art-section">
              <h2 className="art-h2">6. Mercado Brasileiro vs. Mercado Internacional</h2>

              <h3 className="art-h3">6.1 O Mercado Exterior: EUA e Japão como Referência</h3>
              <p className="art-p">O mercado americano é a principal referência de preços globais para jogos retro Pokémon, com o PriceCharting.com atuando como termômetro oficial. O Japão possui mercado paralelo igualmente robusto — jogos japoneses (NTSC-J) costumam ser mais acessíveis que versões ocidentais para títulos de Game Boy, mas mais valiosos em casos específicos (edições especiais, bundles).</p>
              <ul className="art-ul">
                <li><strong>eBay (EUA):</strong> maior volume de transações, referência de preço teto</li>
                <li><strong>PriceCharting.com:</strong> média histórica de vendas verificadas</li>
                <li><strong>Mercari Japan:</strong> mercado japonês de segunda mão, frequentemente 20–40% mais barato para títulos comuns</li>
                <li><strong>Heritage Auctions / PWCC:</strong> para peças de altíssimo valor (graded, sealed)</li>
              </ul>
              <ChartPlaceholder description="Comparativo de preço médio CIB de Pokémon Red — EUA vs. Japão vs. Europa (2020–2025)"/>

              <h3 className="art-h3">6.2 O Investidor Brasileiro: Oportunidades e Câmbio</h3>
              <p className="art-p"><strong>O efeito câmbio:</strong> A valorização dos jogos em USD, combinada com a desvalorização histórica do BRL frente ao dólar, resulta em um <strong>duplo driver de valorização</strong> para o investidor brasileiro:</p>
              <ArtTable
                head={['Componente','Contribuição à Valorização']}
                rows={[
                  ['Valorização do ativo em USD','+1.568% a +2.068% (Gen 1, 27 anos)'],
                  ['Desvalorização BRL/USD no período','USD 1 = R$1,20 (1998) → R$5,80 (2025) = +383%'],
                  ['Efeito combinado','Valorização total em BRL superior à valorização em USD'],
                ]}
                highlightFn={r => r[0] === 'Efeito combinado'}
              />
              <p className="art-p"><strong>Oportunidades de arbitragem:</strong></p>
              <ul className="art-ul">
                <li>Importar títulos japoneses baratos via Mercari Japan com frete consolidado</li>
                <li>Monitorar liquidações de coleções no Mercado Livre BR (mercado ainda subvalorizado vs. internacional)</li>
                <li>Revender em USD via eBay para capturar o spread cambial</li>
              </ul>
              <ChartPlaceholder description="Linha do câmbio USD/BRL de 1998 a 2025 sobreposta à linha de valorização de Pokémon Red CIB em BRL"/>

              <h3 className="art-h3">6.3 O Mercado Brasileiro de Colecionáveis Pokémon</h3>
              <p className="art-p">O mercado brasileiro de jogos físicos retro ainda está em desenvolvimento quando comparado ao americano. Isso representa uma janela de entrada: os preços no Mercado Livre e em grupos especializados brasileiros ainda apresentam <strong>desconto de 15% a 30%</strong> em relação às médias internacionais para muitos títulos — especialmente de DS e 3DS.</p>
              <ul className="art-ul">
                <li><strong>Mercado Livre:</strong> maior volume local, preços variáveis — exige due diligence</li>
                <li><strong>OLX / Facebook Marketplace:</strong> oportunidades de compra abaixo da média</li>
                <li><strong>Grupos no Facebook e Discord:</strong> comunidades de colecionadores com transações diretas</li>
                <li><strong>eBay (importação):</strong> referência internacional com frete razoável</li>
              </ul>
            </section>

            {/* ═══ 7 ═══ */}
            <section id="s7" className="art-section">
              <h2 className="art-h2">7. Por Que o CIB é o Formato com Maior Potencial Estrutural</h2>
              <p className="art-p">A diferença de valorização entre um jogo loose e um CIB não é estética — é estrutural, e tende a se ampliar com o tempo.</p>

              <h3 className="art-h3">7.1 A Deterioração Natural Cria Escassez Absoluta</h3>
              <p className="art-p">Jogos de Game Boy e GBA possuem <strong>baterias internas</strong> (CR2025/CR1616) que mantêm os saves. Após 20–30 anos, essas baterias falham. Substituí-las é tecnicamente possível, mas exige abertura do cartucho — o que destrói selos de autenticidade. O mercado já precifica essa fragilidade.</p>
              <p className="art-p">Caixas de papelão de 25–30 anos sofrem desbotamento, amassados e deterioração por umidade — especialmente relevante no clima brasileiro. No mercado americano, <strong>menos de 5% dos jogos de Gen 1 e 2 que circulam hoje ainda possuem manual e caixa originais</strong> em condição aceitável.</p>

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
              <p className="art-p">Nenhum novo cartucho legítimo será produzido para essas plataformas. A oferta de ativos físicos é <strong>permanentemente finita</strong> — qualquer novo colecionador que entre no mercado precisa competir pelos mesmos exemplares existentes.</p>

              <h3 className="art-h3">7.3 O Padrão Histórico do "Último da Geração"</h3>
              <p className="art-p">Os títulos lançados ao final de um ciclo de hardware consistentemente se tornam os mais valiosos: Crystal (final do GBC), Emerald (final do GBA), Platinum e HG/SS (final do DS). Isso acontece porque a produção foi menor, o ciclo de compras já estava em declínio e a preservação de caixas foi menor ainda.</p>
              <ChartPlaceholder description="Barras comparando preço CIB atual de todos os títulos por geração, destacando em vermelho os 'últimos da geração'"/>
            </section>

            {/* ═══ 8 ═══ */}
            <section id="s8" className="art-section">
              <h2 className="art-h2">8. Riscos e Considerações</h2>
              <p className="art-p">Qualquer tese de investimento honesta exige a apresentação de seus riscos. Aqui os principais — e por que, no longo prazo, não invalidam a tese.</p>
              <div className="art-risk-list">
                {[
                  { risk:'Risco de liquidez', desc:'O mercado de jogos físicos retro é um nicho. Não há bolsa organizada nem formador de mercado. Uma posição relevante pode levar semanas ou meses para ser liquidada ao preço justo.', mit:'Posicionamento como ativo de longo prazo (5–15+ anos), não como instrumento de curto prazo.' },
                  { risk:'Risco de autenticidade', desc:'O mercado convive com réplicas de alta qualidade, especialmente para cartuchos de GBA e DS. Pokémon Emerald e FireRed são frequentemente falsificados.', mit:'Comprar de vendedores reputados, verificar PCB (placa interna), selos de autenticidade e, para valores acima de US$ 200, consultar especialistas.' },
                  { risk:'Volatilidade de curto prazo', desc:'O mercado passou por correções significativas em 2022 após o pico de 2021 — durante a pandemia, os preços inflaram artificialmente. Quem comprou no topo de 2021 pode estar no negativo hoje em alguns títulos.', mit:'Horizonte de investimento mínimo de 5 anos, diversificação entre gerações.' },
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
                { step:'01', title:'Pesquise Preços com Rigor', desc:'Antes de qualquer compra, consulte o PriceCharting.com (gratuito) para verificar o preço médio histórico do título desejado em condição loose e CIB. A plataforma agrega vendas verificadas do eBay e oferece gráfico histórico de preço.' },
                { step:'02', title:'Aprenda a Verificar Autenticidade', desc:'Para cartuchos de GBA e DS: verifique o peso (réplicas são mais leves), número de série na etiqueta traseira, interior da placa (PCB) com chave tri-wing e funcionamento da memória de save. Para caixas e manuais: papel, impressão offset original, holograma (onde aplicável) e desgaste natural coerente com a idade.' },
                { step:'03', title:'Priorize CIB para Longo Prazo', desc:'Para jogos com horizonte de 10+ anos, o CIB oferece o melhor equilíbrio risco/retorno. Para quem está começando, Gen 5 (DS, 2010–2012) representa a melhor relação entre preço acessível, autenticidade verificável e potencial de valorização.' },
                { step:'04', title:'Armazenamento Correto', desc:'Caixas: fundas protetoras de acrílico específicas para GBC, GBA e DS (disponíveis no AliExpress e lojas especializadas). Cartuchos: sacos anti-umidade com sílica gel. Ambiente: temperatura estável, longe de luz solar direta — crítico no clima tropical.' },
                { step:'05', title:'Onde Comprar no Brasil', desc:'Mercado Livre: maior oferta, exige due diligence. Enjoei: menor volume, vendedores mais cuidadosos. Grupos no Facebook ("Colecionadores de Games Retro Brasil"): transações diretas, possibilidade de inspeção. eBay com importação via redirecionadores (Shipito) para títulos específicos.' },
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
              <p className="art-p">A tese repousa sobre três pilares que não são tendência — são estruturais:</p>
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
                  <div><strong>Escassez física irreversível</strong>: hardware descontinuado, baterias que morrem, caixas que se deterioram, manuais que somem. Cada ano que passa reduz a oferta de CIBs de qualidade. Essa equação só piora — para quem vende.</div>
                </div>
              </div>
              <p className="art-finale">Pokémon não é nostalgia.<br/>É patrimônio cultural com valor econômico comprovado,<br/>oferta decrescente e demanda crescente.</p>
              <p className="art-finale-sub">Essa é a definição de um bom ativo.</p>

              <div className="art-disclaimer">
                <em>Este artigo tem caráter informativo e educacional. Não constitui recomendação de investimento. Dados de preços de jogos são referenciados no PriceCharting.com e refletem médias de mercado — preços individuais variam conforme condição, região e momento de venda. Consulte um profissional de investimentos certificado antes de tomar decisões financeiras.</em>
              </div>
              <div className="art-sources">
                <div className="art-sources-title">Fontes Principais</div>
                <ul className="art-ul">
                  <li>PriceCharting.com — histórico de preços de jogos físicos</li>
                  <li>The Pokémon Company — relatórios anuais e press releases</li>
                  <li>IBGE/IPCA — inflação brasileira histórica</li>
                  <li>Banco Central do Brasil — séries históricas de câmbio</li>
                  <li>BLS/CPI — inflação americana histórica</li>
                  <li>Shiller CAPE Dataset — retorno histórico S&P 500</li>
                  <li>LBMA — preços históricos do ouro</li>
                  <li>B3/Economática — histórico IBOVESPA</li>
                  <li>VGChartz — dados de vendas de jogos</li>
                </ul>
              </div>
            </section>

          </div>{/* art-content */}
        </div>{/* art-body */}
      </div>{/* art-sheet */}
    </div>
  );
}

Object.assign(window, { ArticleModal });
