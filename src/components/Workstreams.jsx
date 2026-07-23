import { workstreams } from "../data/content";

export default function Workstreams() {
  return (
    <section id="services" className="section section--light">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--pine">{workstreams.kicker}</p>
          <h2>{workstreams.heading}</h2>
          <p>{workstreams.body}</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {workstreams.items.map((w) => (
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
    </section>
  );
}
