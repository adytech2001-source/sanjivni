import { useEffect } from "react";
import { motion } from "motion/react";
import VisionMission from "@/components/VisionMission";
import { FinalCTA } from "@/components/Footer";

export default function MissionPage() {
  useEffect(() => {
    document.title = "Our Vision & Mission | Sanjivani Career Counselling";
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
            Our Vision & Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Empowering students with the right guidance to build a successful future.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-light-blue rounded-full blur-[120px]" />
        </div>
      </section>

      <VisionMission />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Why Our Mission Matters</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-navy">For Students</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe every student has unique talents. Our mission is to ensure those talents are matched with the right educational environment, reducing the gap between potential and opportunity.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-navy">For Parents</h3>
                <p className="text-gray-600 leading-relaxed">
                  We aim to provide peace of mind to parents by offering transparent and reliable admission support, ensuring their investment in their child's education leads to a bright future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
