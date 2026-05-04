import * as React from "react";
import { motion } from "motion/react";
import { FileText, CheckCircle2 } from "lucide-react";

const requiredDocs = [
  "10th Marksheet & Certificate",
  "12th Marksheet & Certificate",
  "Transfer/Leaving Certificate",
  "Migration Certificate",
  "Character Certificate",
  "Aadhaar Card",
  "PAN Card",
  "Domicile Certificate",
  "Caste Certificate",
  "Caste Validity",
  "Non-creamy layer",
  "NEET Admit Card",
  "NEET Application Form",
  "NEET Score Card",
  "Passport-size photos",
  "Gap Certificate",
  "Medical Fitness Certificate"
];

export default function DocsChecklist() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-brand-navy rounded-[3rem] p-8 md:p-16 text-white relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light-blue/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-light-blue rounded-2xl flex items-center justify-center text-brand-navy">
                    <FileText size={24} />
                  </div>
                  <span className="text-brand-light-blue font-bold uppercase tracking-widest text-sm">Documentation Guide</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  NEET UG Counselling <br />
                  <span className="text-brand-light-blue">Required Documents Checklist</span>
                </h2>
                <div className="h-2 w-24 bg-brand-gold rounded-full"></div>
              </div>
              <div className="hidden lg:block">
                <a 
                  href="https://wa.me/918329095925" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold hover:bg-[#128C7E] transition-all shadow-xl hover:scale-105"
                >
                  Need Help? Message Us
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              {requiredDocs.map((doc, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={index} 
                  className="flex items-center gap-4 group py-3 border-b border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue shrink-0 group-hover:bg-brand-light-blue group-hover:text-brand-navy transition-all duration-300">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">{doc}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center gap-8 p-8 bg-white/5 rounded-[2rem] border border-white/10">
              <div className="flex-1">
                <p className="text-xl font-bold mb-2">💡 Quick Tip for Parents & Students</p>
                <p className="text-white/60">
                  Ensure all certificates (Cast, Validity, NCL, Domicile) are from the current financial year. Keep 3-4 sets of attested photocopies ready before the counselling process begins.
                </p>
              </div>
              <div className="md:hidden w-full">
                <a 
                  href="https://wa.me/918329095925" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block text-center bg-[#25D366] text-white py-4 rounded-xl font-bold"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
