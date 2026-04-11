import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Sanjivani Career Counselling?",
    answer: "Sanjivani Career Counselling is a premier education consultancy based in Gondia, Maharashtra. We specialize in helping students secure admissions in top colleges across India for courses like MBBS, B.Tech, MBA, and more through expert guidance and direct admission support.",
  },
  {
    question: "How can I get direct admission in MBBS?",
    answer: "We assist students in securing MBBS seats through management quota and institute-level seats in reputed private medical colleges. Our experts guide you through the eligibility criteria, documentation, and the entire admission process to ensure a hassle-free experience.",
  },
  {
    question: "Do you provide admission assistance for B.Tech without JEE?",
    answer: "Yes, we help students get admission into top engineering colleges that offer direct admission based on 12th-grade marks or through management quota, even if they haven't appeared for or scored high in JEE.",
  },
  {
    question: "What is management quota?",
    answer: "Management quota refers to a percentage of seats in private colleges that are filled by the college management directly. These seats are often available for students who may not have secured a high rank in entrance exams but meet the basic eligibility criteria set by the university.",
  },
  {
    question: "Where is your office located?",
    answer: "Our main office is located in Gondia, Maharashtra, near Chitnavis Hospital. However, we provide counselling services to students from all over India through online and telephonic consultations.",
  },
  {
    question: "How do I start the counselling process?",
    answer: "You can start by filling out the enquiry form on our website, calling us at +91 8329095925, or visiting our office. One of our expert counsellors will get in touch with you to understand your career goals and guide you accordingly.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold text-lg mb-2 uppercase tracking-wider">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
            Frequently Asked <span className="text-brand-light-blue">Questions</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services and the admission process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-bold text-brand-navy py-6 hover:no-underline hover:text-brand-light-blue transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
