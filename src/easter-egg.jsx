/* ================================================================
   EASTER EGG — Trainer's Ledger
   Trigger: 7 cliques na Pokéball do header
================================================================ */

const EASTER_TEXT = [
  "À Iraci, minha mãe. Obrigado por dedicar tanta experiência para cuidar de um filho que ainda tem muito a evoluir. Nenhuma Liga Pokémon seria capaz de medir o seu valor como treinadora.",
  "",
  "À Valquíria, minha âncora, que consegue a proeza de balancear minhas irresponsabilidades com a medida exata de razão e emoção. Obrigado por ser meu porto seguro em qualquer Rota dessa jornada.",
  "",
  "Ao Gustavo, Meu amigo e mestre Pokémon da vida real, por tankar com fraternidade meus infinitos protestos contra a franquia e a empresa. Obrigado por nunca dar release nesse amigo rabugento.",
  "",
  "Obrigado por serem itens raros dessa coleção chamada vida.",
];

const FULL_TEXT = EASTER_TEXT.join('\n');

function EasterEgg({ onClose }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'typing' | 'done'
  const [dots, setDots] = useState(1);
  const [typed, setTyped] = useState('');
  const [showArrow, setShowArrow] = useState(false);
  const audioRef = useRef(null);
  const typingRef = useRef(null);
  const charRef = useRef(0);

  // Start audio
  useEffect(() => {
    const audio = new Audio('mef.mp3');
    audio.loop = true;
    audio.volume = 0.49;
    audio.play().catch(() => {});
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Loading dots animation
  useEffect(() => {
    if (phase !== 'loading') return;
    const iv = setInterval(() => setDots(d => d < 3 ? d + 1 : 1), 500);
    const timeout = setTimeout(() => {
      clearInterval(iv);
      setPhase('typing');
    }, 2200);
    return () => { clearInterval(iv); clearTimeout(timeout); };
  }, [phase]);

  // Typing animation
  useEffect(() => {
    if (phase !== 'typing') return;
    charRef.current = 0;
    setTyped('');
    const tick = () => {
      charRef.current++;
      setTyped(FULL_TEXT.slice(0, charRef.current));
      if (charRef.current < FULL_TEXT.length) {
        // Slower on spaces/newlines for rhythm
        const ch = FULL_TEXT[charRef.current - 1];
        const delay = ch === '\n' ? 138 : ch === ' ' ? 46 : ch === '.' ? 92 : 32;
        typingRef.current = setTimeout(tick, delay);
      } else {
        setPhase('done');
        setShowArrow(true);
      }
    };
    typingRef.current = setTimeout(tick, 200);
    return () => clearTimeout(typingRef.current);
  }, [phase]);


  const close = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    clearTimeout(typingRef.current);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  // Render text with newlines
  const renderText = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br/>}
      </span>
    ));
  };

  return (
    <div className="ee-overlay" onClick={close}>
      <div className="ee-gameboy" onClick={e => e.stopPropagation()}>

        {/* ── TOP: tela ── */}
        <div className="ee-gb-top">
          <div className="ee-gb-brand">
            <span className="ee-gb-nintendo">Nintendo</span>
            <span className="ee-gb-title">GAME BOY<span className="ee-gb-tm">™</span></span>
          </div>
          <div className="ee-gb-screen-bezel">
            <div className="ee-gb-power-row">
              <span className="ee-gb-battery-label">BATTERY</span>
              <span className="ee-gb-power-led"/>
            </div>
            <div className="ee-gb-screen-border">
              <div className="ee-gb-screen-inner">
                <div className="ee-screen">
                  <button className="ee-close-btn" onClick={close} aria-label="Fechar">×</button>
                  {phase === 'loading' && (
                    <div className="ee-loading">
                      <span className="ee-loading-text">Loading Save File{'.'  .repeat(dots)}</span>
                    </div>
                  )}
                  {(phase === 'typing' || phase === 'done') && (
                    <div className="ee-text-area">
                      <div className="ee-text-content">
                        {renderText(typed)}
                        {phase === 'typing' && <span className="ee-cursor">█</span>}
                      </div>
                      {phase === 'done' && showArrow && (
                        <div className="ee-arrow">▼</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MIDDLE: volume + linha decorativa ── */}
        <div className="ee-gb-mid">
          <div className="ee-gb-line-deco"/>
          <div className="ee-gb-volume">
            <div className="ee-gb-vol-label">VOL.</div>
            <div className="ee-gb-vol-knob"/>
          </div>
        </div>

        {/* ── BOTTOM: controles ── */}
        <div className="ee-gb-controls">
          {/* D-Pad */}
          <div className="ee-gb-dpad-wrap">
            <div className="ee-gb-dpad">
              <div className="ee-dpad-h"/>
              <div className="ee-dpad-v"/>
              <div className="ee-dpad-center"/>
            </div>
          </div>

          {/* Start / Select */}
          <div className="ee-gb-mid-btns">
            <div className="ee-gb-pill-btn">
              <div className="ee-gb-pill"/>
              <span>SELECT</span>
            </div>
            <div className="ee-gb-pill-btn">
              <div className="ee-gb-pill"/>
              <span>START</span>
            </div>
          </div>

          {/* A / B */}
          <div className="ee-gb-ab-wrap">
            <div className="ee-gb-btn-a">A</div>
            <div className="ee-gb-btn-b">B</div>
          </div>
        </div>

        {/* ── SPEAKER ── */}
        <div className="ee-gb-speaker">
          {[...Array(6)].map((_, i) => <div key={i} className="ee-gb-speaker-line"/>)}
        </div>

        {/* ── BOTTOM CURVE ── */}
        <div className="ee-gb-foot"/>

      </div>
    </div>
  );
}

/* Hook: 7 clicks on the orb */
function useEasterEgg(orbRef) {
  const [active, setActive] = useState(false);
  const countRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = orbRef.current;
    if (!el) return;
    const onClick = () => {
      countRef.current++;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => { countRef.current = 0; }, 3000);
      if (countRef.current >= 7) {
        countRef.current = 0;
        clearTimeout(timerRef.current);
        setActive(true);
      }
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [orbRef]);

  return [active, () => setActive(false)];
}

Object.assign(window, { EasterEgg, useEasterEgg });
