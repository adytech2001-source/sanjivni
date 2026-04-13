import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/happy-graduates/1920/1080"
          alt="Happy Students"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-navy/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            100% Admission Assistance <br />
            <span className="text-brand-light-blue">For Your Dream Career</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Don't wait! Secure your seat in top colleges today. Our experts are ready to guide you through the entire process.
          </p>
          <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 h-16 text-xl font-bold rounded-2xl flex items-center gap-3 mx-auto shadow-xl shadow-green-500/20">
            <MessageCircle size={28} />
            Enquire on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-light-blue rounded-lg flex items-center justify-center text-brand-navy font-bold text-xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Sanjivani</span>
                <span className="text-xs font-medium text-white/70">Career Counselling</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Your trusted partner for direct admission and expert career counselling in Gondia and across India.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/sanjivani.career.counseling" },
                { Icon: Instagram, href: "https://www.instagram.com/sanjivani_career_counseling/?hl=en" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-light-blue hover:text-brand-navy transition-colors">
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-brand-light-blue inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Courses", "Latest Updates", "Contact Us", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-brand-light-blue transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light-blue" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-brand-light-blue inline-block">Our Courses</h4>
            <ul className="space-y-4">
              {["MBBS Admission", "B.Tech Admission", "MBA Admission", "Law Admission", "Pharmacy Admission", "BDS Admission"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-brand-light-blue transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light-blue" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-brand-light-blue inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-light-blue">
                  <MapPin size={20} />
                </div>
                <span className="text-white/70 text-sm">
                  BJ Hospital Near Chitnavis Hospital, Gondia, Maharashtra
                </span>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-light-blue">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+918329095925" className="text-white/70 hover:text-white">+91 8329095925</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-light-blue">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@sanjivanicounselling.com" className="text-white/70 hover:text-white">info@sanjivanicounselling.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2026 Sanjivani Career Counselling. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918329095925"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-bounce"
    >
      <MessageCircle size={36} />
    </a>
  );
}
