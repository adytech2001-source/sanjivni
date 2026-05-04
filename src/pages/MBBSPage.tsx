import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

export default function MBBSPage() {
  useEffect(() => {
    document.title = "Direct MBBS Admission in India Without NEET | Sanjivani Counselling";
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
              <Stethoscope size={16} />
              <span>Medical Admissions 2026</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Direct MBBS Admission <br />
              <span className="text-brand-light-blue">in India</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              We provide admission in top medical colleges through management quota. Secure your seat in the most reputed medical institutions.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-brand-light-blue text-brand-navy hover:bg-white px-8 font-bold h-14 text-lg rounded-xl">
                Enquire Now
              </Button>
              <Link to="/deemed-mbbs">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 font-bold h-14 text-lg rounded-xl flex items-center gap-2">
                  Deemed University Fees <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
            alt="Medical" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">MBBS Admission Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our streamlined 4-step process ensures you get the best medical education without the stress.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Counselling", desc: "Expert guidance to understand your options." },
              { step: "02", title: "College Selection", desc: "Choosing the best fit for your career." },
              { step: "03", title: "Documentation", desc: "Hassle-free paperwork and verification." },
              { step: "04", title: "Admission", desc: "Final seat allotment and enrollment." },
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                <span className="text-5xl font-black text-brand-light-blue/10 group-hover:text-brand-light-blue/20 transition-colors absolute top-4 left-1/2 -translate-x-1/2">{item.step}</span>
                <h4 className="text-xl font-bold text-brand-navy mb-3 relative z-10">{item.title}</h4>
                <p className="text-gray-500 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light-blue/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Required Documents</h2>
                <p className="text-brand-light-blue font-bold text-lg">For NEET UG Counselling 2026–27</p>
                <div className="h-1.5 w-24 bg-brand-gold mt-4 rounded-full mx-auto md:mx-0"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "10th Marksheet and Certificate",
                  "12th Marksheet and Certificate",
                  "Transfer/Leaving Certificate",
                  "Migration Certificate",
                  "Character Certificate (if applicable)",
                  "Aadhaar Card",
                  "PAN Card (if applicable)",
                  "Domicile Certificate (if applicable)",
                  "Caste Certificate (if applicable)",
                  "Caste Validity (if applicable)",
                  "Non-creamy layer Certificate (current year, if applicable)",
                  "NEET Admit Card",
                  "NEET Application Form",
                  "NEET Score Card",
                  "Passport-size photo",
                  "Gap Certificate (if applicable)",
                  "Medical Fitness Certificate",
                ].map((doc, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-lg bg-brand-light-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={14} className="text-brand-navy" strokeWidth={3} />
                    </div>
                    <span className="text-white/90 font-medium">{doc}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl">
                <p className="text-brand-light-blue font-bold mb-2">💡 Pro Tip:</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Keep at least 3 sets of photocopies (attested) and original documents ready in a folder before the counselling starts. For specialized categories, ensure your certificates are from the current financial year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
}
