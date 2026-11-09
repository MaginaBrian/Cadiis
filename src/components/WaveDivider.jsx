export default function WaveDivider({ from = "#102A2A", to = "#F3EFE4", flip = false }) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <rect width="1200" height="90" fill={from} />
      <path d="M0,58 C 200,10 420,85 700,45 C 900,15 1050,50 1200,20 L1200,90 L0,90 Z" fill={to} />
      <path
        d="M0,58 C 200,10 420,85 700,45 C 900,15 1050,50 1200,20"
        fill="none"
        stroke="#B08D3C"
        strokeWidth="1.6"
        opacity="0.85"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
