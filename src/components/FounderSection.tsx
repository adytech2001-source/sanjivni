import { motion } from "motion/react";
import { GraduationCap, Award, Users } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-200 min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Founder of Sanjivani Career Counselling"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20 max-w-[280px]">
              <p className="text-brand-navy italic font-medium text-sm mb-2">
                "Every student deserves the right guidance. Our goal is to help you achieve your dreams with confidence and clarity."
              </p>
              <p className="text-brand-gold font-bold text-sm">— Founder Message</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold font-bold text-lg mb-2 uppercase tracking-wider">Meet Our Founder</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              Leading with <span className="text-brand-light-blue">Experience & Vision</span>
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Sanjivani Career Counselling was founded with a mission to guide students toward the right career path and simplify the admission process.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With over a decade of experience in education consulting, the founder has helped 1000+ students secure admission in top colleges across India.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue mb-4">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-brand-navy text-xl">10+ Years</h4>
                <p className="text-gray-500 text-sm">Expertise in Consulting</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy mb-4">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-brand-navy text-xl">1000+</h4>
                <p className="text-gray-500 text-sm">Students Guided</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
