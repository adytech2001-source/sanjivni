import { useEffect } from "react";
import { motion } from "motion/react";
import { Award, BookOpen, Target, GraduationCap, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FounderPage() {
  useEffect(() => {
    document.title = "Founder of Sanjivani Career Counselling | Career Expert Gondia";
  }, []);

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 bg-white">
                <img
                  src="https://res.cloudinary.com/dhzb1wiuy/image/upload/v1776282965/founder.png_wjxqli.png"
                  alt="Founder"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 gradient-orange rounded-full -z-10 blur-3xl opacity-30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">Shersing V. Tembhurnikar</h1>
              <p className="text-brand-light-blue font-bold text-xl mb-6">Founder & Professional Counselor</p>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Hello, I am Shersing V. Tembhurnikar, a professional counselor with 10+ years of experience in helping individuals overcome admission challenges and secure seats in top colleges across India.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Sanjivani Career Counselling was founded with a mission to guide students toward the right career path and simplify the admission process, especially for complex medical and engineering entrance cycles.
              </p>

              <div className="bg-brand-navy/5 p-8 rounded-3xl border border-brand-navy/10 mb-8">
                <p className="text-brand-navy italic text-xl font-medium mb-4">
                  "Every student deserves the right guidance to reach their full potential. Our goal is to help you achieve your dreams with confidence and clarity."
                </p>
                <p className="text-brand-navy font-bold">— Shersing V. Tembhurnikar</p>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-6">Qualifications & Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "B.Tech, MBA", color: "text-blue-600" },
                  { icon: Award, text: "Professional Certifications", color: "text-amber-600" },
                  { icon: Calendar, text: "10+ Years Experience", color: "text-green-600" },
                  { icon: Users, text: "1000+ Happy Clients", color: "text-brand-light-blue" },
                  { icon: Target, text: "College Selection Strategy", color: "text-red-600" },
                  { icon: BookOpen, text: "Direct Admission Expert", color: "text-purple-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <item.icon className={item.color} size={20} />
                    <span className="font-semibold text-brand-navy">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
