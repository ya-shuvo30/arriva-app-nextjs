import React from "react";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data";

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header - SEO Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Software Development Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Custom Software Development &amp; AI Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            As a leading <strong>software development agency</strong>, we deliver end-to-end <strong>web application development</strong>, <strong>mobile app development</strong>, and cutting-edge <strong>AI agent products</strong> tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA - SEO Optimized */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Looking for a trusted <strong>software builder firm</strong> to bring your vision to life? 
            Our expert developers specialize in <strong>custom software development</strong>, <strong>web development</strong>, and <strong>AI solutions</strong>.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
