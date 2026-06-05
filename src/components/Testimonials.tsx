import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Yogesh",
    course: "Medical Aspirant",
    text: "Mujhe bilkul clear idea mil gaya ki kaunsa course choose karna hai.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Mrunali Abhinandan Kukade",
    course: "NEET UG Candidate",
    text: "Confusion bahut tha, par yaha se proper guidance mili.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Mitali Bhavarao Bhatmange",
    course: "MBBS Aspirant",
    text: "Career select karne me bahut help mili, thank you sir.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1643297654416-05795d309062?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Vaishnavi Yogendra Jatare",
    course: "Medical Student",
    text: "Best counseling experience, sab clearly samjhaya gaya.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Drishti Rajendra Bopche",
    course: "MBBS Student",
    text: "College selection me bahut help hui, recommend karungi.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Smruti Rakesh Waghmare",
    course: "Future Doctor",
    text: "Mujhe apna right path mil gaya, thanks a lot.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1631217816660-ad48c9035825?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Shubhangi Prakash Dewkar",
    course: "NEET Candidate",
    text: "Bahut supportive guidance mili yaha se.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bb8c?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Praduman Umesh Borkar",
    course: "Medical Aspirant",
    text: "Sahi direction milne ke baad confidence badh gaya.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Anshika Tembhare",
    course: "MBBS Student",
    text: "Simple aur clear guidance, easily samajh aa gaya.",
    rating: 5,
    image: "https://res.cloudinary.com/dmyryvwos/image/upload/f_auto,q_auto/student_ktssll"
  },
  {
    name: "Yashwardhan Puri",
    course: "Future Professional",
    text: "Career ke liye best decision lene me help mili.",
    rating: 5,
    image: "https://res.cloudinary.com/dmyryvwos/image/upload/v1780498068/YASHWARDHAN_PURI_jsqs99.png"
  },
  {
    name: "Aman Rupesh Ramteke",
    course: "Medical Aspirant",
    text: "Mujhe kaafi clarity mili future ke liye.",
    rating: 5,
    image: "https://res.cloudinary.com/dmyryvwos/image/upload/v1780498069/AMAN_brnmlt.png"
  },
  {
    name: "Riya Yesharam Dhabale",
    course: "NEET Aspirant",
    text: "Friendly aur helpful counseling thi.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Lalita Dalikram Pataihe",
    course: "MBBS Student",
    text: "Bahut acha experience raha, thank you.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1563236710-85f69c5e6f66?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Purva Ramteke",
    course: "MBBS Aspirant",
    text: "Step by step guidance mili, easy ho gaya decide karna.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Revnath Ramteke",
    course: "Medical Student",
    text: "Accurate advice mila, kaafi helpful raha.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Asit Vasantkumar Shahane",
    course: "NEET Candidate",
    text: "Professional guidance aur proper explanation mila.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Yashowardhan Ganesh Puri",
    course: "Career Aspirant",
    text: "Clear roadmap diya gaya career ka.",
    rating: 5,
    image: "https://res.cloudinary.com/dmyryvwos/image/upload/v1780498068/YASHWARDHAN_PURI_jsqs99.png"
  },
  {
    name: "Anshika Yopendrsingh Tembhre",
    course: "MBBS Student",
    text: "Confusion door ho gaya counseling ke baad.",
    rating: 5,
    image: "https://res.cloudinary.com/dmyryvwos/image/upload/f_auto,q_auto/student_ktssll"
  },
  {
    name: "Kushal Purendranath Chakore",
    course: "MBBS Student",
    text: "Bahut hi useful guidance mili yaha se.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=200&h=200&auto=format&fit=crop"
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

        <div className="relative overflow-hidden py-10">
          <div className="flex">
            <motion.div 
              className="flex gap-6 pr-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-[320px] flex-shrink-0">
                  <Card className="h-full border-none bg-gray-50/50 hover:bg-gray-50 transition-colors relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 text-brand-orange-start/10 group-hover:text-brand-orange-start/20 transition-colors">
                      <Quote size={40} />
                    </div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex text-yellow-500 mb-3">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-700 italic mb-6 leading-relaxed text-sm">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <img 
                          src={t.image} 
                          alt={t.name} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-brand-orange-start/30" 
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-bold text-brand-blue text-sm">{t.name}</h4>
                          <p className="text-[10px] text-gray-500 font-medium">{t.course}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
