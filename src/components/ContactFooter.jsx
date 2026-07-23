import { contact } from "../data/content";

export default function ContactFooter() {
  return (
    <section id="contact" style={{ position: "relative", background: "var(--forest-ink)", overflow: "hidden" }}>
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
          opacity: 0.55,
          transform: "scaleY(-1)",
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          paddingTop: "clamp(4.5rem, 9vw, 6.5rem)",
          paddingBottom: "clamp(3rem, 6vw, 4rem)",
          color: "var(--parchment)",
        }}
      >
        <p className="eyebrow eyebrow--sage">GET IN TOUCH</p>
        <h2 style={{ fontSize: "clamp(1.9rem, 4.4vw, 3rem)", margin: "1rem 0 1.2rem", maxWidth: "700px" }}>
          {contact.heading}
        </h2>
        <hr className="rule" style={{ marginBottom: "1.4rem" }} />
        <p style={{ maxWidth: "560px", opacity: 0.85, marginBottom: "2.6rem" }}>{contact.body}</p>

        <div
          style={{
            background: "var(--parchment)",
            color: "var(--forest-ink)",
            borderRadius: "18px",
            padding: "clamp(1.6rem, 4vw, 2.2rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            maxWidth: "760px",
          }}
        >
          {contact.details.map((d) => (
            <div key={d.label}>
              <p className="eyebrow eyebrow--pine" style={{ marginBottom: "0.4rem" }}>
                {d.label}
              </p>
              <p style={{ fontWeight: 600 }}>{d.value}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "clamp(3.5rem, 7vw, 5rem)",
            paddingTop: "1.6rem",
            borderTop: "1px solid rgba(143,168,154,0.25)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            opacity: 0.7,
          }}
        >
          <span>CADIIS | Company Profile</span>
          <span>Climate | Actuarial | Data | Inclusion</span>
        </div>
      </div>
    </section>
  );
}
