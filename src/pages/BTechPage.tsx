import { useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

export default function BTechPage() {
  useEffect(() => {
    document.title = "Direct BTech Admission Without JEE | Top Engineering Colleges India";
  }, []);

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-light-blue text-sm font-semibold mb-6"
            >
              <Cpu size={16} />
              <span>Engineering Admissions 2026</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Direct B.Tech <br />
              <span className="text-brand-light-blue">Admission</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              Get admission in top engineering colleges without JEE. We help you secure seats in the best technical universities across India.
            </motion.p>
            <Button size="lg" className="bg-brand-light-blue text-brand-navy hover:bg-white px-8 font-bold h-14 text-lg rounded-xl">
              Apply Now
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Engineering" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Why Choose Direct B.Tech Admission?</h2>
              <div className="space-y-6">
                {[
                  { title: "No JEE Stress", desc: "Skip the highly competitive entrance exams and secure your seat directly." },
                  { title: "Top Private Colleges", desc: "Access to the best infrastructure and placement-oriented engineering colleges." },
                  { title: "Branch of Choice", desc: "Get the branch you want—CS, IT, Mechanical, or Electronics—without rank limitations." },
                  { title: "Expert Guidance", desc: "We help you evaluate colleges based on placements, faculty, and fees." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
                alt="Engineer" 
                className="rounded-3xl shadow-2xl" 
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-navy p-8 rounded-2xl text-white">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm opacity-70">Partner Colleges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
}
