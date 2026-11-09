import { Link, useParams } from "react-router-dom";
import Photo from "../components/Photo";
import ServiceSection from "../components/ServiceSection";
import { serviceDetails } from "../data/content";
import usePageMeta from "../hooks/usePageMeta";
import NotFound from "./NotFound";

export default function ServicePage() {
  const { id } = useParams();
  const index = serviceDetails.findIndex((item) => item.id === id);
  const data = serviceDetails[index];
  usePageMeta(
    data ? `${data.heading} | CADIIS` : "Page not found | CADIIS",
    data?.intro || "That page is not on the CADIIS site."
  );
  if (!data) return <NotFound />;

  const prev = serviceDetails[index - 1];
  const next = serviceDetails[index + 1];
  const number = String(index + 1).padStart(2, "0");

  return (
    <>
      <header className="service-hero">
        {data.image ? (
          <Photo src={data.image} alt="" eager />
        ) : (
          <img className="service-hero__topo" src="/images/hero-topo.webp" alt="" />
        )}
        <div className="service-hero__scrim" />
        <div className="container">
          <p className="section-no">
            Service {number} <span>/ {String(serviceDetails.length).padStart(2, "0")}</span>
          </p>
          <p className="eyebrow eyebrow--brass">{data.kicker}</p>
          <h1>{data.heading}</h1>
          <Link className="btn btn--ghost" to={{ pathname: "/", hash: "#what-we-do" }}>
            All services
          </Link>
        </div>
      </header>
      <ServiceSection data={data} hideTitle />
      <section className="section section--light">
        <div className="container service-links">
          {prev ? <Link to={`/services/${prev.id}`}>← {prev.kicker}</Link> : <span />}
          {next ? <Link to={`/services/${next.id}`}>{next.kicker} →</Link> : <span />}
        </div>
      </section>
    </>
  );
}
