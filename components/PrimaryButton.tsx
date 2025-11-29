import React from "react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  small?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  children,
  small = false,
  className = "",
}) => (
  <a
    href={href}
    className={`group inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 ${
      small ? "px-4 py-2 text-sm" : "px-8 py-4 text-lg"
    } bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white relative overflow-hidden ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {/* Shine effect */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
    <span className="relative z-10 flex items-center">{children}</span>
  </a>
);

export default PrimaryButton;
