'use client'

import { useState, useEffect, useCallback } from "react";
import { HERO_SLIDES, EVENT_BANNERS } from "@/data";
import Header from "@/components/Header";
import EventBannerComponent from "@/components/EventBanner";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-cycle the carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Function to handle manual slide change
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlideIndex(index);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Render Active Event Banners */}
      {EVENT_BANNERS.filter((b) => b.isActive).map((banner) => (
        <EventBannerComponent key={banner.id} banner={banner} />
      ))}

      <Header />
      <main>
        {/* Hero Section with Dashboard Carousel */}
        <Hero
          slide={HERO_SLIDES[currentSlideIndex]}
          onSlideChange={handleSlideChange}
        />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Technology Stack */}
        <TechStack />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
