import { Link } from "react-router-dom";
import { perspectives } from "../data/content";
import SectionHead from "./SectionHead";
import WaveDivider from "./WaveDivider";

export default function Perspectives() {
  return (
    <section id="perspectives" className="section section--dark" style={{ paddingBottom: 0 }}>
      <div className="container">
        <SectionHead index="05" kicker={perspectives.kicker} eyebrow="eyebrow--brass" title={perspectives.heading} highlight="protection">
          <p>{perspectives.body}</p>
        </SectionHead>
        <div className="perspectives">
          {perspectives.items.map((item, i) => (
            <Link className={`card ${i === 1 ? "card--feature" : ""}`} key={item.href} to={item.href}>
              <span className="badge">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="card-arrow">Read the approach →</span>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ height: "clamp(3rem, 7vw, 5rem)" }} />
      <WaveDivider from="var(--forest-ink)" to="var(--sheet, #F3EFE4)" />
    </section>
  );
}
