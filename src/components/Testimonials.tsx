import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "MBBS Student",
    text: "Sanjivani Career Counselling helped me get admission in a top medical college when I was confused about the process. Their guidance is truly expert.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Priya Patel",
    course: "MBA Student",
    text: "The direct admission support was seamless. I got into my dream B-school without any hassle. Highly recommended for all students!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Amit Verma",
    course: "B.Tech Student",
    text: "Transparent process and very supportive staff. They helped me choose the best college according to my budget and preferences.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=amit"
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
