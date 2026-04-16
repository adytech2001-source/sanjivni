import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import PopupForm from "./PopupForm";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "#",
      dropdown: [
        { name: "Our Story", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Meet Founder", href: "/founder" },
      ],
    },
    {
      name: "Courses",
      href: "#",
      dropdown: [
        { name: "MBBS Admission", href: "/mbbs" },
        { name: "Deemed MBBS", href: "/deemed-mbbs" },
        { name: "Maharashtra Private MBBS", href: "/maharashtra-private-mbbs" },
        { name: "MP Private MBBS", href: "/mp-private-mbbs" },
        { name: "Chhattisgarh Private MBBS", href: "/chhattisgarh-private-mbbs" },
        { name: "B.Tech Admission", href: "/btech" },
        { name: "MBA Admission", href: "/mba" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <Logo isScrolled={isScrolled} isHome={isHome} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-brand-light-blue ${
                    isScrolled || !isHome ? "text-primary" : "text-white"
                  }`}
                >
                  {link.name} <ChevronDown size={14} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`font-medium transition-colors hover:text-brand-light-blue ${
                    isScrolled || !isHome ? "text-primary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-xl rounded-xl p-4 min-w-[200px] border border-gray-100">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block py-2 px-4 text-primary hover:text-brand-light-blue hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <PopupForm 
            trigger={
              <Button className="bg-brand-navy text-white border-none font-semibold hover:bg-brand-light-blue hover:text-brand-navy transition-all">
                Apply Now
              </Button>
            } 
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || !isHome ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled || !isHome ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-4 md:hidden flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="space-y-2">
                    <p className="text-primary font-bold px-4 py-2 bg-gray-50 rounded-lg">{link.name}</p>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block text-primary font-medium py-2 px-8 border-b border-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="block text-primary font-medium py-2 px-4 border-b border-gray-100"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <PopupForm 
              trigger={
                <Button className="bg-brand-navy w-full text-white font-semibold">
                  Apply Now
                </Button>
              } 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
