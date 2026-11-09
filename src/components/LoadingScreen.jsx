import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return !sessionStorage.getItem("cadiis-intro");
  });

  useEffect(() => {
    if (!show) return undefined;
    const timer = setTimeout(() => {
      sessionStorage.setItem("cadiis-intro", "1");
      setShow(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;
  return (
    <div className="loader" role="status" aria-live="polite" aria-label="Loading CADIIS">
      <div className="loader__mark">
        <svg className="loader__arc" viewBox="0 0 180 120" aria-hidden="true">
          <path pathLength="1" d="M18 96C28 40 70 16 112 28C150 40 166 78 150 100" />
        </svg>
        <img src="/images/logo-trim.png" alt="" />
      </div>
    </div>
  );
}
