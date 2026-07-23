import { whoWeAre } from "../data/content";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section section--light">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--pine">{whoWeAre.kicker}</p>
          <h2>{whoWeAre.heading}</h2>
          <p>{whoWeAre.body}</p>
        </div>

        <div
          style={{
            background: "var(--forest-ink)",
            color: "var(--parchment)",
            borderRadius: "20px",
            padding: "clamp(1.6rem, 4vw, 2.4rem)",
            marginBottom: "clamp(2.5rem, 5vw, 3.5rem)",
          }}
        >
          <h3 style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)", marginBottom: "0.7rem" }}>
            {whoWeAre.callout.heading}
          </h3>
          <p style={{ opacity: 0.85, maxWidth: "760px" }}>{whoWeAre.callout.body}</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {whoWeAre.pillars.map((p) => (
            <div className="card" key={p.title}>
              {p.icon ? (
                <img src={p.icon} alt="" width={48} height={48} style={{ marginBottom: "0.9rem" }} />
              ) : (
                <hr className="rule" />
              )}
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
