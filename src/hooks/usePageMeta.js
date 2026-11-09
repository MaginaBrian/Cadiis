import { useEffect } from "react";

const DEFAULT_TITLE = "CADIIS | Climate · Actuarial · Data · Inclusion";
const DEFAULT_DESC =
  "CADIIS — Climate, Actuarial, Data and Inclusive Insurance solutions delivering risk intelligence, inclusive protection and resilient growth across Africa.";

export default function usePageMeta(title = DEFAULT_TITLE, description = DEFAULT_DESC) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `https://www.cadiis.com${window.location.pathname}`;
  }, [title, description]);
}
