import { workstreams } from "../data/content";
import Photo from "./Photo";
import SectionHead from "./SectionHead";

export default function Workstreams() {
  const [lead, ...rest] = workstreams.items;
  return (
    <section id="services" className="section section--dark">
      <div className="container">
        <SectionHead index="03" kicker={workstreams.kicker} eyebrow="eyebrow--brass" title={workstreams.heading} highlight="value">
          <p>{workstreams.body}</p>
        </SectionHead>
        <div className="feature-split">
          <article className="card">
            <span className="badge">Representative</span>
            <img src={lead.icon} alt="" className="card-icon" width={52} height={52} style={{ marginTop: "1rem" }} />
            <h3>{lead.title}</h3>
            <p>{lead.body}</p>
          </article>
          <Photo
            src="/images/scenes/agriculture-scene.webp"
            alt="Wheat field in warm evening light"
            caption="Field light · agriculture"
            framed
          />
        </div>
        <div className="card-grid" style={{ marginTop: "1.3rem" }}>
          {rest.map((item) => (
            <article className="card" key={item.title}>
              <img src={item.icon} alt="" className="card-icon" width={52} height={52} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
