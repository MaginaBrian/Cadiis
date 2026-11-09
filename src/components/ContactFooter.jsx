import { Link } from "react-router-dom";
import { contact } from "../data/content";
import { mailHref } from "../lib/mail";
import ContactForm from "./ContactForm";

export default function ContactFooter() {
  return (
    <section id="contact" className="contact-band">
      <img className="contact-band__topo" src="/images/hero-topo.webp" alt="" />
      <div className="container" style={{ position: "relative", paddingTop: "clamp(4.5rem, 9vw, 6.5rem)", paddingBottom: "clamp(3rem, 6vw, 4rem)" }}>
        <img src="/images/logo-trim.png" alt="CADIIS" style={{ height: "34px", width: "auto", background: "var(--parchment)", padding: "8px 16px", borderRadius: "12px", border: "1px solid var(--brass)", marginBottom: "1.4rem" }} />
        <p className="eyebrow eyebrow--brass">GET IN TOUCH</p>
        <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", maxWidth: "18ch", margin: "0.8rem 0 1rem" }}>
          Ready to build climate resilience that <em className="em-gold">works in practice?</em>
        </h2>
        <p style={{ maxWidth: "38rem", opacity: 0.88 }}>{contact.body}</p>
        <div className="channel-row">
          <a className="btn btn--brass" href={mailHref(contact.email)}>Email {contact.email}</a>
          <a className="btn btn--ghost" href={mailHref(contact.email, "Book a 20-minute call", "Hello CADIIS,\n\nI would like to book a 20-minute call.\n")}>
            Book a 20-minute call
          </a>
          <Link className="btn btn--ghost" to="/profile">Download profile</Link>
        </div>
        <div className="contact-layout">
          <div className="contact-card">
            <h3 style={{ marginBottom: "0.9rem" }}>Tell us what you need</h3>
            <ContactForm />
          </div>
          <div className="contact-card detail-list">
            {contact.details.map((detail) => (
              <div key={detail.label}>
                <p className="eyebrow eyebrow--pine">{detail.label}</p>
                {detail.href ? <a href={detail.href}>{detail.value}</a> : <p style={{ fontWeight: 600 }}>{detail.value}</p>}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "3rem", paddingTop: "1.2rem", borderTop: "1px solid rgba(143,168,154,0.25)", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", fontSize: "0.85rem", opacity: 0.75 }}>
          <span>CADIIS · Nairobi, Kenya</span>
          <span>Climate · Actuarial · Data · Inclusion</span>
        </div>
      </div>
    </section>
  );
}
