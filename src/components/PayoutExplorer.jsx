import { useId, useMemo, useState } from "react";

const TRIGGER = 70;
const EXIT = 30;
const MAX = 100;

function payoutFor(rain) {
  if (rain >= TRIGGER) return 0;
  if (rain <= EXIT) return MAX;
  return Math.round((MAX * (TRIGGER - rain)) / (TRIGGER - EXIT));
}

export default function PayoutExplorer() {
  const [rain, setRain] = useState(42);
  const labelId = useId();
  const payout = payoutFor(rain);
  const curve = useMemo(() => {
    const pts = [];
    for (let x = 0; x <= 100; x += 2) pts.push(`${x},${52 - payoutFor(x) * 0.46}`);
    return pts.join(" ");
  }, []);
  const y = 52 - payout * 0.46;

  return (
    <div className="panel explorer" style={{ marginTop: "1.6rem" }}>
      <div className="explorer__top">
        <div>
          <span className="badge">Illustrative</span>
          <h3 style={{ marginTop: "0.8rem" }}>Trigger and payout explorer</h3>
          <p>Drag a rainfall index and watch a sample payout curve respond. The shape is a teaching sketch, not a live product.</p>
        </div>
        <p className="explorer__readout" aria-live="polite">
          {payout}
          <span>illustrative payout units</span>
        </p>
      </div>
      <svg viewBox="0 0 100 58" role="img" aria-label="Illustrative payout curve against a rainfall index">
        <line x1="30" y1="4" x2="30" y2="52" stroke="#8c6d26" strokeDasharray="1.5 1.5" strokeWidth="0.4" />
        <line x1="70" y1="4" x2="70" y2="52" stroke="#8c6d26" strokeDasharray="1.5 1.5" strokeWidth="0.4" />
        <polyline className="explorer__curve" points={curve} fill="none" strokeWidth="1.4" />
        <line x1={rain} y1="4" x2={rain} y2="52" stroke="#b08d3c" strokeWidth="0.6" />
        <circle cx={rain} cy={y} r="2.1" fill="#b08d3c" />
      </svg>
      <div className="explorer__scale">
        <span>Exit {EXIT}</span>
        <span>Rainfall index</span>
        <span>Trigger {TRIGGER}</span>
      </div>
      <label id={labelId} htmlFor="rainfall-index">
        Rainfall index, {rain}
        <input
          id="rainfall-index"
          type="range"
          min="0"
          max="100"
          value={rain}
          onChange={(e) => setRain(Number(e.target.value))}
        />
      </label>
      <p className="fine">
        Below the exit the sketch pays the full illustrative amount. Between the exit and the trigger it declines. At or above the trigger it pays nothing.
      </p>
    </div>
  );
}
