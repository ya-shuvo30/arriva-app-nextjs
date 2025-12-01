'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/data";
import type { NavLink } from "@/types";
import DropdownItem from "@/components/DropdownItem";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenu(mobileSubMenu === label ? null : label);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-white/95 transition-all duration-300 border-b ${
        isScrolled ? "shadow-lg border-gray-200" : "shadow-sm border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* App Icon Only */}
          <a
            href="#"
            className="flex items-center gap-3 md:gap-4 mr-8 md:mr-12 group transition-opacity duration-300 hover:opacity-90"
            aria-label="Arriva Soft - Software Development Company"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <Image
                  src="/app-icon.svg"
                  alt="Arriva Soft Icon"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Company Name with Different Weights */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Arriva
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-light text-blue-600">
                  Soft
                </span>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wide">
                Est. 2001
              </span>
            </div>
          </a>
          {/* Desktop Nav (Mega-Menu Logic) */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {NAV_LINKS.map((link: NavLink) => (
              <div
                key={link.label}
                className="relative group/nav-item h-full flex items-center"
              >
                {link.isButton ? (
                  <a
                    href={link.href}
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
                  >
                    {link.label}
                  </a>
                ) : (
                  <>
                    {/* Main Nav Link */}
                    <a
                      href={link.href}
                      className="text-gray-700 font-medium hover:text-blue-500 transition duration-200 flex items-center py-2"
                    >
                      {link.label}
                      {link.subLinks && (
                        <ChevronDown className="ml-1 w-3 h-3 text-gray-400 transition-transform duration-200 group-hover/nav-item:rotate-180" />
                      )}
                    </a>

                    {/* Dropdown Menu Content (Only rendered if subLinks exist) */}
                    {link.subLinks && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-max max-w-4xl bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover/nav-item:opacity-100 group-hover/nav-item:visible transition-all duration-300 pointer-events-none group-hover/nav-item:pointer-events-auto">
                        <div className="grid grid-cols-2 gap-4 p-6">
                          {link.subLinks.map((subLink, index) => (
                            <DropdownItem key={index} link={subLink} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
              <div key={link.label}>
                {link.isButton ? (
                  // Button
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  // Link with potential submenu
                  <>
                    <button
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition duration-150 ${
                        link.subLinks
                          ? "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                      }`}
                      onClick={() =>
                        link.subLinks
                          ? toggleMobileSubMenu(link.label)
                          : setIsOpen(false)
                      }
                      aria-expanded={
                        link.subLinks ? mobileSubMenu === link.label : undefined
                      }
                    >
                      {link.label}
                      {link.subLinks && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileSubMenu === link.label
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu Content */}
                    {link.subLinks && mobileSubMenu === link.label && (
                      <div className="pl-4 pr-2 pt-1 pb-2 space-y-1 bg-gray-50 rounded-lg border-l-4 border-blue-500 mt-1">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            className="block p-2 text-sm text-gray-700 hover:bg-white rounded-md transition duration-150"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-medium block">
                              {subLink.label}
                            </span>
                            <span className="text-xs text-gray-500 block truncate">
                              {subLink.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
