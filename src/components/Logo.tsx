import { motion } from "motion/react";

export default function Logo({ isScrolled, isHome }: { isScrolled: boolean; isHome: boolean }) {
  const primaryColor = isScrolled || !isHome ? "#0C162D" : "#FFFFFF";
  const accentColor = "#89CFF0";
  const goldColor = "#FFD700";

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Shield Shape */}
          <path
            d="M50 5L15 20V45C15 65 30 85 50 95C70 85 85 65 85 45V20L50 5Z"
            fill={isScrolled || !isHome ? "#0C162D" : "rgba(255,255,255,0.1)"}
            stroke={accentColor}
            strokeWidth="4"
          />
          
          {/* Star */}
          <path
            d="M50 15L53 22H60L54 26L56 33L50 29L44 33L46 26L40 22H47L50 15Z"
            fill={goldColor}
          />

          {/* Graduation Cap */}
          <path
            d="M30 40L50 30L70 40L50 50L30 40Z"
            fill={accentColor}
          />
          <path
            d="M40 45V55C40 55 45 58 50 58C55 58 60 55 60 55V45"
            stroke={accentColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M70 40V50"
            stroke={accentColor}
            strokeWidth="2"
          />

          {/* Open Book */}
          <path
            d="M35 75C35 75 42 70 50 70C58 70 65 75 65 75V65C65 65 58 60 50 60C42 60 35 65 35 65V75Z"
            fill="white"
          />
          <path
            d="M50 60V70"
            stroke={isScrolled || !isHome ? "#0C162D" : "#89CFF0"}
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-xl leading-tight tracking-tight ${isScrolled || !isHome ? "text-brand-navy" : "text-white"}`}>
          SANJIVANI
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled || !isHome ? "text-brand-navy/70" : "text-white/80"}`}>
          Career Counselling
        </span>
      </div>
    </div>
  );
}
