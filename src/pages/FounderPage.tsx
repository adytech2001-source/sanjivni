import { useEffect } from "react";
import { motion } from "motion/react";
import { Award, BookOpen, Target, MessageCircle } from "lucide-react";
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
                  src="https://i.postimg.cc/9RBLTQxx/founder.png"
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
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">About the Founder</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                The founder of Sanjivani Career Counselling is a dedicated education expert with over 10 years of experience in guiding students.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                They have helped students gain admission in MBBS, B.Tech, MBA and other courses through expert counselling and a strong network of colleges.
              </p>

              <div className="bg-brand-navy/5 p-8 rounded-3xl border border-brand-navy/10 mb-8">
                <p className="text-brand-navy italic text-xl font-medium mb-4">
                  "Success begins with the right decision. We are here to guide you at every step."
                </p>
                <p className="text-brand-gold font-bold">— Personal Message</p>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-6">Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, text: "Career Counselling" },
                  { icon: Award, text: "Direct Admission Process" },
                  { icon: BookOpen, text: "College Selection Strategy" },
                  { icon: MessageCircle, text: "Student Guidance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <item.icon className="text-brand-light-blue" size={20} />
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
