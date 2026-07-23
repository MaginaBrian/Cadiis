import { hero } from "../data/content";
import WaveDivider from "./WaveDivider";

const toneColor = {
  light: "var(--parchment)",
  sage: "var(--sage)",
  brass: "var(--brass)",
};

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", background: "var(--forest-ink)", overflow: "hidden" }}>
      <img
        src="/images/hero-topo.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9,
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          paddingTop: "clamp(6rem, 12vw, 9rem)",
          paddingBottom: "clamp(7rem, 14vw, 10rem)",
          color: "var(--parchment)",
        }}
      >
        <p className="eyebrow eyebrow--sage">{hero.eyebrow}</p>
        <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", marginTop: "1.1rem" }}>
          {hero.lines.map((line, i) => (
            <span key={i} style={{ display: "block", color: toneColor[line.tone] }}>
              {line.text}
            </span>
          ))}
        </h1>
        <hr className="rule" style={{ margin: "1.8rem 0" }} />
        <p style={{ fontSize: "1.15rem", maxWidth: "560px", opacity: 0.9 }}>{hero.body}</p>

        <div style={{ display: "flex", gap: "1rem", marginTop: "2.3rem", flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn--brass">Start a conversation</a>
          <a href="#what-we-do" className="btn btn--outline">Explore our services</a>
        </div>

        <div
          style={{
            marginTop: "clamp(3.5rem, 8vw, 5.5rem)",
            paddingTop: "1.6rem",
            borderTop: "1px solid rgba(143,168,154,0.3)",
          }}
        >
          <p className="eyebrow eyebrow--brass" style={{ marginBottom: "0.9rem" }}>{hero.tag}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 0.9rem", fontSize: "0.92rem", opacity: 0.85 }}>
            {hero.subtags.map((t, i) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                {t}
                {i < hero.subtags.length - 1 && <span style={{ opacity: 0.5 }}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider from="transparent" to="var(--parchment)" />
    </section>
  );
}
