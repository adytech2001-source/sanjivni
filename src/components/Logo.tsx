import { motion } from "motion/react";

export default function Logo({ isScrolled, isHome }: { isScrolled: boolean; isHome: boolean }) {
  const isDark = isScrolled || !isHome;
  
  // TO USER: Replace this URL with your actual PNG logo URL
  const logoUrl = "https://res.cloudinary.com/dmyryvwos/image/upload/f_auto,q_auto/ttt_nrt5h0"; 

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-[60px] h-[60px] flex items-center justify-center">
        <img 
          src={logoUrl} 
          alt="Sanjivani Logo" 
          className="w-full h-full object-contain filter drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-xl leading-tight tracking-tight ${isDark ? "text-brand-navy" : "text-white"}`}>
          SANJIVANI
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled || !isHome ? "text-brand-navy/70" : "text-white/80"}`}>
          Career Counselling
        </span>
      </div>
    </div>
  );
}
