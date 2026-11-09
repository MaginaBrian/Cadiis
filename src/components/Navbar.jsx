import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, whatWeDo } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function NavItem({ href, className, onClick, children }) {
  if (href.startsWith("/#")) {
    return (
      <Link to={{ pathname: "/", hash: href.slice(1) }} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function ServicesMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const fromHover = useRef(false);

  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => {
      if (!menu.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      className="nav__menu"
      ref={menu}
      onMouseEnter={() => {
        fromHover.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        fromHover.current = false;
        setOpen(false);
      }}
    >
      <button
        type="button"
        className="nav__menu-btn"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => {
          if (fromHover.current) return;
          setOpen((value) => !value);
        }}
      >
        Services
      </button>
      {open ? (
        <div id="services-menu" className="nav__dropdown" role="menu">
          <Link to={{ pathname: "/", hash: "#what-we-do" }} role="menuitem" onClick={onNavigate}>
            All services
          </Link>
          {whatWeDo.items.map((item) => (
            <Link key={item.id} to={`/services/${item.id}`} role="menuitem" onClick={onNavigate}>
              {item.title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar({ solid = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef(null);
  const location = useLocation();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`nav ${scrolled || solid ? "nav--scrolled" : ""} ${solid ? "nav--solid" : ""}`}>
      <div className="progress" ref={bar} aria-hidden="true" />
      <div className="container nav__row">
        <Link to="/" className="nav__logo" aria-label="CADIIS home">
          <img src="/images/logo-trim.png" alt="CADIIS" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <NavItem href={nav[0].href} className="nav__link">{nav[0].label}</NavItem>
          <ServicesMenu onNavigate={close} />
          {nav.slice(1).map((item) => (
            <NavItem key={item.href} href={item.href} className="nav__link">
              {item.label}
            </NavItem>
          ))}
        </nav>

        <div className="nav__tools">
          <ThemeToggle />
          <Link to="/profile" className="btn btn--ghost nav__profile">Profile</Link>
          <NavItem href="/#contact" className="btn btn--brass nav__cta">Get in touch</NavItem>
          <button
            className="nav__toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav__panel">
          <div className="container nav__panel-inner">
            <NavItem href="/#who-we-are" onClick={close}>Who we are</NavItem>
            <p className="nav__group">Services</p>
            {whatWeDo.items.map((item) => (
              <Link key={item.id} to={`/services/${item.id}`} onClick={close}>
                {item.title}
              </Link>
            ))}
            {nav.slice(1).map((item) => (
              <NavItem key={item.href} href={item.href} onClick={close}>
                {item.label}
              </NavItem>
            ))}
            <Link to="/profile" onClick={close}>Download profile</Link>
            <NavItem href="/#contact" className="btn btn--brass" onClick={close}>
              Get in touch
            </NavItem>
          </div>
        </div>
      ) : null}
    </header>
  );
}
