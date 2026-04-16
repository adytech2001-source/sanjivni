import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  "https://res.cloudinary.com/dhzb1wiuy/image/upload/v1776332152/hero_section_ym0xgj.png",
  "https://res.cloudinary.com/dhzb1wiuy/image/upload/v1776332467/hero_section_cgb6qm.png",
  "https://res.cloudinary.com/dhzb1wiuy/image/upload/v1776332800/hero_section_c1ciod.png"
];

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="high"
              />
              {/* Optional: Subtle overlay to ensure navbar visibility if needed, 
                  but user asked for "only img", so keeping it clean. 
                  However, a very light top gradient helps the navbar. */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-light-blue hover:text-brand-navy hover:border-brand-light-blue transition-all">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-light-blue hover:text-brand-navy hover:border-brand-light-blue transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 swiper-pagination-custom !w-auto flex gap-2" />
      </Swiper>

      {/* Global Slider Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 6px;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 32px;
          background: #47bbd6;
        }
      `}} />
    </section>
  );
}
