import { motion } from "motion/react";

const partners = [
  { name: "University 1", logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200&h=100" },
  { name: "University 2", logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200&h=100" },
  { name: "University 3", logo: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=200&h=100" },
  { name: "University 4", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200&h=100" },
  { name: "University 5", logo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=200&h=100" },
  { name: "University 6", logo: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=200&h=100" },
];

export default function TrustLogos() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">
          Trusted by Top Universities
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {partners.map((p, i) => (
            <motion.img
              key={i}
              src={p.logo}
              alt={p.name}
              className="h-8 md:h-12 w-auto object-contain"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
