import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { whatWeDo } from "../data/content";
import SectionHead from "./SectionHead";
import WaveDivider from "./WaveDivider";

export default function WhatWeDo() {
  const [active, setActive] = useState(whatWeDo.items[0].id);
  const tabs = useRef([]);
  const location = useLocation();
  const current = whatWeDo.items.find((item) => item.id === active) || whatWeDo.items[0];
  const index = whatWeDo.items.findIndex((item) => item.id === current.id);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (whatWeDo.items.some((item) => item.id === id)) setActive(id);
  }, [location.hash]);

  function move(direction) {
    const next = (index + direction + whatWeDo.items.length) % whatWeDo.items.length;
    setActive(whatWeDo.items[next].id);
    tabs.current[next]?.focus();
  }

  return (
    <section id="what-we-do" className="section section--white" style={{ paddingBottom: 0 }}>
      <div className="container" style={{ paddingBottom: "clamp(3rem, 7vw, 5rem)" }}>
        <SectionHead index="02" kicker={whatWeDo.kicker} title={whatWeDo.heading} highlight="scale">
          <p>{whatWeDo.body}</p>
        </SectionHead>

        <div className="tabs">
          <div className="tabs__list" role="tablist" aria-label="Service lines" onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
          }}>
            {whatWeDo.items.map((item, i) => {
              const selected = item.id === current.id;
              return (
                <button
                  key={item.id}
                  ref={(node) => { tabs.current[i] = node; }}
                  className="tabs__btn"
                  id={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(item.id)}
                >
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className="card tabs__panel" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={current.id}>
            <p className="section-no">{String(index + 1).padStart(2, "0")}</p>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
            <Link className="card-arrow" to={`/services/${current.id}`}>
              Open this service →
            </Link>
          </div>
        </div>
      </div>
      <WaveDivider from="var(--sheet-2, #FBF8EF)" to="var(--forest-ink)" />
    </section>
  );
}
