import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { contact } from "../data/content";
import { mailHref } from "../lib/mail";

export default function StickyCta() {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) {
      setHidden(false);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  if (hidden) return null;
  return (
    <div className="sticky-cta">
      <Link to={{ pathname: "/", hash: "#contact" }} className="btn btn--brass">
        Get in touch
      </Link>
      <a className="btn btn--ghost" href={mailHref(contact.email)}>
        Email
      </a>
    </div>
  );
}
