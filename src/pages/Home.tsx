import * as React from "react"
import { useEffect } from "react"

// Immediately visible components
import Hero from "@/components/Hero"
import NoticeSection from "@/components/NoticeSection"
import UniversitySelections from "@/components/UniversitySelections"
import About from "@/components/About"
import FounderSection from "@/components/FounderSection"
import VisionMission from "@/components/VisionMission"
import Courses from "@/components/Courses"
import SuccessStories from "@/components/SuccessStories"
import Stats from "@/components/Stats"
import Updates from "@/components/Updates"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import LeadForm from "@/components/LeadForm"
import { FinalCTA } from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    document.title = "Direct Admission in MBBS, B.Tech, MBA in India | Sanjivani Career Counselling Gondia";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Get direct admission in MBBS, B.Tech, MBA & top courses in India. Expert career counselling in Gondia. Call now for fast admission support.");
  }, []);

  return (
    <>
      <Hero />
      <NoticeSection />
      <UniversitySelections />
      <About />
      <FounderSection />
      <VisionMission />
      <Courses />
      <SuccessStories />
      <Stats />
      <Updates />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <FinalCTA />
    </>
  );
}
