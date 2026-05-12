/* ================================================================
   GHOST OVERLAY — Trainer's Ledger
   Aparece quando o tema 'spectral' (Ghost) está ativo.
   Rostos de fantasma surgem e desaparecem em pontos aleatórios.
================================================================ */

function GhostOverlay({ active }) {
  const [faces, setFaces] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!active) { setFaces([]); return; }

    let timer;
    const spawn = () => {
      idRef.current++;
      const id = idRef.current;
      // Random position avoiding center cluster
      const side = Math.random();
      let x, y;
      if (side < 0.25)      { x = Math.random() * 22;          y = Math.random() * 90 + 5; }
      else if (side < 0.5)  { x = Math.random() * 22 + 78;     y = Math.random() * 90 + 5; }
      else if (side < 0.75) { x = Math.random() * 90 + 5;      y = Math.random() * 18; }
      else                  { x = Math.random() * 90 + 5;      y = Math.random() * 18 + 82; }

      const rotation = (Math.random() - 0.5) * 80; // -40 to 40 deg
      const size = 108 + Math.random() * 216;       // +20% maior (108 a 324 px)
      const flipX = Math.random() > 0.5 ? -1 : 1;
      const duration = 4500 + Math.random() * 3500; // 4.5s to 8s
      const peakOpacity = 0.14 + Math.random() * 0.18; // 0.14 to 0.32

      const face = { id, x, y, rotation, size, flipX, duration, peakOpacity };
      setFaces(f => [...f, face]);
      setTimeout(() => {
        setFaces(f => f.filter(x => x.id !== id));
      }, duration);

      // Next spawn interval (more frequent for Ghost theme atmosphere)
      const nextDelay = 1100 + Math.random() * 1800; // 1.1s to 2.9s
      timer = setTimeout(spawn, nextDelay);
    };
    timer = setTimeout(spawn, 600);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active) return null;

  return (
    <div className="ghost-overlay" aria-hidden="true">
      {faces.map(f => (
        <div
          key={f.id}
          className="ghost-face"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: `${f.size}px`,
            height: `${f.size * 408 / 612}px`,
            transform: `translate(-50%, -50%) rotate(${f.rotation}deg) scaleX(${f.flipX})`,
            animationDuration: `${f.duration}ms`,
            '--peak-opacity': f.peakOpacity,
          }}
        />
      ))}
    </div>
  );
}

Object.assign(window, { GhostOverlay });
