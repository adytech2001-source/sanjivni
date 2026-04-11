import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Stethoscope, Briefcase, Gavel, Cpu, FlaskConical, HeartPulse, Microscope, BookOpen } from "lucide-react";

const courses = [
  { name: "MBBS Admission", icon: Stethoscope, color: "bg-red-500" },
  { name: "B.Tech Admission", icon: Cpu, color: "bg-blue-500" },
  { name: "MBA Admission", icon: Briefcase, color: "bg-indigo-500" },
  { name: "Law Admission", icon: Gavel, color: "bg-amber-700" },
  { name: "MCA Admission", icon: BookOpen, color: "bg-emerald-500" },
  { name: "BBA Admission", icon: GraduationCap, color: "bg-purple-500" },
  { name: "Pharmacy Admission", icon: FlaskConical, color: "bg-green-500" },
  { name: "BDS Admission", icon: HeartPulse, color: "bg-pink-500" },
  { name: "Allied Courses", icon: Microscope, color: "bg-orange-500" },
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
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-gray-50 hover:bg-white cursor-pointer overflow-hidden">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${course.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <course.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy group-hover:text-brand-light-blue transition-colors">
                      {course.name}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">Get Direct Admission Support</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
