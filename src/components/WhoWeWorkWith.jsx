import { whoWeWorkWith } from "../data/content";
import SectionHead from "./SectionHead";
import WaveDivider from "./WaveDivider";

export default function WhoWeWorkWith() {
  const [lead, ...rest] = whoWeWorkWith.items;
  return (
    <section id="who-we-work-with" className="section section--light" style={{ paddingBottom: 0 }}>
      <div className="container">
        <SectionHead index="04" kicker={whoWeWorkWith.kicker} title={whoWeWorkWith.heading} highlight="delivery">
          <p>{whoWeWorkWith.body}</p>
        </SectionHead>
        <article className="card card--row" style={{ marginBottom: "1.2rem" }}>
          <img src={lead.icon} alt="" className="card-icon" width={52} height={52} />
          <div>
            <h3>{lead.title}</h3>
            <p>{lead.body}</p>
          </div>
        </article>
        <div className="card-grid" style={{ paddingBottom: "clamp(3rem, 7vw, 5rem)" }}>
          {rest.map((item) => (
            <article className="card" key={item.title}>
              <img src={item.icon} alt="" className="card-icon" width={52} height={52} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <WaveDivider from="var(--sheet, #F3EFE4)" to="var(--forest-ink)" />
    </section>
  );
}
