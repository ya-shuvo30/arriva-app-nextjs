import React from "react";
import type { LucideIcon } from "lucide-react";

interface StatBoxProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  delay?: string;
}

const StatBox: React.FC<StatBoxProps> = ({
  value,
  label,
  icon: Icon,
  delay = "0s",
}) => (
  <div
    className="group p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-lg border border-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-200 animate-fade-in-up cursor-pointer"
    style={{ animationDelay: delay }}
  >
    {Icon && (
      <div className="mb-3 inline-flex p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
    )}
    <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 leading-none group-hover:scale-105 transition-transform duration-300">
      {value}
    </h3>
    <p className="text-gray-600 text-sm font-semibold leading-tight">{label}</p>
  </div>
);

export default StatBox;
