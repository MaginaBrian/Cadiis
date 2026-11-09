import { proof } from "../data/content";
import AfricaMap from "./AfricaMap";

export default function ProofStrip() {
  return (
    <section className="section section--light" aria-label="Where CADIIS works">
      <div className="container proof-grid">
        <div>
          <p className="eyebrow eyebrow--pine">{proof.kicker}</p>
          <div className="proof-places">
            <p>
              <span>Base</span>
              <strong>{proof.place}</strong>
            </p>
            <p>
              <span>Reach</span>
              <strong>{proof.reach}</strong>
            </p>
          </div>
          <p style={{ marginTop: "1.2rem", maxWidth: "36rem" }}>{proof.body}</p>
        </div>
        <AfricaMap />
      </div>
    </section>
  );
}
