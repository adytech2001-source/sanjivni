import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, Network } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=800"
                alt="Counselling Session"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 gradient-orange rounded-3xl -z-10 opacity-20 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-brand-orange-start/20 rounded-3xl -rotate-6 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold font-bold text-lg mb-2 uppercase tracking-wider">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              A Name You Can <span className="text-brand-light-blue">Trust</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Sanjivani Career Counselling is a trusted education consultancy in Gondia helping students secure direct admission in top colleges across India through management quota and institute-level seats.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We provide complete guidance, from career counselling to final admission, ensuring a smooth and hassle-free process.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Expert Counselling", desc: "Personalized guidance from industry veterans." },
                { icon: Zap, title: "Fast Admission", desc: "Streamlined process for direct admission support." },
                { icon: Network, title: "Trusted Network", desc: "Tie-ups with 100+ top universities in India." },
                { icon: CheckCircle2, title: "End-to-End Support", desc: "From college selection to final enrollment." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
