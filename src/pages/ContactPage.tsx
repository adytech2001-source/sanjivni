import { useEffect } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Sanjivani Career Counselling Gondia | Admission Help";
  }, []);

  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions about admissions? Our expert counsellors are here to help you. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, title: "Call Us", content: "+91 8329095925", sub: "Mon-Sat, 9am - 7pm" },
              { icon: Mail, title: "Email Us", content: "info@sanjivanicounselling.com", sub: "We reply within 24 hours" },
              { icon: MapPin, title: "Visit Us", content: "Gondia, Maharashtra", sub: "Near Chitnavis Hospital" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-light-blue/10 flex items-center justify-center text-brand-light-blue mb-6">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h4>
                <p className="text-brand-navy font-bold text-lg mb-1">{item.content}</p>
                <p className="text-gray-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            <div className="md:w-1/2 p-12 bg-brand-navy text-white">
              <h3 className="text-3xl font-bold mb-6">Send us a Message</h3>
              <p className="text-white/70 mb-8">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="text-brand-light-blue" />
                  <span>Available 10:00 AM - 08:00 PM</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-brand-light-blue" />
                  <span>Instant Support on WhatsApp</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" className="focus:border-brand-light-blue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your Phone" className="focus:border-brand-light-blue" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" className="focus:border-brand-light-blue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] focus:border-brand-light-blue" />
                </div>
                <Button className="w-full bg-brand-navy hover:bg-brand-light-blue hover:text-brand-navy h-12 font-bold text-white transition-colors">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
