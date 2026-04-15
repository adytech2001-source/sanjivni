import { motion } from "motion/react";
import { GraduationCap, School, Building2, MapPin } from "lucide-react";

const universities = [
  { name: "IIT Bombay", category: "Engineering", location: "Maharashtra", logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "AIIMS Delhi", category: "Medical", location: "Delhi", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "NIT Nagpur", category: "Engineering", location: "Maharashtra", logo: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "IIT Indore", category: "Engineering", location: "Madhya Pradesh", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "AIIMS Raipur", category: "Medical", location: "Chhattisgarh", logo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "COEP Pune", category: "Engineering", location: "Maharashtra", logo: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "DAVV Indore", category: "University", location: "Madhya Pradesh", logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "NIT Raipur", category: "Engineering", location: "Chhattisgarh", logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200&h=200" },
];

export default function UniversitySelections() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-sm mb-4 uppercase tracking-wider"
          >
            <GraduationCap size={16} className="text-brand-light-blue" />
            <span>Success Across India</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6"
          >
            Our Students in <span className="text-brand-light-blue">Top Universities</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We take pride in our students who have secured admissions in India's most prestigious institutions through our expert guidance and support.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {universities.map((uni, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-light-blue/30 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-brand-navy/5 rounded-2xl group-hover:bg-brand-light-blue/10 transition-colors duration-500" />
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="w-full h-full object-contain p-4 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              <h4 className="text-brand-navy font-bold text-lg mb-1 group-hover:text-brand-light-blue transition-colors">
                {uni.name}
              </h4>
              
              <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                <School size={12} />
                <span>{uni.category}</span>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-50 w-full flex items-center justify-center gap-1.5 text-gray-500 text-sm">
                <MapPin size={14} className="text-brand-light-blue" />
                <span>{uni.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-[2.5rem] bg-brand-navy text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light-blue/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-light-blue">
                <Building2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pan-India Network</h3>
                <p className="text-white/60">Connected with 500+ top colleges</p>
              </div>
            </div>
            <div className="h-px w-full md:w-px md:h-12 bg-white/10" />
            <div className="text-center md:text-left">
              <p className="text-brand-light-blue font-bold text-3xl mb-1">100%</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Placement Support</p>
            </div>
            <div className="h-px w-full md:w-px md:h-12 bg-white/10" />
            <div className="text-center md:text-left">
              <p className="text-brand-light-blue font-bold text-3xl mb-1">10+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Years of Trust</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
