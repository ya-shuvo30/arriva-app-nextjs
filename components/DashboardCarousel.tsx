'use client'

import React, { useState, useEffect } from "react";
import ProjectOrderDashboard from "@/components/ProjectOrderDashboard";
import {
  fintechDashboardData,
  healthcareDashboardData,
  ecommerceDashboardData,
  enterpriseDashboardData,
} from "@/data";

const DashboardCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dashboards = [
    fintechDashboardData,
    healthcareDashboardData,
    ecommerceDashboardData,
    enterpriseDashboardData,
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % dashboards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dashboards.length]);

  return (
    <div className="relative w-full min-h-[520px]">
      {/* Dashboard Display */}
      <div className="w-full">
        <ProjectOrderDashboard data={dashboards[activeIndex]} />
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {dashboards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-blue-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to dashboard ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardCarousel;
