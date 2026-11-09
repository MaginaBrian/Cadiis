import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import PointerGlow from "./components/PointerGlow";
import StickyCta from "./components/StickyCta";
import useReveal from "./hooks/useReveal";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";

export default function App() {
  const location = useLocation();
  useReveal(location.pathname);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const overDark = location.pathname === "/" || location.pathname.startsWith("/services");

  return (
    <>
      <LoadingScreen />
      <PointerGlow />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar solid={!overDark} />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <StickyCta />
    </>
  );
}
