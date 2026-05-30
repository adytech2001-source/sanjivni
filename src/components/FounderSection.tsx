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
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img
                src="https://res.cloudinary.com/dhzb1wiuy/image/upload/v1776282965/founder.png_wjxqli.png"
                alt="Founder of Sanjivani Career Counselling"
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20 max-w-[280px]">
              <p className="text-brand-navy italic font-medium text-sm mb-2">
                "Every student deserves the right guidance. Our goal is to help you achieve your dreams with confidence and clarity."
              </p>
              <p className="text-brand-navy font-bold text-sm">— Founder Message</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-navy font-bold text-lg mb-2 uppercase tracking-wider">Meet Our Founder</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">
              Shersing V. Tembhurnikar
            </h3>
            <p className="text-brand-navy font-bold text-xl mb-4">Professional Admission Counselor</p>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Sanjivani Career Counselling was founded with a mission to guide students toward the right career path and simplify the admission process. 
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hello, I am Shersing V. Tembhurnikar, a professional counselor with 10+ years of experience in helping individuals overcome admission challenges and secure seats in top colleges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-brand-light-blue transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue group-hover:bg-brand-light-blue group-hover:text-white transition-all">
                  <GraduationCap size={20} />
                </div>
                <span className="font-bold text-brand-navy">B.Tech, MBA</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-brand-light-blue transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Award size={20} />
                </div>
                <span className="font-bold text-brand-navy">Certifications</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-brand-light-blue transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Award size={20} />
                </div>
                <span className="font-bold text-brand-navy">10+ Years Exp.</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:border-brand-light-blue transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Users size={20} />
                </div>
                <span className="font-bold text-brand-navy">1000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
