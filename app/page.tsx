import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import AICompliance from "./components/AICompliance";
import DocumentIntelligence from "./components/DocumentIntelligence";
import ComplianceControlCenter from "./components/ComplianceControlCenter";
import Client360 from "./components/Client360";
import OperationalIntelligence from "./components/OperationalIntelligence";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden scroll-smooth bg-[#050505] text-white"
    >
      {/* ================================================= */}
      {/* NAVIGATION                                        */}
      {/* ================================================= */}

      <Navbar />

      {/* ================================================= */}
      {/* 01 — HERO                                         */}
      {/* ================================================= */}

      <Hero />

      {/* ================================================= */}
      {/* 02 — PLATFORM                                     */}
      {/* ================================================= */}

      <Platform />

      {/* ================================================= */}
      {/* 03 — FEATURES                                     */}
      {/* ================================================= */}

      <Features />

      {/* ================================================= */}
      {/* 04 — WORKFLOW                                     */}
      {/* ================================================= */}

      <Workflow />

      {/* ================================================= */}
      {/* 05 — AI COMPLIANCE                                */}
      {/* ================================================= */}

      <AICompliance />

      {/* ================================================= */}
      {/* 06 — DOCUMENT INTELLIGENCE                        */}
      {/* ================================================= */}

      <DocumentIntelligence />

      {/* ================================================= */}
      {/* 07 — COMPLIANCE CONTROL CENTER                    */}
      {/* ================================================= */}

      <ComplianceControlCenter />

      {/* ================================================= */}
      {/* 08 — CLIENT INTELLIGENCE                          */}
      {/* ================================================= */}

      <Client360 />

      {/* ================================================= */}
      {/* 09 — OPERATIONAL INTELLIGENCE                     */}
      {/* ================================================= */}

      <OperationalIntelligence />

      {/* ================================================= */}
      {/* 10 — FINAL CTA                                    */}
      {/* ================================================= */}

      <FinalCTA />

      {/* ================================================= */}
      {/* 11 — FOOTER                                       */}
      {/* ================================================= */}

      <Footer />
    </main>
  );
}