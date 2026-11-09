import { useEffect, useRef } from "react";

export default function PointerGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const glow = ref.current;
    if (!glow) return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const move = (event) => {
      glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      const dark = event.target instanceof Element && event.target.closest(".section--dark, .hero, .statement, .contact-band, .service-hero");
      glow.classList.toggle("is-on", Boolean(dark));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="pointer-glow" aria-hidden="true" />;
}
