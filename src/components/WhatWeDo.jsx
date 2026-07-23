import { whatWeDo } from "../data/content";
import WaveDivider from "./WaveDivider";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section section--dark" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--brass">{whatWeDo.kicker}</p>
          <h2>{whatWeDo.heading}</h2>
          <p style={{ opacity: 0.8 }}>{whatWeDo.body}</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.3rem",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          {whatWeDo.items.map((item, i) => (
            <a
              href={`#${["actuarial", "gis", "derisking", "inclusive", "product"].includes(item.id) ? item.id : "services"}`}
              key={item.id}
              className="card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <span className="eyebrow eyebrow--brass">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </a>
          ))}
        </div>
      </div>
      <WaveDivider from="var(--forest-ink)" to="var(--parchment)" />
    </section>
  );
}
