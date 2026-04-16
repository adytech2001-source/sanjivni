import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, School, Building2, MapPin, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const universities = [
  { name: "IIT Bombay", category: "Engineering", location: "Maharashtra", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" },
  { name: "AIIMS Delhi", category: "Medical", location: "Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/All_India_Institute_of_Medical_Sciences%2C_New_Delhi_Logo.svg/1200px-All_India_Institute_of_Medical_Sciences%2C_New_Delhi_Logo.svg.png" },
  { name: "VNIT Nagpur", category: "Engineering", location: "Maharashtra", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/VNIT_Nagpur_logo.png/220px-VNIT_Nagpur_logo.png" },
  { name: "IIT Indore", category: "Engineering", location: "Madhya Pradesh", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Indian_Institute_of_Technology_Indore_logo.png/220px-Indian_Institute_of_Technology_Indore_logo.png" },
  { name: "AIIMS Raipur", category: "Medical", location: "Chhattisgarh", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/All_India_Institute_of_Medical_Sciences%2C_Raipur_logo.png/220px-All_India_Institute_of_Medical_Sciences%2C_Raipur_logo.png" },
  { name: "COEP Pune", category: "Engineering", location: "Maharashtra", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/COEP_logo.png/220px-COEP_logo.png" },
  { name: "DAVV Indore", category: "University", location: "Madhya Pradesh", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Devi_Ahilya_Vishwavidyalaya_logo.png/220px-Devi_Ahilya_Vishwavidyalaya_logo.png" },
  { name: "NIT Raipur", category: "Engineering", location: "Chhattisgarh", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/National_Institute_of_Technology%2C_Raipur_logo.png/220px-National_Institute_of_Technology%2C_Raipur_logo.png" },
];

export default function UniversitySelections() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUniversities = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return universities;

    return universities.filter(
      (uni) =>
        uni.name.toLowerCase().includes(query) ||
        uni.category.toLowerCase().includes(query) ||
        uni.location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
            className="text-gray-600 text-lg mb-10"
          >
            We take pride in our students who have secured admissions in India's most prestigious institutions through our expert guidance and support.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-light-blue transition-colors" size={20} />
              <Input
                type="text"
                placeholder="Search by name, category, or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-brand-light-blue/20 focus:border-brand-light-blue transition-all text-lg shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-navy transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((uni, i) => (
                <motion.div
                  key={uni.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
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
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mb-4">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">No results found</h3>
                <p className="text-gray-500">Try searching for a different university, category, or location.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-6 text-brand-light-blue font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
