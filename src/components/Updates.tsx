import { motion } from "motion/react";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const updates = [
  { date: "12 May", title: "NEET UG Admission Started", category: "Medical" },
  { date: "24 Nov", title: "MBA Admission Open 2026", category: "Management" },
  { date: "07 Nov", title: "B.Tech Direct Admission in Top Colleges", category: "Engineering" },
  { date: "15 Oct", title: "Pharmacy Admission Process Started", category: "Medical" },
];

export default function Updates() {
  return (
    <section id="updates" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-brand-orange-end font-bold text-lg mb-2 uppercase tracking-wider">Why Choose Us</h2>
            <h3 className="text-4xl font-extrabold text-brand-blue mb-6 leading-tight">
              The Best Support for Your <span className="text-brand-orange-start">Career</span>
            </h3>
            <div className="space-y-4 mb-8">
              {[
                "Expert Career Guidance",
                "Best College Selection",
                "Direct Admission Support",
                "End-to-End Assistance",
                "100% Transparent Process",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange-start flex items-center justify-center text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-brand-blue">Important Updates</h3>
              <button className="text-brand-orange-end font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {updates.map((update, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    delay: i * 0.1 
                  }}
                >
                  <Card className="hover:shadow-xl transition-all border-none group cursor-pointer">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-brand-blue text-white flex flex-col items-center justify-center">
                        <span className="text-lg font-bold leading-none">{update.date.split(' ')[0]}</span>
                        <span className="text-[10px] uppercase font-bold">{update.date.split(' ')[1]}</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-brand-orange-start/10 text-brand-orange-end border-none">
                          {update.category}
                        </Badge>
                        <h4 className="font-bold text-brand-blue group-hover:text-brand-orange-end transition-colors line-clamp-2">
                          {update.title}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
