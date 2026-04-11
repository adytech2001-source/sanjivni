import { motion } from "motion/react";
import { Eye, Target, Lightbulb, Rocket } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl p-10 text-white bg-brand-light-blue shadow-xl shadow-brand-light-blue/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Eye size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Lightbulb size={32} className="text-brand-navy" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 text-brand-navy">Our Vision</h3>
              <p className="text-brand-navy/90 text-lg leading-relaxed">
                To be the most trusted and student-centric career counselling platform in India, empowering every student to reach their full potential through the right educational choices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl p-10 text-white bg-brand-navy shadow-xl shadow-brand-navy/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Rocket size={32} className="text-brand-light-blue" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To simplify the complex admission process by providing transparent, expert, and direct admission support, ensuring students find the best-fit colleges for their career goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
