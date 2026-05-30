import { motion } from "motion/react";
import Counter from "./ui/Counter";

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Students Admitted", value: 1000, suffix: "+" },
  { label: "Tie-ups in India", value: 25, suffix: "+" },
  { label: "Colleges", value: 100, suffix: "+" },
  { label: "Courses", value: 20, suffix: "+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-brand-light-blue mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/70 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
