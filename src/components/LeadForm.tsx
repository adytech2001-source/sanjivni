import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "motion/react";

export default function LeadForm() {
  return (
    <section className="py-24 bg-white" id="apply">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-brand-navy rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 text-white flex flex-col justify-center">
            <h3 className="text-4xl font-extrabold mb-6">Take the First Step Towards Your <span className="text-brand-light-blue">Dream Career</span></h3>
            <p className="text-white/70 text-lg mb-8">
              Fill out the form and our expert counsellors will get in touch with you within 24 hours to guide you through the admission process.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-light-blue">
                  <span className="font-bold">1</span>
                </div>
                <p className="font-medium">Fill the Enquiry Form</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-light-blue">
                  <span className="font-bold">2</span>
                </div>
                <p className="font-medium">Get a Call from Experts</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-light-blue">
                  <span className="font-bold">3</span>
                </div>
                <p className="font-medium">Secure Your Admission</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-12">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-brand-navy font-bold">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" className="h-12 border-gray-200 focus:border-brand-light-blue" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-brand-navy font-bold">Phone Number</Label>
                <Input id="phone" placeholder="Enter your mobile number" className="h-12 border-gray-200 focus:border-brand-light-blue" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="course" className="text-brand-navy font-bold">Interested Course</Label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-brand-light-blue">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mbbs">MBBS</SelectItem>
                    <SelectItem value="btech">B.Tech</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="law">Law</SelectItem>
                    <SelectItem value="mca">MCA</SelectItem>
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="pharmacy">Pharmacy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full bg-brand-navy h-14 text-lg font-bold text-white rounded-xl shadow-lg shadow-brand-light-blue/20 hover:scale-[1.02] transition-transform">
                Submit Enquiry
              </Button>
              
              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our terms and conditions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
