import { founder } from "../data/content";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
}

export default function Founder() {
  return (
    <section id="founder" className="section section--light">
      <div className="container">
        <div className="section-head">
          <p className="section-no">06 <span>/ 06</span></p>
          <p className="eyebrow eyebrow--pine">{founder.kicker}</p>
          <h2>{founder.heading}</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1.6rem",
            alignItems: "flex-start",
            marginBottom: "clamp(2.5rem, 5vw, 3.5rem)",
          }}
          className="founder-grid"
        >
          <div
            style={{
              width: "108px",
              height: "108px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--forest-ink), var(--pine))",
              color: "var(--gold-light)",
              boxShadow: "0 0 0 4px var(--parchment), 0 0 0 6px var(--brass), 0 20px 36px -16px rgba(16,42,42,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "2.1rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {initials(founder.name)}
          </div>
          <div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.2rem" }}>{founder.name}</h3>
            <p className="eyebrow eyebrow--brass" style={{ marginBottom: "0.9rem" }}>
              {founder.role}
            </p>
            <p style={{ opacity: 0.85, maxWidth: "680px" }}>{founder.bio}</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.4rem",
          }}
        >
          <div
            className="reveal"
            style={{
              background: "var(--ivory)",
              border: "1px solid rgba(176,141,60,0.35)",
              borderRadius: "18px",
              padding: "1.8rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.9rem" }}>Who we work with</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.5rem" }}>
              {founder.workWith.map((w) => (
                <li key={w} style={{ opacity: 0.85, fontSize: "0.96rem" }}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="reveal"
            style={{
              background: "var(--ivory)",
              border: "1px solid rgba(176,141,60,0.35)",
              borderRadius: "18px",
              padding: "1.8rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.9rem" }}>How we engage</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.5rem" }}>
              {founder.engage.map((w) => (
                <li key={w} style={{ opacity: 0.85, fontSize: "0.96rem" }}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
