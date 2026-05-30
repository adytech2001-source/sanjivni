import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  UserCheck, 
  TrendingUp, 
  Building2, 
  ClipboardCheck, 
  Users, 
  MapPin, 
  AlertCircle,
  Award,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Interface for interactive map markers
interface MapMarker {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  type: "college" | "city";
  name: string;
  details: string;
}

export default function NeetUgGuidance() {
  const [activeMarker, setActiveMarker] = useState<MapMarker | null>(null);

  // Guidance features matching the image precisely
  const guidanceFeatures = [
    {
      id: "expert",
      icon: UserCheck,
      title: "Expert Counseling",
      desc: "One-on-one personal career guidance with professional counsellors.",
    },
    {
      id: "rank",
      icon: TrendingUp,
      title: "Personalized Rank Analysis",
      desc: "Detailed evaluation of your NEET score to find the best possible college fit.",
    },
    {
      id: "college",
      icon: Building2,
      title: "College Selection Assistance",
      desc: "Handpicked choices based on your preferences, budget, and ranking trends.",
    },
    {
      id: "choice",
      icon: ClipboardCheck,
      title: "Registration & Choice Filling",
      desc: "End-to-end support for error-free registration and smart choice locking.",
    },
    {
      id: "quota",
      icon: Users,
      title: "Management / NRI Quota Support",
      desc: "Direct guidance for secure seat allocation through institutional process.",
    },
  ];

  // Starting packages data
  const packages = [
    { course: "MBBS", price: "₹75 Lakhs*", color: "bg-red-500" },
    { course: "BDS", price: "₹12 Lakhs*", color: "bg-blue-900" },
    { course: "BAMS", price: "₹12 Lakhs*", color: "bg-red-500" },
    { course: "BHMS", price: "₹10 Lakhs*", color: "bg-blue-900" },
  ];

  // Representative map pins based on real Indian locations in the image
  const mapMarkers: MapMarker[] = [
    { id: "delhi", x: 42, y: 35, type: "city", name: "New Delhi", details: "National Capital Region Counselling Hub" },
    { id: "mumbai", x: 26, y: 65, type: "city", name: "Mumbai", details: "Top-Tier Maharashtra Deemed & Govt Colleges" },
    { id: "indore", x: 44, y: 55, type: "city", name: "Indore", details: "Major Medical College Hub in MP" },
    { id: "raipur", x: 58, y: 58, type: "city", name: "Raipur", details: "Chhattisgarh Counselling & Medical Core" },
    { id: "gondia", x: 50, y: 61, type: "city", name: "Gondia", details: "Sanjivani Career Counseling Head Office" },
    { id: "bangalore", x: 38, y: 84, type: "city", name: "Bangalore", details: "Karnataka Private & Deemed University Hub" },
    { id: "chennai", x: 47, y: 88, type: "city", name: "Chennai", details: "Renowned Medical Hub of South India" },
    { id: "pune", x: 29, y: 70, type: "college", name: "Pune Institutes", details: "Top Engineering-turned-Medical & Deemed Colleges" },
    { id: "jabalpur", x: 51, y: 53, type: "college", name: "Madhya Pradesh Core", details: "Recognized State Universities" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden" id="neet-ug-guidance">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            NEET UG
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#D32F2F] text-white font-bold px-6 py-2.5 rounded-full shadow-lg text-sm md:text-lg tracking-wide uppercase"
          >
            Management & NRI Quota Admission Guidance
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
          
          {/* Left Column: Guidance Cards & Starting Packages */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-6 border-b pb-3 border-gray-100 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-brand-navy rounded-full inline-block"></span>
                Our Specialized Services
              </h3>
              
              <div className="flex flex-col gap-6">
                {guidanceFeatures.map((feat, idx) => (
                  <div key={feat.id} className="flex gap-4 group items-start">
                    <div className="w-11 h-11 flex-shrink-0 rounded-full bg-brand-navy flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                      <feat.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-navy transition-colors text-base md:text-md">
                        {feat.title}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premium Starts From Pricing Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Overlapping Absolute Header Title exactly like image */}
              <div className="absolute -top-4 left-6 z-10 bg-brand-navy text-white text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-2 rounded-lg shadow-md">
                PACKAGES STARTS FROM
              </div>

              <Card className="border border-gray-200/80 bg-white shadow-xl rounded-3xl pt-8 pb-6 px-6 md:px-8 overflow-hidden">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {packages.map((pkg, i) => (
                      <div key={pkg.course} className="py-4 flex items-center justify-between text-base font-semibold text-gray-900 first:pt-2 last:pb-2">
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${pkg.color} animate-pulse`}></span>
                          <span className="text-lg font-bold tracking-tight text-brand-navy">{pkg.course}</span>
                        </div>
                        <div className="text-xl md:text-2xl font-black text-brand-navy tracking-tight">
                          {pkg.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                    <AlertCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>*Packages may vary depending on rank and college availability.</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column: Interactive map component */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100 relative">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">National All India Reach</h3>
              <p className="text-sm text-gray-500">Connecting you with premium and deemed medical colleges across prime academic hubs.</p>
            </div>

            {/* India Map Canvas */}
            <div className="relative w-full aspect-[4/3] max-w-[580px] mx-auto bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden group/map flex items-center justify-center py-6">
              
              {/* Elegant Simplified Abstract India Map SVG shape */}
              <svg 
                viewBox="0 0 200 230" 
                className="w-full h-full max-h-[420px] text-gray-200/90 fill-current opacity-70 transition-opacity hover:opacity-85"
                aria-hidden="true"
              >
                {/* Clean Simplified Outline path of the Indian Peninsula + North */}
                <path 
                  d="M93.3,13.3 C98,15 102,10 105,15 C110,13 112,8 115,12 C118,15 119,25 116,28 C113,30 115,35 113,38 C110,40 108,45 109,51 C110,54 115,53 118,50 C121,48 125,48 128,52 C131,55 135,53 138,50 C140,48 141,40 145,42 C150,45 148,51 143,55 C140,58 135,60 132,63 C129,65 125,64 121,68 C118,72 120,77 125,75 C130,73 135,78 139,81 C144,83 148,80 152,82 C156,84 159,85 162,90 C165,94 162,98 158,99 C154,100 150,98 148,102 C145,105 142,109 138,111 C135,113 130,111 127,114 C125,116 128,120 126,124 C124,127 120,128 116,131 C114,133 115,138 111,141 C108,143 103,141 100,144 C98,146 102,150 100,154 C98,156 94,158 91,162 C88,165 90,170 87,175 C85,178 81,180 78,185 C75,188 77,192 74,196 C72,200 68,205 65,210 C62,214 59,219 54,222 C52,224 49,218 48,214 C46,210 49,206 50,202 C52,198 54,193 54,188 C54,184 52,180 50,175 C48,171 45,168 44,163 C43,159 41,154 41,150 C41,145 43,141 42,136 C41,132 37,129 35,124 C33,120 30,116 29,111 C28,107 31,102 30,98 C29,94 25,92 23,88 C21,84 22,80 20,76 C18,72 15,69 13,65 C11,61 14,57 15,53 C16,50 13,46 11,42 C9,39 12,35 15,37 C18,39 21,34 25,36 C29,38 33,35 37,39 C41,41 40,46 44,48 C47,50 51,46 54,43 C57,40 59,35 63,33 C67,31 72,34 76,32 C80,30 81,25 84,21 C86,18 89,14 93.3,13.3 Z" 
                  className="fill-gray-100 stroke-gray-200/80 stroke-[1.5]"
                />
              </svg>

              {/* Glowing Interactive Pulsating Markers on the map */}
              {mapMarkers.map((marker) => {
                const isActive = activeMarker?.id === marker.id;
                const isCollege = marker.type === "college";

                return (
                  <div
                    key={marker.id}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
                    onMouseEnter={() => setActiveMarker(marker)}
                    onMouseLeave={() => setActiveMarker(null)}
                    onClick={() => setActiveMarker(isActive ? null : marker)}
                  >
                    {/* Ring animation */}
                    <span className={`absolute inline-flex h-6 w-6 rounded-full -left-1 -top-1 opacity-75 animate-ping ${
                      isCollege ? "bg-blue-900/40" : "bg-red-500/40"
                    }`} />
                    
                    {/* Real MapPin Marker logo */}
                    <div className={`p-1.5 rounded-full shadow-lg border transition-transform duration-200 relative ${
                      isActive ? "scale-125 z-40" : "scale-100 hover:scale-110"
                    } ${
                      isCollege 
                        ? "bg-blue-900 text-white border-blue-400" 
                        : "bg-red-600 text-white border-red-300"
                    }`}>
                      <MapPin size={14} className="fill-current" />
                    </div>

                    {/* Highly responsive custom popover positioned perfectly */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 bg-brand-navy text-white text-xs rounded-xl p-3 shadow-2xl z-50 pointer-events-none"
                        >
                          <div className="absolute w-2 h-2 bg-brand-navy rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2"></div>
                          <p className="font-bold border-b border-white/20 pb-1 mb-1 flex items-center gap-1">
                            <span className={`w-2 h-2 rounded-full inline-block ${isCollege ? "bg-blue-400" : "bg-red-400"}`}></span>
                            {marker.name}
                          </p>
                          <p className="text-[10px] text-white/80 leading-normal">{marker.details}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Map Keys/Legend inside component exactly like the image labels */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-gray-200/60 shadow-lg text-xs flex flex-col gap-2 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-900 flex items-center justify-center text-white p-0.5">
                    <MapPin size={8} />
                  </div>
                  <span className="font-semibold text-gray-800">Top Medical Colleges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600 flex items-center justify-center text-white p-0.5">
                    <MapPin size={8} />
                  </div>
                  <span className="font-semibold text-gray-800">Major Cities</span>
                </div>
              </div>
            </div>

            {/* Small instructive banner */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Hover / Tap markers to explore counseling college insights on map.</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner Row exactly like footers of the image card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-gray-100 shadow-xl rounded-[2.5rem] p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Value 1 */}
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-brand-navy shadow-inner flex-shrink-0">
                <Award size={26} className="text-brand-navy" />
              </div>
              <div>
                <h4 className="font-black text-brand-navy text-xl leading-tight">Lowest Packages</h4>
                <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-0.5">In Medical Streams</p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-8 justify-center">
              <div className="w-14 h-14 rounded-2xl bg-[#D32F2F]/10 flex items-center justify-center text-[#D32F2F] shadow-inner flex-shrink-0">
                <Users size={26} />
              </div>
              <div>
                <h4 className="font-black text-[#D32F2F] text-xl leading-tight">10,000+ Students</h4>
                <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-0.5">Successfully Counseled</p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-8 justify-center md:justify-end">
              <div className="w-14 h-14 rounded-2xl bg-blue-900/10 flex items-center justify-center text-blue-900 shadow-inner flex-shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="font-black text-blue-900 text-xl leading-tight">Trusted by Parents</h4>
                <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-0.5">Across India Status</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
