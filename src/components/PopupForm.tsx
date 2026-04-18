import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap, Send } from "lucide-react";

interface PopupFormProps {
  trigger?: React.ReactNode;
}

export default function PopupForm({ trigger }: PopupFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    course: "",
    neet: "",
    city: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.course) {
      alert("Please fill in basic details");
      return;
    }

    const message = `Hello, I'm interested in admission.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Course:* ${formData.course}
${formData.course === "mbbs" ? `*NEET Score:* ${formData.neet}` : ""}
*City:* ${formData.city}
(Sent from Sanjivani Career Counselling Website Popup)`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918329095925?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          trigger || (
            <Button className="bg-brand-gold text-brand-navy hover:bg-white font-bold rounded-xl shadow-lg transition-all">
              Enquire Now
            </Button>
          )
        }
      />
      <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl border-none shadow-2xl overflow-y-auto max-h-[90vh]">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-brand-light-blue/10 rounded-2xl flex items-center justify-center text-brand-light-blue mb-4">
            <GraduationCap size={24} />
          </div>
          <DialogTitle className="text-2xl font-extrabold text-brand-navy">Admission Enquiry 2026</DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in your details and our experts will guide you for direct admission.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 py-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="popup-name" className="text-brand-navy font-bold">Student Name</Label>
            <Input 
              id="popup-name" 
              placeholder="Enter full name" 
              className="h-11 border-gray-200 focus:border-brand-light-blue rounded-xl" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="popup-phone" className="text-brand-navy font-bold">Phone Number</Label>
            <Input 
              id="popup-phone" 
              placeholder="Enter mobile number" 
              className="h-11 border-gray-200 focus:border-brand-light-blue rounded-xl" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-course" className="text-brand-navy font-bold">Interested Course</Label>
            <Select onValueChange={(val) => setFormData({...formData, course: val})}>
              <SelectTrigger id="popup-course" className="h-11 border-gray-200 focus:border-brand-light-blue rounded-xl">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-100 rounded-xl">
                <SelectItem value="mbbs">MBBS</SelectItem>
                <SelectItem value="btech">B.Tech</SelectItem>
                <SelectItem value="mba">MBA</SelectItem>
                <SelectItem value="law">Law</SelectItem>
                <SelectItem value="pharmacy">Pharmacy</SelectItem>
                <SelectItem value="other">Other Courses</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.course === "mbbs" && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <Label htmlFor="popup-neet" className="text-brand-navy font-bold">NEET Marks (Expected/Actual)</Label>
              <Input 
                id="popup-neet" 
                type="number" 
                placeholder="Enter NEET score" 
                className="h-11 border-gray-200 focus:border-brand-light-blue rounded-xl" 
                value={formData.neet}
                onChange={(e) => setFormData({...formData, neet: e.target.value})}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="popup-city" className="text-brand-navy font-bold">City/State</Label>
            <Input 
              id="popup-city" 
              placeholder="Enter your city" 
              className="h-11 border-gray-200 focus:border-brand-light-blue rounded-xl" 
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
          </div>

          <Button type="submit" className="w-full bg-brand-navy h-12 text-lg font-bold text-white rounded-xl shadow-lg hover:bg-brand-navy/90 transition-all mt-6 flex items-center justify-center gap-2">
            Submit Details <Send size={18} />
          </Button>
        </form>
        <p className="text-center text-[10px] text-gray-400">
          By submitting, you agree to be contacted by Sanjivani Career Counselling.
        </p>
      </DialogContent>
    </Dialog>
  );
}
