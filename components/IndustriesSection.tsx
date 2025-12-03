import React from "react";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/data";

const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header - SEO Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Software Development for Every Industry
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From <strong>Fintech software development</strong> to <strong>Healthcare apps</strong> and <strong>E-commerce platforms</strong>—our <strong>software builder firm</strong> delivers industry-specific solutions with proven expertise across 200+ successful projects.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className={`group ${industry.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>

              {/* Industry Name */}
              <h3
                className={`text-xl md:text-2xl font-bold ${industry.textColor} mb-2`}
              >
                {industry.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                {industry.description}
              </p>

              {/* Projects Count Badge */}
              <div
                className={`inline-block px-4 py-2 ${industry.bgColor.replace(
                  "50",
                  "100"
                )} ${
                  industry.textColor
                } rounded-full text-sm font-semibold mb-4`}
              >
                {industry.projects}
              </div>

              {/* Case Study Link */}
              <a
                href={industry.caseStudy}
                className={`inline-flex items-center gap-2 ${industry.textColor} font-semibold hover:opacity-80 transition-opacity group/link`}
              >
                <span>View case studies</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              200+
            </p>
            <p className="text-gray-600">Total Projects</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              98%
            </p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              850+
            </p>
            <p className="text-gray-600">Tech Professionals</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              23+
            </p>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
