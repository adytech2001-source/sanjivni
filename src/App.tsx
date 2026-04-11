import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer, WhatsAppButton } from "./components/Footer";
import PopupForm from "./components/PopupForm";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FounderPage from "./pages/FounderPage";
import MBBSPage from "./pages/MBBSPage";
import BTechPage from "./pages/BTechPage";
import MBAPage from "./pages/MBAPage";
import ContactPage from "./pages/ContactPage";
import MissionPage from "./pages/MissionPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-brand-orange-start selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/mbbs" element={<MBBSPage />} />
            <Route path="/btech" element={<BTechPage />} />
            <Route path="/mba" element={<MBAPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
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
