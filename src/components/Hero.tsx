import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award, Users, CheckCircle2, MessageCircle, Phone, FileText } from "lucide-react";
import PopupForm from "./PopupForm";

const courses = [
  "MBBS", "MBA", "B.Tech", "Pune", "Mumbai", "Bangalore", "MP", "CG", "UP", "Karnataka"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 bg-brand-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-light-blue/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-light-blue/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue/10 border border-brand-light-blue/20 text-brand-light-blue font-semibold text-sm mb-6">
              <GraduationCap size={18} />
              <span>Admission Open 2026-27</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Admission Open – <br />
              <span className="text-brand-light-blue">Direct Admission in Top Colleges Across India</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Study MBBS, B.Tech, MBA and other professional courses in top universities across India with expert guidance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-brand-light-blue text-brand-navy px-8 font-bold h-14 text-lg rounded-xl shadow-lg shadow-brand-light-blue/20 hover:scale-105 transition-transform flex items-center gap-2">
                <MessageCircle size={20} />
                WhatsApp Us
              </Button>
              <PopupForm 
                trigger={
                  <Button size="lg" className="bg-white text-brand-navy px-8 font-bold h-14 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 border-2 border-brand-light-blue/20">
                    <FileText size={20} className="text-brand-light-blue" />
                    Apply for Admission
                  </Button>
                }
              />
              <div className="flex items-center gap-2 text-white font-bold text-lg h-14 px-6 border border-white/20 rounded-xl bg-white/5">
                <Phone size={20} className="text-brand-light-blue" />
                <span>Call: +91 8329095925</span>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {courses.map((course, i) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white/5 border border-white/10 rounded-lg p-2 text-center hover:bg-white/10 transition-colors cursor-default"
                >
                  <span className="text-white font-medium text-sm">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl bg-[#080808]">
              <img
                src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=1200"
                srcSet="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=600 600w, https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=2000 2000w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Indian Student with Laptop"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-brand-light-blue/20"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light-blue flex items-center justify-center text-brand-navy">
                <Award size={24} />
              </div>
              <div>
                <p className="text-brand-navy font-bold text-lg leading-none">100%</p>
                <p className="text-brand-navy/60 text-xs font-medium">Admission Support</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-brand-light-blue/20"
            >
              <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-white">
                <Users size={24} />
              </div>
              <div>
                <p className="text-brand-navy font-bold text-lg leading-none">1000+</p>
                <p className="text-brand-navy/60 text-xs font-medium">Happy Students</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
