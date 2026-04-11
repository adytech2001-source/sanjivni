import { motion } from "motion/react";
import { Star, Award, MapPin, GraduationCap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const successStories = [
  {
    name: "Shivam Dewangan",
    college: "Chandulal Chandrakar Memorial Government Medical College, Durg",
    course: "MBBS",
    score: 474,
    rank: 13
  },
  {
    name: "Sneha Vinod Singh",
    college: "Shri Shankaracharya IMS Bhilai",
    course: "MBBS",
    score: 446,
    rank: 108
  },
  {
    name: "Himanshi Manoj Gohane",
    college: "Raipur Institute of Medical Science, Raipur",
    course: "MBBS",
    score: 445,
    rank: 118
  },
  {
    name: "Anshuman Panda",
    college: "Shri Shankaracharya IMS Bhilai",
    course: "MBBS",
    score: 439,
    rank: 133
  },
  {
    name: "Akesh Patel",
    college: "Government Dental College Raipur",
    course: "BDS",
    score: 435,
    rank: 151
  },
  {
    name: "Ashmit Jaiswal",
    college: "Raipur Institute of Medical Science Raipur",
    course: "MBBS",
    score: 433,
    rank: 160
  },
  {
    name: "Vaishnavi Vinod Burde",
    college: "Shri Rawatpura Sarkar Institute Of Medical Science And Research Naya Raipur",
    course: "MBBS",
    score: 432,
    rank: 162
  },
  {
    name: "Avishi Mahato",
    college: "Shri Shankaracharya IMS Bhilai",
    course: "MBBS",
    score: 431,
    rank: 171
  },
  {
    name: "Harsh Patle",
    college: "Shri Shankaracharya IMS Bhilai",
    course: "MBBS",
    score: 425,
    rank: 195
  },
  {
    name: "Tanishq Shyamrao Dahake",
    college: "Shri Rawatpura Sarkar Institute Of Medical Science And Research Naya Raipur",
    course: "MBBS",
    score: 420,
    rank: 212
  }
];

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const displayedStories = showAll ? successStories : successStories.slice(0, 6);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold font-bold text-lg mb-2 uppercase tracking-wider">Our Results</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
              Chhattisgarh NEET-UG 2025 <br className="hidden md:block" />
              <span className="text-brand-light-blue">Allotment Success Stories</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We take pride in the success of our students. Here are some of the top allotments secured through our expert counselling guidance.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-light-blue/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <div className="bg-brand-light-blue/10 text-brand-light-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {story.course}
                </div>
              </div>

              <h4 className="text-xl font-bold text-brand-navy mb-6 group-hover:text-brand-light-blue transition-colors relative z-10">{story.name}</h4>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin size={16} />
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">{story.college}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <Trophy size={16} className="text-brand-gold shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold leading-none mb-1">NEET Score</p>
                      <p className="text-brand-navy font-extrabold text-sm leading-none">{story.score}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <Award size={16} className="text-brand-gold shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold leading-none mb-1">State Rank</p>
                      <p className="text-brand-navy font-extrabold text-sm leading-none">{story.rank}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified Allotment</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Confirmed Admission" />
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-brand-navy text-white px-10 font-bold h-14 text-lg rounded-xl shadow-xl hover:scale-105 transition-transform border-2 border-brand-light-blue/20"
            >
              View More Results
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
