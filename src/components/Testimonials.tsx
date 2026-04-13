import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "MBBS Student",
    text: "Sanjivani Career Counselling helped me get admission in a top medical college when I was confused about the process. Their guidance is truly expert.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Snehal Deshmukh",
    course: "Medical Aspirant",
    text: "Smooth aur hassle-free experience tha 👍 NEET counselling aur document verification sab easily ho gaya. Highly recommended for medical admission.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Vikram Singh",
    course: "MBBS Candidate",
    text: "Bahut hi helpful team hai 🙌 MBBS admission ke liye proper guidance mila, har step clearly samjhaya. Stress bilkul nahi hua.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Ananya Verma",
    course: "NEET Student",
    text: "Starting me kaafi confusion tha NEET counselling ko lekar, but inhone step-by-step guide kiya. Document verification se lekar college allotment tak full support mila. Medical admission process bahut smooth ho gaya.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rohan Gupta",
    course: "MBBS Student",
    text: "Genuine aur trusted service hai 💯 MBBS admission ke liye best guidance diya. Team ka response fast tha aur document verification bhi quickly complete ho gaya. Overall experience kaafi acha raha.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Megha Agrawal",
    course: "Medical Student",
    text: "Honestly, mujhe medical admission process kaafi complicated lag raha tha, especially NEET counselling aur documents ko lekar. Lekin inki team ne har step pe support diya—Aadhaar, allotment letter, counselling form sab properly verify karwaya. College allotment me bhi correct guidance mila jisse final MBBS admission smoothly ho gaya. Pura process stress-free aur transparent tha.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange-end font-bold text-lg mb-2 uppercase tracking-wider">Testimonials</h2>
          <h3 className="text-4xl font-extrabold text-brand-blue mb-6">
            What Our <span className="text-brand-orange-start">Students Say</span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-brand-blue">Excellent 4.9/5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: i * 0.1 
              }}
            >
              <Card className="h-full border-none bg-gray-50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-brand-orange-start/10 group-hover:text-brand-orange-start/20 transition-colors">
                  <Quote size={60} />
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange-start" 
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-brand-blue">{t.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{t.course}</p>
                    </div>
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
