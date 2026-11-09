import { hero } from "../data/content";
import WaveDivider from "./WaveDivider";
import "./Hero.css";

const toneClass = { light: "hero__line--light", sage: "hero__line--sage", brass: "hero__line--brass" };

// deterministic floating gold dust
const dust = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 78}%`,
  size: 3 + (i % 3) * 2,
  delay: `${(i % 7) * 0.9}s`,
  dur: `${7 + (i % 5) * 1.6}s`,
}));

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img className="hero__topo" src="/images/hero-topo.webp" alt="" />
        <div className="hero__glow" />
        <svg className="hero__arcs" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
          <path pathLength="1" d="M470,900 C560,580 650,340 930,20" />
          <path pathLength="1" d="M600,900 C690,620 770,390 1040,80" />
          <circle cx="930" cy="20" r="6" />
          <circle cx="1040" cy="80" r="6" />
        </svg>
        {dust.map((d, i) => (
          <span key={i} className="hero__dust" style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay, animationDuration: d.dur }} />
        ))}
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__badges hero__rise" style={{ "--d": "0ms" }}><span className="badge">{hero.tag}</span></p>
          <p className="eyebrow eyebrow--sage hero__rise" style={{ "--d": "80ms" }}>{hero.eyebrow}</p>
          <h1>
            {hero.lines.map((line, i) => (
              <span key={i} className={`hero__line ${toneClass[line.tone]} hero__rise`} style={{ "--d": `${140 + i * 160}ms` }}>
                {line.tone === "brass" ? <span className="foil-text">{line.text}</span> : line.text}
              </span>
            ))}
          </h1>
          <hr className="rule hero__rise" style={{ "--d": "640ms", margin: "1.8rem 0" }} />
          <p className="hero__body hero__rise" style={{ "--d": "760ms" }}>{hero.body}</p>
          <div className="hero__actions hero__rise" style={{ "--d": "900ms" }}>
            <a href="#contact" className="btn btn--brass">Start a conversation →</a>
            <a href="#what-we-do" className="btn btn--outline">Explore our services</a>
          </div>
        </div>

        <div className="hero__collage hero__rise" style={{ "--d": "500ms" }}>
          <figure className="hero__frame hero__frame--main">
            <span className="photo__media">
              <img src={hero.collage[0].src} alt={hero.collage[0].alt} />
              <span className="photo__tint" aria-hidden="true" />
            </span>
          </figure>
          <figure className="hero__frame hero__frame--side">
            <span className="photo__media">
              <img src={hero.collage[1].src} alt={hero.collage[1].alt} />
              <span className="photo__tint" aria-hidden="true" />
            </span>
          </figure>
        </div>
      </div>

      <WaveDivider from="transparent" to="var(--sheet, #F3EFE4)" />
    </section>
  );
}
