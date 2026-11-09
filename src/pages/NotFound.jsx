import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found | CADIIS", "That page is not on the CADIIS site.");
  return (
    <section className="section section--light">
      <div className="container">
        <p className="eyebrow eyebrow--pine">404</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0.6rem 0 1rem" }}>That page is not on this site.</h1>
        <Link className="btn btn--brass" to="/">Back to the home page</Link>
      </div>
    </section>
  );
}
