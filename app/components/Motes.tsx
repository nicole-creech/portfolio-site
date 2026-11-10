// Faint specks drifting upward behind the page. Positions are deterministic so
// server and client render the same markup.
const MOTES = Array.from({ length: 60 }, (_, i) => {
  const duration = 9 + (i % 7) * 2;
  return {
    left: `${(i * 37) % 100}%`,
    top: `${2 + ((i * 53) % 96)}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${-((i * 1.7) % duration)}s`,
    dx: `${((i % 5) - 2) * 18}px`,
  };
});

export default function Motes() {
  return (
    <div className="motes" aria-hidden="true">
      {MOTES.map(({ dx, ...style }, i) => (
        <span key={i} className="mote" style={{ ...style, ["--dx" as string]: dx }} />
      ))}
    </div>
  );
}
