import { founder, hero, serviceDetails, whoWeAre } from "../data/content";
import usePageMeta from "../hooks/usePageMeta";

export default function ProfilePage() {
  usePageMeta("Company profile | CADIIS", hero.body);

  return (
    <article className="section section--light profile">
      <div className="container">
        <p className="eyebrow eyebrow--pine">COMPANY PROFILE</p>
        <h1>CADIIS</h1>
        <p style={{ maxWidth: "40rem" }}>{hero.body}</p>
        <p style={{ marginTop: "0.7rem" }}>Nairobi, Kenya · Africa-wide · info@cadiis.com</p>
        <button className="btn btn--brass" type="button" style={{ marginTop: "1.2rem" }} onClick={() => window.print()}>
          Save as PDF
        </button>
        <div className="profile__block">
          <h2>{whoWeAre.heading}</h2>
          <p>{whoWeAre.body}</p>
        </div>
        <div className="profile__block">
          <h2>Service lines</h2>
          <ul>
            {serviceDetails.map((service) => (
              <li key={service.id}>
                <strong>{service.kicker}.</strong> {service.intro}
              </li>
            ))}
          </ul>
        </div>
        <div className="profile__block">
          <h2>{founder.name}</h2>
          <p>{founder.role}</p>
          <p style={{ marginTop: "0.5rem" }}>{founder.bio}</p>
        </div>
      </div>
    </article>
  );
}
