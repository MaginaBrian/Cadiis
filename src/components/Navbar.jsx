import { useEffect, useState } from "react";
import { nav } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(16,42,42,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(6px)" : "none",
        transition: "background 0.25s ease",
        borderBottom: scrolled ? "1px solid rgba(143,168,154,0.2)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}
        >
          <img src="/images/logo.png" alt="CADIIS" style={{ height: "36px", width: "auto" }} />
        </a>

        <nav
          style={{
            display: "flex",
            gap: "1.8rem",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: "var(--parchment)",
                fontSize: "0.92rem",
                fontWeight: 500,
                textDecoration: "none",
                opacity: 0.9,
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--brass" style={{ padding: "0.6rem 1.3rem" }}>
            Get in touch
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="nav-toggle"
          style={{
            display: "none",
            background: "none",
            border: "1px solid rgba(243,239,228,0.35)",
            borderRadius: "8px",
            width: "42px",
            height: "42px",
            color: "var(--parchment)",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            background: "#0c2323",
            borderTop: "1px solid rgba(143,168,154,0.2)",
          }}
        >
          <div className="container" style={{ display: "flex", flexDirection: "column", padding: "1.2rem" }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  color: "var(--parchment)",
                  padding: "0.75rem 0",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(143,168,154,0.12)",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn--brass"
              style={{ marginTop: "1rem", justifyContent: "center" }}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
