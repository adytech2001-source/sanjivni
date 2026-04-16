import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer, WhatsAppButton } from "./components/Footer";
import PopupForm from "./components/PopupForm";
import Home from "./pages/Home";

// Lazy load other pages
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FounderPage = lazy(() => import("./pages/FounderPage"));
const MBBSPage = lazy(() => import("./pages/MBBSPage"));
const BTechPage = lazy(() => import("./pages/BTechPage"));
const MBAPage = lazy(() => import("./pages/MBAPage"));
const DeemedMBBSPage = lazy(() => import("./pages/DeemedMBBSPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MissionPage = lazy(() => import("./pages/MissionPage"));
const MaharashtraPrivateMBBS = lazy(() => import("./pages/MaharashtraPrivateMBBS"));
const MPPrivateMBBS = lazy(() => import("./pages/MPPrivateMBBS"));
const ChhattisgarhPrivateMBBS = lazy(() => import("./pages/ChhattisgarhPrivateMBBS"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-brand-navy border-t-brand-light-blue rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-brand-orange-start selection:text-white">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/mbbs" element={<MBBSPage />} />
              <Route path="/deemed-mbbs" element={<DeemedMBBSPage />} />
              <Route path="/maharashtra-private-mbbs" element={<MaharashtraPrivateMBBS />} />
              <Route path="/mp-private-mbbs" element={<MPPrivateMBBS />} />
              <Route path="/chhattisgarh-private-mbbs" element={<ChhattisgarhPrivateMBBS />} />
              <Route path="/btech" element={<BTechPage />} />
              <Route path="/mba" element={<MBAPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <div className="fixed bottom-24 right-6 z-40 md:hidden">
          <PopupForm 
            trigger={
              <button className="bg-brand-navy text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
                <span className="font-bold text-sm">Enquire</span>
              </button>
            }
          />
        </div>
        <div className="fixed bottom-6 left-6 z-40 hidden md:block">
          <PopupForm 
            trigger={
              <button className="bg-brand-navy text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform border-2 border-brand-light-blue/20">
                <span className="font-bold">Direct Admission Enquiry</span>
              </button>
            }
          />
        </div>
      </div>
    </Router>
  );
}
