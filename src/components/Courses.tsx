import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Stethoscope, Briefcase, MapPin, Building2, School } from "lucide-react";

const courses = [
  { name: "Direct Admission in MBBS", icon: Stethoscope, color: "bg-red-500", desc: "Expert guidance for medical seats", href: "/mbbs" },
  { name: "Deemed MBBS Admission", icon: School, color: "bg-brand-navy", desc: "Detailed fee structure & guide", href: "/deemed-mbbs" },
  { name: "MBBS in Chhattisgarh", icon: MapPin, color: "bg-orange-500", desc: "Top medical colleges in CG", href: "/mbbs" },
  { name: "MBBS in Madhya Pradesh", icon: MapPin, color: "bg-blue-500", desc: "Admission support in MP", href: "/mbbs" },
  { name: "MBBS in Karnataka", icon: MapPin, color: "bg-emerald-500", desc: "Best colleges in Karnataka", href: "/mbbs" },
  { name: "MBBS in Maharashtra", icon: MapPin, color: "bg-indigo-500", desc: "Medical admission in MH", href: "/mbbs" },
  { name: "MBBS in Uttar Pradesh", icon: MapPin, color: "bg-purple-500", desc: "Top UP medical universities", href: "/mbbs" },
  { name: "Top Colleges in Pune", icon: Building2, color: "bg-amber-600", desc: "Direct admission in Pune", href: "/btech" },
  { name: "Top Colleges in Mumbai", icon: Building2, color: "bg-cyan-600", desc: "Secure seats in Mumbai", href: "/btech" },
  { name: "MBA without Entrance", icon: Briefcase, color: "bg-slate-700", desc: "Direct MBA admission support", href: "/mba" },
  { name: "Top Colleges in Bangalore", icon: School, color: "bg-rose-500", desc: "Admission in IT hub colleges", href: "/btech" },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold text-lg mb-2 uppercase tracking-wider">Our Courses</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
            Direct Admission in <span className="text-brand-light-blue">Top Courses</span>
          </h3>
          <p className="text-gray-600 text-lg">
            We provide admission assistance for a wide range of professional and technical courses in the most reputed colleges across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: i * 0.05 
              }}
            >
              <Link to={course.href}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-gray-50 hover:bg-white cursor-pointer overflow-hidden">
                  <CardContent className="p-8 flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl ${course.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <course.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy group-hover:text-brand-light-blue transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">{course.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
