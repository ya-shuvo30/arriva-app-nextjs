import { Metadata } from 'next';
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/data";

export const metadata: Metadata = {
  title: 'Software Development Services | Web & App Development | Arriva Soft',
  description: 'Explore Arriva Soft\'s comprehensive software development services: custom software development, web application development, mobile app development, AI solutions, cloud & DevOps, and dedicated development teams. Get a free consultation today.',
  keywords: [
    'software development services',
    'custom software development',
    'web application development',
    'web development services',
    'mobile app development',
    'app development services',
    'AI development services',
    'cloud and devops solutions',
    'dedicated development team',
    'software outsourcing',
    'enterprise software services',
    'UX/UI design services',
    'technology consulting',
    'Arriva Soft services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Software Development Services | Web & App Development | Arriva Soft',
    description: 'Full-stack software development services including web development, mobile app development, AI solutions, and dedicated teams. ISO 27001 certified.',
    url: '/services',
  },
  twitter: {
    title: 'Software Development Services | Arriva Soft',
    description: 'Comprehensive software development services: web apps, mobile apps, AI, cloud solutions. 23+ years experience.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Software Development Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Custom Software Development &amp; Web Application Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                <strong>Arriva Soft</strong> offers comprehensive <strong>software development services</strong> including <strong>web development</strong>, <strong>mobile app development</strong>, <strong>AI solutions</strong>, and dedicated development teams. Transform your business with our ISO 27001 certified solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - Detailed */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {SERVICES_DATA.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    id={`${service.title.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}
                    className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 scroll-mt-24"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <a
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                        >
                          <span>Get a Quote</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Arriva Soft?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                23+ years of excellence in software development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ISO 27001 Certified",
                  description: "Enterprise-grade security and compliance standards"
                },
                {
                  title: "850+ Tech Professionals",
                  description: "Pre-vetted experts across all major technologies"
                },
                {
                  title: "6 Global Offices",
                  description: "Round-the-clock support and local expertise"
                },
                {
                  title: "98% Client Satisfaction",
                  description: "Proven track record of successful deliveries"
                },
                {
                  title: "Agile Methodology",
                  description: "Fast iterations and continuous improvement"
                },
                {
                  title: "Scalable Solutions",
                  description: "Built to grow with your business needs"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 ml-9">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Let&apos;s discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/meeting-brainstation-23/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-700 border-2 border-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
