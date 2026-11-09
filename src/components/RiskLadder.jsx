import { useEffect, useRef, useState } from "react";

export default function RiskLadder({ layers }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travelled = window.innerHeight * 0.75 - rect.top;
      setProgress(Math.min(1, Math.max(0, travelled / (rect.height * 0.9))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ol className="ladder" ref={ref} style={{ "--fill": progress }}>
      <span className="ladder__rail" aria-hidden="true">
        <span className="ladder__fill" />
      </span>
      {layers.map((layer, i) => (
        <li key={layer.n} className={progress >= (i + 0.15) / layers.length ? "is-on" : undefined}>
          <span className="ladder__n">{layer.n}</span>
          <div>
            <h3>{layer.title}</h3>
            <p>{layer.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
