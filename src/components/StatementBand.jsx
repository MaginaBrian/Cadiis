import { statement } from "../data/content";

export default function StatementBand() {
  return (
    <section className="statement" aria-label="Statement">
      <p className="eyebrow eyebrow--brass">A NOTE ON THE WORK</p>
      <h2>
        {statement.before} <em className="em-gold">{statement.emphasis}</em>
      </h2>
    </section>
  );
}
