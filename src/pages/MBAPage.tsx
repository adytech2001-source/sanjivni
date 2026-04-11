import { useEffect } from "react";
import { motion } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

export default function MBAPage() {
  useEffect(() => {
    document.title = "MBA Admission Without CAT | Top MBA Colleges in India";
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
              <Briefcase size={16} />
              <span>Management Admissions 2026</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Direct MBA <br />
              <span className="text-brand-light-blue">Admission in India</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              Get admission in top MBA colleges without entrance exams like CAT, MAT, or XAT. Accelerate your career with a premium management degree.
            </motion.p>
            <Button size="lg" className="bg-brand-light-blue text-brand-navy hover:bg-white px-8 font-bold h-14 text-lg rounded-xl">
              Get Started
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
            alt="MBA" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-8 text-center">Management Quota MBA Admission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              Many top-tier private B-schools in India reserve a percentage of seats for direct admission through management quota. We help you navigate this process and secure admission in colleges with excellent placement records.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "No Entrance Exam Required",
                "Admission in Top Private B-Schools",
                "Specialization of Your Choice",
                "Placement Assistance",
                "Hassle-free Documentation",
                "Direct Interaction with Colleges",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="text-brand-light-blue" size={20} />
                  <span className="font-semibold text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
}
