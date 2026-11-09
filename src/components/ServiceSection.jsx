import { Link } from "react-router-dom";
import ObserveFlow from "./ObserveFlow";
import PayoutExplorer from "./PayoutExplorer";
import Photo from "./Photo";
import RiskLadder from "./RiskLadder";

function Check({ dark }) {
  return (
    <span className="check" data-dark={dark ? "true" : "false"} aria-hidden="true">
      ✓
    </span>
  );
}

function Icon({ src }) {
  if (!src) return <hr className="rule" />;
  return <img src={src} alt="" className="card-icon" width={52} height={52} />;
}

export default function ServiceSection({ data, hideTitle = false }) {
  const dark = data.theme === "dark";
  const [lead, ...rest] = data.grid || [];
  const showImage = Boolean(data.image) && !hideTitle;

  return (
    <section id={data.id} className={`section ${dark ? "section--dark" : "section--white"}`}>
      <div className="container">
        <div className={showImage ? "feature-split" : undefined}>
          <div>
            {hideTitle ? null : <p className={`eyebrow ${dark ? "eyebrow--brass" : "eyebrow--pine"}`}>{data.kicker}</p>}
            {hideTitle ? null : <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", margin: "0.8rem 0 1rem" }}>{data.heading}</h2>}
            <p style={{ maxWidth: "40rem" }}>{data.intro}</p>
          </div>
          {showImage ? (
            <Photo src={data.image} alt={data.imageAlt || data.imageLabel} caption={data.imageLabel} framed />
          ) : null}
        </div>

        {data.checklist ? (
          <ul className="card-grid card-grid--2" style={{ listStyle: "none", margin: "2rem 0 0", padding: 0 }}>
            {data.checklist.map((line) => (
              <li key={line} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Check dark={dark} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {data.steps ? <ObserveFlow steps={data.steps} /> : null}

        {data.focus ? (
          <div className="focus-mosaic">
            <article className="card feature">
              <Photo src={data.focus[0].image} alt={data.focus[0].alt || data.focus[0].title} />
              <div className="card__body">
                <h3>{data.focus[0].title}</h3>
                <p>{data.focus[0].body}</p>
              </div>
            </article>
            <div className="focus-stack">
              {data.focus.slice(1).map((item) => (
                <article className="card feature" key={item.title}>
                  <Photo src={item.image} alt={item.alt || item.title} />
                  <div className="card__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {data.layers ? <RiskLadder layers={data.layers} /> : null}

        {data.id === "product" ? <PayoutExplorer /> : null}

        {lead ? (
          <>
            <article className="card card--row" style={{ marginTop: "1.6rem" }}>
              <Icon src={lead.icon} />
              <div>
                <h3>{lead.title}</h3>
                <p>{lead.body}</p>
              </div>
            </article>
            {rest.length ? (
              <div className="card-grid" style={{ marginTop: "1.2rem" }}>
                {rest.map((item) => (
                  <article className="card" key={item.title}>
                    <Icon src={item.icon} />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </>
        ) : null}

        {data.outcome ? (
          <div className="reveal" style={{ marginTop: "2rem", borderLeft: "4px solid var(--brass)", padding: "0.2rem 0 0.2rem 1rem" }}>
            <h3>{data.outcome.heading}</h3>
            <p style={{ marginTop: "0.4rem", maxWidth: "46rem" }}>{data.outcome.body}</p>
          </div>
        ) : null}

        <p style={{ marginTop: "2rem" }}>
          <Link to={{ pathname: "/", hash: "#contact" }}>Discuss this work →</Link>
        </p>
      </div>
      <style>{`
        .check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.15rem;
          font-size: 0.7rem;
          background: var(--gold-foil);
          color: var(--forest-ink);
        }
      `}</style>
    </section>
  );
}
