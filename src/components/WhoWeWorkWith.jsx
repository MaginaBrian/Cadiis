import { whoWeWorkWith } from "../data/content";
import WaveDivider from "./WaveDivider";

export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="section section--dark" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--brass">{whoWeWorkWith.kicker}</p>
          <h2>{whoWeWorkWith.heading}</h2>
          <p style={{ opacity: 0.82 }}>{whoWeWorkWith.body}</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.3rem",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          {whoWeWorkWith.items.map((w) => (
            <div className="card" key={w.title}>
              {w.icon ? (
                <img src={w.icon} alt="" width={48} height={48} style={{ marginBottom: "0.9rem" }} />
              ) : (
                <hr className="rule" />
              )}
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider from="var(--forest-ink)" to="var(--parchment)" />
    </section>
  );
}
