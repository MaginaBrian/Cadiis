import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import ServiceSection from "./components/ServiceSection";
import Workstreams from "./components/Workstreams";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import Founder from "./components/Founder";
import ContactFooter from "./components/ContactFooter";
import { serviceDetails } from "./data/content";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        {serviceDetails.map((service) => (
          <ServiceSection key={service.id} data={service} />
        ))}
        <Workstreams />
        <WhoWeWorkWith />
        <Founder />
        <ContactFooter />
      </main>
    </>
  );
}
