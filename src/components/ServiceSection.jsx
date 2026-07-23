const isDark = (theme) => theme === "dark";

function Check({ dark }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: dark ? "var(--brass)" : "var(--pine)",
        color: dark ? "var(--forest-ink)" : "var(--parchment)",
        fontSize: "0.7rem",
        flexShrink: 0,
        marginTop: "0.15rem",
      }}
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

export default function ServiceSection({ data }) {
  const dark = isDark(data.theme);
  return (
    <section
      id={data.id}
      className={`section ${dark ? "section--dark" : "section--white"}`}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: data.image ? "1.1fr 0.9fr" : "1fr",
            gap: "clamp(2rem, 5vw, 3.5rem)",
            alignItems: "start",
          }}
          className="service-grid"
        >
          <div>
            <p className={`eyebrow ${dark ? "eyebrow--brass" : "eyebrow--pine"}`}>{data.kicker}</p>
            <h2 style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)", margin: "0.9rem 0 1.1rem" }}>
              {data.heading}
            </h2>
            <p style={{ opacity: 0.85, maxWidth: "560px", fontSize: "1.02rem" }}>{data.intro}</p>
          </div>
          {data.image && (
            <img
              src={data.image}
              alt={data.imageLabel}
              style={{ borderRadius: "16px", overflow: "hidden", width: "100%" }}
            />
          )}
        </div>

        {data.checklist && (
          <ul
            style={{
              listStyle: "none",
              margin: "clamp(2.2rem, 5vw, 3rem) 0 0",
              padding: 0,
              display: "grid",
              gap: "1.1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {data.checklist.map((line) => (
              <li key={line} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Check dark={dark} />
                <span style={{ opacity: 0.88, fontSize: "0.97rem" }}>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {data.steps && (
          <div
            style={{
              marginTop: "clamp(2.2rem, 5vw, 3rem)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {data.steps.map((s) => (
              <div className="card" key={s.n}>
                <span
                  className="eyebrow"
                  style={{ color: "var(--brass)", fontSize: "1.4rem", fontFamily: "var(--font-display)" }}
                >
                  {s.n}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        )}

        {data.focus && (
          <div
            style={{
              marginTop: "1.2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {data.focus.map((f) => (
              <div
                className="card"
                key={f.title}
                style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {f.image && (
                  <img
                    src={f.image}
                    alt={f.title}
                    style={{ width: "100%", height: "150px", objectFit: "cover", display: "block" }}
                  />
                )}
                <div style={{ padding: "1.5rem 1.6rem 1.8rem" }}>
                  {!f.image && <hr className="rule" />}
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {data.layers && (
          <div
            style={{
              marginTop: "clamp(2.2rem, 5vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
            }}
          >
            {data.layers.map((l) => (
              <div key={l.n} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "46px",
                    height: "46px",
                    borderRadius: "10px",
                    background: dark ? "rgba(176,141,60,0.15)" : "rgba(31,75,67,0.08)",
                    color: dark ? "var(--brass)" : "var(--pine)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {l.n}
                </span>
                <div>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>{l.title}</h3>
                  <p style={{ opacity: 0.82, fontSize: "0.96rem" }}>{l.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {data.grid && (
          <div
            className="two-col-grid"
            style={{
              marginTop: "clamp(2.2rem, 5vw, 3rem)",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "1.2rem",
            }}
          >
            {data.grid.map((g) => (
              <div className="card" key={g.title}>
                {g.icon ? (
                  <img src={g.icon} alt="" width={48} height={48} style={{ marginBottom: "0.9rem" }} />
                ) : (
                  <hr className="rule" />
                )}
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </div>
            ))}
          </div>
        )}

        {data.outcome && (
          <div
            style={{
              marginTop: "clamp(2.5rem, 5vw, 3.5rem)",
              background: dark ? "rgba(176,141,60,0.1)" : "var(--parchment)",
              border: dark ? "1px solid rgba(176,141,60,0.3)" : "1px solid rgba(16,42,42,0.1)",
              borderRadius: "18px",
              padding: "clamp(1.5rem, 4vw, 2.2rem)",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{data.outcome.heading}</h3>
            <p style={{ opacity: 0.85, maxWidth: "760px" }}>{data.outcome.body}</p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 800px) {
          .service-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .two-col-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
