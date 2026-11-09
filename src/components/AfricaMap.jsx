const AFRICA =
  "M82 26 L104 14 L128 16 L148 30 L160 48 L166 70 L158 88 L170 102 L190 116 L174 130 L160 124 L154 142 L160 164 L150 186 L136 206 L120 224 L106 214 L94 224 L80 206 L70 184 L60 164 L52 148 L44 132 L50 118 L40 104 L36 84 L44 64 L58 44 L72 32 Z";

export default function AfricaMap() {
  return (
    <svg className="africa" viewBox="0 0 220 250" role="img" aria-label="Dotted map of Africa with Nairobi marked">
      <defs>
        <pattern id="africa-dots" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.15" fill="var(--pine)" />
        </pattern>
        <mask id="africa-shape">
          <path fill="white" d={AFRICA} />
          <ellipse cx="178" cy="178" rx="6" ry="16" fill="white" />
        </mask>
      </defs>
      <rect width="220" height="250" fill="url(#africa-dots)" mask="url(#africa-shape)" />
      <circle cx="150" cy="128" r="3.4" fill="#b08d3c" />
      <circle cx="150" cy="128" r="7" fill="none" stroke="#b08d3c" strokeWidth="1" />
      <text className="africa__label" x="78" y="124">
        Nairobi
      </text>
    </svg>
  );
}
