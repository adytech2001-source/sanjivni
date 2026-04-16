import { motion } from "motion/react";
import { GraduationCap, MapPin, IndianRupee, Search, Info } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

const feeData = [
  { id: 1, name: "People’s Medical Academy, Bhopal", fees: "13,36,000" },
  { id: 2, name: "Sri Aurobindo Medical College, Indore", fees: "12,49,760" },
  { id: 3, name: "R D Gardi Medical College", fees: "8,33,000" },
  { id: 4, name: "Index Medical College, Indore", fees: "13,40,400" },
  { id: 5, name: "LN Medical College, Bhopal", fees: "13,89,600" },
  { id: 6, name: "Chirayu Medical College, Bhopal", fees: "11,41,000" },
  { id: 7, name: "Amaltas Medical College", fees: "10,61,000" },
  { id: 8, name: "Mahaveer Institute of Medical Sciences and Research", fees: "8,33,000" },
  { id: 9, name: "RKDF Medical College and Research Centre, Bhopal", fees: "12,05,000" },
  { id: 10, name: "Sukh Sagar Medical College and Hospital, Jabalpur", fees: "8,33,000" },
];

export default function MPPrivateMBBS() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return feeData.filter(college => 
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Header */}
        <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue/10 border border-brand-light-blue/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
                <MapPin size={16} />
                <span>Madhya Pradesh Admissions 2026</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Private Medical Colleges <br />
                <span className="text-brand-light-blue">Fee Structure</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Detailed tuition fee information for private medical colleges in Madhya Pradesh. Plan your MBBS journey with accurate financial data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Table Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search college name..."
                  className="pl-12 h-12 rounded-xl border-gray-200 focus:border-brand-light-blue focus:ring-brand-light-blue/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm italic">
                <Info size={16} className="text-brand-light-blue" />
                <span>Fees are subject to change by regulatory authorities.</span>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="p-6 font-bold text-brand-navy uppercase tracking-wider text-sm w-20">Sr. No</th>
                      <th className="p-6 font-bold text-brand-navy uppercase tracking-wider text-sm">Name of College</th>
                      <th className="p-6 font-bold text-brand-navy uppercase tracking-wider text-sm text-right">Tuition Fees (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((college, index) => (
                      <motion.tr
                        key={college.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="border-b border-gray-50 hover:bg-brand-light-blue/5 transition-colors group"
                      >
                        <td className="p-6 text-gray-400 font-medium">{college.id}</td>
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-light-blue group-hover:text-white transition-colors">
                              <GraduationCap size={20} />
                            </div>
                            <span className="font-bold text-brand-navy text-lg">{college.name}</span>
                          </div>
                        </td>
                        <td className="p-6 text-right">
                          <div className="inline-flex items-center gap-1 text-brand-light-blue font-extrabold text-xl">
                            <IndianRupee size={18} />
                            <span>{college.fees}</span>
                          </div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Per Annum</p>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredData.length === 0 && (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                    <Search size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">No colleges found</h3>
                  <p className="text-gray-500">Try searching with a different keyword.</p>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-brand-light-blue/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-light-blue/20">
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Need Help with Admissions?</h3>
                <p className="text-brand-navy/70 text-lg">
                  Our expert counsellors can help you secure admission in your dream medical college with 100% transparency and guidance.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <PopupForm 
                  trigger={
                    <Button size="lg" className="bg-brand-navy text-white px-8 font-bold h-14 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform">
                      Get Free Consultation
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" className="border-brand-navy text-brand-navy px-8 font-bold h-14 text-lg rounded-xl hover:bg-brand-navy hover:text-white transition-all">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
