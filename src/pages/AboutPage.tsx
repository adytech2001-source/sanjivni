import { useEffect } from "react";
import { motion } from "motion/react";
import VisionMission from "@/components/VisionMission";
import Stats from "@/components/Stats";
import { FinalCTA } from "@/components/Footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Sanjivani Career Counselling | Best Admission Consultant in Gondia";
  }, []);

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About Sanjivani Career Counselling
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Sanjivani Career Counselling is a leading education consultancy helping students secure admission in top colleges across India.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-light-blue rounded-full blur-[120px]" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">Our Journey & Commitment</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in Gondia, Maharashtra, Sanjivani Career Counselling has grown into a trusted name for students seeking professional education. We understand the stress and confusion students face after their 12th standard, and we are here to simplify that journey.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of expert counsellors provides end-to-end support, from selecting the right course and college to handling documentation and securing direct admission through management quota and institute-level seats.
            </p>
          </div>
        </div>
      </section>

      <VisionMission />
      <Stats />
      <FinalCTA />
    </div>
  );
}
