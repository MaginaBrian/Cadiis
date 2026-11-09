export function setupAnalytics() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  if (!domain || navigator.doNotTrack === "1") return;
  if (document.querySelector("script[data-cadiis-analytics]")) return;
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = domain;
  script.dataset.cadiisAnalytics = "plausible";
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}
