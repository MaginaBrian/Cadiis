import Heading from "./Heading";

export default function SectionHead({ index, total = "06", kicker, eyebrow = "eyebrow--pine", title, highlight, children }) {
  return (
    <div className="section-head">
      {index ? (
        <p className="section-no">
          {index} <span>/ {total}</span>
        </p>
      ) : null}
      <p className={`eyebrow ${eyebrow}`}>{kicker}</p>
      {title ? (
        <h2>
          <Heading text={title} highlight={highlight} />
        </h2>
      ) : null}
      {children}
    </div>
  );
}
