import React from "react";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { FOOTER_LINKS } from "@/data";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-16 border-b border-gray-700 pb-10">
        {/* Company Info / Logo */}
        <div className="col-span-2 md:col-span-2 space-y-4">
          <a
            href="#"
            className="inline-block hover:opacity-80 transition-opacity duration-200"
            aria-label="Arriva Soft Home"
          >
            <img
              src="/arriva-soft-logo.svg"
              alt="Arriva Soft"
              className="h-16 w-auto brightness-200"
            />
          </a>
          <p className="text-sm text-gray-400 max-w-sm">
            Driving digital innovation and delivering highly scalable, secure
            software solutions globally since 2001.
          </p>
          {/* Social Links */}
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.services.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Industries</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.industries.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Arriva Soft. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
