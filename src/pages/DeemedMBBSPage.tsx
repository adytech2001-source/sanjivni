import { useEffect } from "react";
import { motion } from "motion/react";
import { Stethoscope, CheckCircle2, BookOpen, GraduationCap, Award, HeartPulse, MapPin, Info, Table as TableIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

const feeStructure = [
  { state: "Andhra Pradesh", college: "Gitam Inst. of Medical Sci. & Research- Visakhapatnam", estd: "2015", intake: "150", fee: "25,37,000 (For 4.5 Year)", nri: "45,000 USD (For 4.5 Year)" },
  { state: "Delhi", college: "Hamdard Institute of Medical Sciences & Research, New Delhi", estd: "2012", intake: "150", fee: "16,00,000 (4.5 year)", nri: "45,000 USD (4.5 Year)" },
  { state: "Gujarat", college: "SBKS Medical Institute & Research Centre, Vadodara", estd: "2002", intake: "250", fee: "18,75,000 (4.5 year)", nri: "50770 USD" },
  { state: "Haryana", college: "Maharshi Markandeshwar Institute of Medical Sciences & Research, Mullana", estd: "2003", intake: "150", fee: "17,00,000 (4.5 Year)", nri: "140000 USD" },
  { state: "Jharkhand", college: "Manipal Tata Medical college, Jamshedpur", estd: "2020", intake: "150", fee: "17,80,000 (4 Year)", nri: "NO NRI Seat" },
  { state: "Karnataka", college: "B.L.D.E. University, Bijapur", estd: "1986", intake: "200", fee: "18,00,000 (4.5 Year)", nri: "-" },
  { state: "Karnataka", college: "Jawaharlal Nehru Medical College, Belgaum", estd: "1963", intake: "200", fee: "18,25,000 (4.5 Year)", nri: "39650 USD" },
  { state: "Karnataka", college: "JGMM Medical College- Hubbali", estd: "2021", intake: "150", fee: "16,35,000 (4.5 Year)", nri: "-" },
  { state: "Karnataka", college: "JSS Medical college, Mysore", estd: "1984", intake: "250", fee: "18,50,000 (4.5 Year)", nri: "54000 USD" },
  { state: "Karnataka", college: "Kasturba Medical College, Mangalore", estd: "1955", intake: "250", fee: "19,57,000 (4 Year)", nri: "37,100 USD (4 Year)" },
  { state: "Karnataka", college: "Kasturba Medical College, Manipal", estd: "1953", intake: "250", fee: "19,57,000 (4 Year)", nri: "49,400 USD (4 Year)" },
  { state: "Karnataka", college: "K S Hegde Medical Academy, Mangalore", estd: "1999", intake: "150", fee: "17,50,000 (4.5 Year)", nri: "28 Lakh INR" },
  { state: "Karnataka", college: "Raja Rajeshwari Medical College & Hospital", estd: "2005", intake: "250", fee: "23,00,000 (4.5 Year)", nri: "-" },
  { state: "Karnataka", college: "Sri Devaraj URS Medical College, Kolar", estd: "1986", intake: "150", fee: "17,60,000 (4.5 Year)", nri: "42000 USD" },
  { state: "Karnataka", college: "Sri Siddhartha Academy Higher Education", estd: "2019", intake: "150", fee: "18,74,000 (4.5 Year)", nri: "-" },
  { state: "Karnataka", college: "Sri Siddhartha Medical College, Tumkur", estd: "1988", intake: "150", fee: "18,74,000 (4.5 Year)", nri: "50000 USD" },
  { state: "Karnataka", college: "Yenepoya Medical College, Mangalore", estd: "1999", intake: "150", fee: "18,50,000 (4.5 Year)", nri: "42000 USD" },
  { state: "Kerala", college: "Amrita School of Medicine, Kochi", estd: "2000", intake: "150", fee: "25,00,000 (5 Year)", nri: "50,000 USD" },
  { state: "Maharashtra", college: "Bharati Vidyapeeth Deemed University, Sangli", estd: "2005", intake: "150", fee: "20,02,700 (4.5 Year)", nri: "60000 USD" },
  { state: "Maharashtra", college: "Bharati Vidyapeeth University, Pune", estd: "1989", intake: "150", fee: "21,33,495 (4.5 Year)", nri: "60000 USD" },
  { state: "Maharashtra", college: "Dr. D Y Patil Medical College, Kolhapur", estd: "1989", intake: "150", fee: "20,60,000 (4.5 Year)", nri: "45000 USD" },
  { state: "Maharashtra", college: "Jawaharlal Nehru Medical College, Wardha", estd: "1990", intake: "250", fee: "22,25,000 (4.5 Year)", nri: "48375 USD" },
  { state: "Maharashtra", college: "Krishna Institute of Medical Sciences, Karad", estd: "1984", intake: "200", fee: "22,50,000 (4.5 Year)", nri: "59000 USD" },
  { state: "Maharashtra", college: "Symbiosis Medical College for Women, Pune", estd: "2020", intake: "150", fee: "10,00,000 (4.5 Year)", nri: "-" },
  { state: "Maharashtra", college: "MGM Medical College, Aurangabad", estd: "1989", intake: "150", fee: "20,00,000 (4.5 Year)", nri: "60000 USD" },
  { state: "Maharashtra", college: "MGM Medical College, Navi Mumbai", estd: "1985", intake: "150", fee: "20,00,000 (4.5 Year)", nri: "60000 USD" },
  { state: "Maharashtra", college: "Dr. D Y Patil Medical College, Pimpri, Pune", estd: "1995", intake: "250", fee: "25,00,000 (5 Year)", nri: "-" },
  { state: "Maharashtra", college: "Dr. D Y Patil Medical College, Navi Mumbai", estd: "1989", intake: "250", fee: "26,00,000 (4.5 Year)", nri: "41,18,700 INR" },
  { state: "Maharashtra", college: "Rural Medical College, Loni", estd: "1984", intake: "200", fee: "16,25,000 (4.5 Year)", nri: "57000 USD" },
  { state: "Maharashtra", college: "Datta Meghe Instt. of Medical Sciences, Nagpur", estd: "2020", intake: "150", fee: "22,25,000 (4.5 Year)", nri: "-" },
  { state: "Odisha", college: "Institute of Medical Sciences & SUM Hospital, Bhubaneswar", estd: "2007", intake: "250", fee: "19,60,000 (4.5 Year)", nri: "45000 USD" },
  { state: "Odisha", college: "Kalinga Institute of Medical Sciences, Bhubaneswar", estd: "2007", intake: "250", fee: "18,50,000 (4.5 Year)", nri: "50000 USD" },
  { state: "Pondicherry", college: "Aarpaddai Veedu Medical College", estd: "1999", intake: "150", fee: "19,50,000 (5 Year)", nri: "175000 USD" },
  { state: "Pondicherry", college: "Mahatma Gandhi Medical College & Research Institute", estd: "2002", intake: "250", fee: "22,00,000 (5 Year)", nri: "45000 USD" },
  { state: "Pondicherry", college: "Sri Lakshmi Narayana Institute of Medical Sciences", estd: "2006", intake: "250", fee: "22,00,000 (4.5 Year)", nri: "43000 USD" },
  { state: "Pondicherry", college: "Vinayaka Missions Medical College, Karaikal", estd: "1997", intake: "150", fee: "18,50,000 (5 Year)", nri: "45000 USD" },
  { state: "Tamil Nadu", college: "ACS Medical College & Hospital, Chennai", estd: "2008", intake: "150", fee: "23,00,000 (4.5 Year)", nri: "45000 USD" },
  { state: "Tamil Nadu", college: "Chettinad Hospital & Research Institute", estd: "2006", intake: "150", fee: "24,50,000 (5 Year)", nri: "50000 USD" },
  { state: "Tamil Nadu", college: "Meenakshi Medical College & Research Institute", estd: "2003", intake: "150", fee: "22,50,000 (4.5 Year)", nri: "45000 USD" },
  { state: "Tamil Nadu", college: "Saveetha Medical College & Hospital", estd: "2008", intake: "150", fee: "24,75,000 (5 Year)", nri: "50000 USD" },
  { state: "Tamil Nadu", college: "Shri Satya Sai Medical College & Research Institute", estd: "2008", intake: "150", fee: "20,00,000 (5 Year)", nri: "42500 USD" },
  { state: "Tamil Nadu", college: "Sree Balaji Medical College & Hospital, Chennai", estd: "2003", intake: "250", fee: "25,00,000 (4.5 Year)", nri: "60000 USD" },
  { state: "Tamil Nadu", college: "Sri Ramachandra Medical College & Research Institute", estd: "1985", intake: "250", fee: "25,00,000 (5 Year)", nri: "220000 USD" },
  { state: "Tamil Nadu", college: "SRM Medical Hospital & Research Centre, Chennai", estd: "2005", intake: "150", fee: "22,50,000", nri: "47500 USD" },
  { state: "Tamil Nadu", college: "Vinayaka Missions Kirupananda Variyar Medical College, Salem", estd: "2015", intake: "100", fee: "20,00,000 (5 Year)", nri: "45000 USD" },
  { state: "Tamil Nadu", college: "Bhaarat Medical College, Chennai", estd: "2020", intake: "150", fee: "23,00,000 (4.5 Year)", nri: "-" },
  { state: "Tamil Nadu", college: "VELS Medical College- Tiruvallur", estd: "2021", intake: "150", fee: "21,00,000 (5 Year)", nri: "-" },
  { state: "Tamil Nadu", college: "Sri Lalithambigal Medical College- Periyar", estd: "2020", intake: "150", fee: "19,00,000 (4.5 Year)", nri: "-" },
  { state: "Uttar Pradesh", college: "Santosh Medical College & Hospital, Ghaziabad", estd: "1996", intake: "150", fee: "24,00,000 (4.5 Year)", nri: "-" },
];

// Page for Deemed University MBBS Admission
export default function DeemedMBBSPage() {
  useEffect(() => {
    document.title = "Deemed University For MBBS Admission 2024-25 | Sanjivani Counselling";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider"
            >
              <Stethoscope size={18} />
              <span>Medical Admission Guide 2024</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Deemed University <br />
              <span className="text-brand-light-blue">For MBBS Admission</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8 max-w-2xl"
            >
              Complete guide to MBBS admission in India's top Deemed Universities. Get detailed fee structure, eligibility, and admission process.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-brand-light-blue text-brand-navy hover:bg-white px-8 font-bold h-14 text-lg rounded-xl shadow-lg shadow-brand-light-blue/20">
                Enquire Now
              </Button>
              <Button size="lg" variant="outline" className="border-[#264666] text-[#47bbd6] hover:bg-white/10 px-8 font-bold h-14 text-lg rounded-xl">
                View Fee Structure
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200" 
            alt="Medical Education" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Embark on Your Journey in Medicine</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Are you a recent high school graduate, uncertain about your path in the medical field? Fear not, for we are here to guide you towards your dream career. Embarking on a journey in medicine demands dedication and passion, promising a rewarding and esteemed professional future.
                </p>
                <p>
                  If you possess a strong understanding of physics, chemistry, and biology, then a medical college may be the perfect fit for you. Before delving into preparations, it's crucial to determine your desired specialization within the vast realm of medical education, whether it be MBBS, BDS, Veterinary Sciences, or others.
                </p>
                <p>
                  For those aspiring to pursue MBBS, clearing the entrance exam is the initial step. There are three primary entrance exams: NEET, AIIMS, and JIPMER.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/10 text-center">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-xl flex items-center justify-center text-brand-light-blue mx-auto mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-brand-navy text-xl mb-2">NEET</h4>
                <p className="text-gray-500 text-sm">Primary Gateway</p>
              </div>
              <div className="p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/10 text-center">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-xl flex items-center justify-center text-brand-light-blue mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-brand-navy text-xl mb-2">AIIMS</h4>
                <p className="text-gray-500 text-sm">Prestigious Institution</p>
              </div>
              <div className="p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/10 text-center">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-xl flex items-center justify-center text-brand-light-blue mx-auto mb-4">
                  <GraduationCap size={24} />
                </div>
                <h4 className="font-bold text-brand-navy text-xl mb-2">JIPMER</h4>
                <p className="text-gray-500 text-sm">Tailored Entrance</p>
              </div>
              <div className="p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/10 text-center">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-xl flex items-center justify-center text-brand-light-blue mx-auto mb-4">
                  <HeartPulse size={24} />
                </div>
                <h4 className="font-bold text-brand-navy text-xl mb-2">Direct</h4>
                <p className="text-gray-500 text-sm">Management Quota</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages & Skills */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-brand-light-blue" />
                Advantages of MBBS in India
              </h3>
              <ul className="space-y-4">
                {[
                  "Enrollment in MCI-approved colleges.",
                  "Admission through NEET entrance test, ensuring quality education.",
                  "Eligibility to engage with patients during internships.",
                  "No language barrier.",
                  "No food-related challenges.",
                  "Exemption from screening tests for practicing medicine in India."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-light-blue mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                <BookOpen className="text-brand-light-blue" />
                Basic Subjects & Skills Required
              </h3>
              <div className="mb-6">
                <p className="text-brand-navy font-bold mb-3">Core Subjects:</p>
                <div className="flex flex-wrap gap-2">
                  {["Physiology", "Biochemistry", "Microbiology", "Anatomy", "Pharmacology", "Pathology"].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-brand-navy/5 text-brand-navy rounded-full text-sm font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-brand-navy font-bold mb-3">Essential Skills:</p>
                <ul className="grid grid-cols-2 gap-3">
                  {["Responsible attitude", "Patience & Compassion", "Mental alertness", "Teamwork", "Good Stamina", "Constant updating"].map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1 h-1 rounded-full bg-brand-light-blue" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility & Exams */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-navy mb-8">Eligibility Criteria</h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">Education</h4>
                    <p className="text-gray-600 text-sm">Cleared 10+2 examination with Physics, Chemistry, and Biology.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">Minimum Marks</h4>
                    <p className="text-gray-600 text-sm">Minimum of 50% marks are required for admission to the MBBS course.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">Age Limit</h4>
                    <p className="text-gray-600 text-sm">The student's age should be between 17 years to 25 years.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-navy mb-8">Entrance Exams</h3>
              <div className="space-y-6">
                <div className="p-6 border-l-4 border-brand-light-blue bg-brand-navy/5 rounded-r-2xl">
                  <h4 className="font-bold text-brand-navy text-xl mb-2">NEET EXAM</h4>
                  <p className="text-gray-600 text-sm mb-3">National-level entrance exam for state and central colleges. Facilitates direct MBBS admission 2024.</p>
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <MapPin size={14} className="text-brand-light-blue" />
                    <span>Exam Date: May 5, 2024</span>
                  </div>
                </div>
                <div className="p-6 border-l-4 border-brand-gold bg-brand-navy/5 rounded-r-2xl">
                  <h4 className="font-bold text-brand-navy text-xl mb-2">AIIMS EXAM</h4>
                  <p className="text-gray-600 text-sm mb-3">National-level entrance exam for prestigious AIIMS institutions across India.</p>
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <MapPin size={14} className="text-brand-gold" />
                    <span>Exam Date: May 25-26, 2024</span>
                  </div>
                </div>
                <div className="p-6 border-l-4 border-brand-navy bg-brand-navy/5 rounded-r-2xl">
                  <h4 className="font-bold text-brand-navy text-xl mb-2">JIPMER</h4>
                  <p className="text-gray-600 text-sm mb-3">Entrance exam for Jawaharlal Institute of Postgraduate Medical Education & Research.</p>
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <MapPin size={14} className="text-brand-navy" />
                    <span>Exam Date: July 2, 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure Table */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-sm mb-4 uppercase tracking-wider"
            >
              <TableIcon size={16} className="text-brand-light-blue" />
              <span>Fee Structure 2024-25</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6">Deemed Colleges <span className="text-brand-light-blue">MBBS Fee Structure</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Detailed information about annual intake, management quota fees, and NRI quota fees for top deemed medical colleges.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="p-6 font-bold text-sm uppercase tracking-wider border-r border-white/10">State</th>
                    <th className="p-6 font-bold text-sm uppercase tracking-wider border-r border-white/10">College Name</th>
                    <th className="p-6 font-bold text-sm uppercase tracking-wider border-r border-white/10 text-center">Estd</th>
                    <th className="p-6 font-bold text-sm uppercase tracking-wider border-r border-white/10 text-center">Intake</th>
                    <th className="p-6 font-bold text-sm uppercase tracking-wider border-r border-white/10">Management Fee (Yearly)</th>
                    <th className="p-6 font-bold text-sm uppercase tracking-wider">NRI Fee (Yearly)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feeStructure.map((item, i) => (
                    <tr key={i} className="hover:bg-brand-navy/5 transition-colors group">
                      <td className="p-6 text-brand-navy font-bold border-r border-gray-50">{item.state}</td>
                      <td className="p-6 text-gray-700 font-medium border-r border-gray-50">{item.college}</td>
                      <td className="p-6 text-gray-500 text-center border-r border-gray-50">{item.estd}</td>
                      <td className="p-6 text-gray-500 text-center border-r border-gray-50">
                        <span className="px-3 py-1 bg-brand-light-blue/10 text-brand-light-blue rounded-full font-bold text-xs">{item.intake}</span>
                      </td>
                      <td className="p-6 text-brand-navy font-bold border-r border-gray-50">{item.fee}</td>
                      <td className="p-6 text-gray-500 italic text-sm">{item.nri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-light-blue">
                  <Info size={24} />
                </div>
                <div>
                  <p className="font-bold text-xl">8850 Total Seats</p>
                  <p className="text-white/60 text-sm">Available in Deemed Medical Colleges across India</p>
                </div>
              </div>
              <Button size="lg" className="bg-brand-light-blue text-brand-navy hover:bg-white px-10 font-bold h-14 text-lg rounded-xl">
                Get Admission Assistance
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
}
