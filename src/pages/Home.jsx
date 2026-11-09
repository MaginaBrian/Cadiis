import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactFooter from "../components/ContactFooter";
import Founder from "../components/Founder";
import Hero from "../components/Hero";
import Perspectives from "../components/Perspectives";
import ProofStrip from "../components/ProofStrip";
import StatementBand from "../components/StatementBand";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
import Workstreams from "../components/Workstreams";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  const location = useLocation();
  usePageMeta();

  useEffect(() => {
    if (!location.hash) return undefined;
    const id = location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <ProofStrip />
      <WhoWeAre />
      <StatementBand />
      <WhatWeDo />
      <Workstreams />
      <WhoWeWorkWith />
      <Perspectives />
      <Founder />
      <ContactFooter />
    </>
  );
}
