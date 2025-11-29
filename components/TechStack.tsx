import React from "react";
import { techStackData } from "@/data";

const TechStack: React.FC = () => {
  const categories = [
    { title: "Frontend", techs: techStackData.frontend },
    { title: "Backend", techs: techStackData.backend },
    { title: "Mobile", techs: techStackData.mobile },
    { title: "Cloud & DevOps", techs: techStackData.cloud },
    { title: "Database", techs: techStackData.database },
    { title: "Tools", techs: techStackData.tools },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks to build scalable,
            high-performance applications
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                {category.title}
              </h3>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Technology-Agnostic Approach
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We choose the right technology stack based on your specific
            requirements, scalability needs, and long-term goals—not based on
            what we already know.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
