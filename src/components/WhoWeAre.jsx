import { whoWeAre } from "../data/content";
import SectionHead from "./SectionHead";

export default function WhoWeAre() {
  const [lead, ...rest] = whoWeAre.pillars;
  return (
    <section id="who-we-are" className="section section--light">
      <div className="container">
        <SectionHead index="01" kicker={whoWeAre.kicker} title={whoWeAre.heading} highlight="resilience">
          <p>{whoWeAre.body}</p>
        </SectionHead>

        <blockquote className="pullquote">
          <span className="pullquote__mark" aria-hidden="true">
            “
          </span>
          <p>{whoWeAre.callout.heading}</p>
          <footer>{whoWeAre.callout.body}</footer>
        </blockquote>

        <article className="card card--row pillar-feature">
          <img src={lead.icon} alt="" className="card-icon" width={52} height={52} />
          <div>
            <h3>{lead.title}</h3>
            <p>{lead.body}</p>
          </div>
        </article>
        <div className="card-grid">
          {rest.map((pillar) => (
            <article className="card" key={pillar.title}>
              <img src={pillar.icon} alt="" className="card-icon" width={52} height={52} />
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
