import { useEffect } from "react";

// Fades + lifts sections and cards into view as they scroll on screen.
export default function useReveal(dep) {
  useEffect(() => {
    const els = [...document.querySelectorAll(".section-head, .card, .reveal")];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          setTimeout(() => e.target.classList.add("settled"), 1500);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => {
      const sibs = el.parentElement ? [...el.parentElement.children] : [el];
      el.style.setProperty("--rd", `${(sibs.indexOf(el) % 6) * 90}ms`);
      el.setAttribute("data-reveal", "");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [dep]);
}
