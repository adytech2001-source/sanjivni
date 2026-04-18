import { motion } from "motion/react";
import { Megaphone, Phone, Info, Award } from "lucide-react";

export default function NoticeSection() {
  const cutoffData = [
    { category: "UR / EWS", marks: "144", percentile: "50th" },
    { category: "UR / EWS-PWD", marks: "127", percentile: "45th" },
    { category: "OBC / SC / ST", marks: "113", percentile: "40th" },
  ];

  return (
    <section className="py-12 bg-white selection:bg-red-500 selection:text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-red-100 flex flex-col md:flex-row"
        >
          {/* Left Side - Notice Title & Message */}
          <div className="bg-white p-8 md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500 p-3 rounded-2xl text-white shadow-lg animate-pulse">
                <Megaphone size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
                NEET (UG) 2025 <span className="text-red-500">Result Out</span>
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The <span className="font-bold">NEET (UG) 2025 result</span> has been officially declared. Students who have qualified and need guidance for MBBS/BDS admission and counselling can contact us.
            </p>

            <div className="space-y-4">
              <p className="text-brand-navy font-bold flex items-center gap-3">
                <Phone size={20} className="text-red-500" />
                Contact for Guidance:
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+918329095925" 
                  className="bg-brand-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-light-blue hover:text-brand-navy transition-all shadow-md flex items-center gap-2"
                >
                  8329095925
                </a>
                <a 
                  href="tel:+918390029069" 
                  className="bg-white text-brand-navy border-2 border-brand-navy px-6 py-3 rounded-xl font-bold hover:bg-brand-navy hover:text-white transition-all shadow-md flex items-center gap-2"
                >
                  8390029069
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 italic text-gray-400 text-sm font-medium">
              Sanjivani Career Counselling, Gondia
            </div>
          </div>

          {/* Right Side - Cutoff Table */}
          <div className="bg-brand-navy p-8 md:w-2/5 flex flex-col justify-center text-white">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-yellow-400" size={24} />
              <h3 className="text-xl font-bold uppercase tracking-wider">Qualifying Cut-off</h3>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-light-blue text-brand-navy">
                    <th className="p-4 text-left font-bold border-b border-brand-navy/10">Category</th>
                    <th className="p-4 text-center font-bold border-b border-brand-navy/10">Marks</th>
                  </tr>
                </thead>
                <tbody className="bg-brand-navy">
                  {cutoffData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                        idx % 2 === 0 ? "bg-white/5" : ""
                      }`}
                    >
                      <td className="p-4">
                        <div className="font-bold">{row.category}</div>
                        <div className="text-[10px] text-brand-light-blue uppercase font-bold tracking-widest">{row.percentile} Percentile</div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-yellow-400 text-brand-navy px-3 py-1 rounded-lg font-extrabold text-lg">
                          {row.marks}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-start gap-2 bg-white/5 p-4 rounded-xl border border-white/10">
              <Info size={16} className="text-brand-light-blue mt-0.5 flex-shrink-0" />
              <p className="text-[11px] leading-relaxed text-white/60">
                Official marks for NEET 2025. Counselling assistance available for all qualified categories.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
