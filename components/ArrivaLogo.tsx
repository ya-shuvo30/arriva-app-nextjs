import React from "react";

interface ArrivaLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const ArrivaLogo: React.FC<ArrivaLogoProps> = ({
  className = "",
  variant = "light",
}) => {
  const textColor = variant === "light" ? "#FFFFFF" : "#1E293B";
  const accentColor = "#60A5FA";

  return (
    <svg
      viewBox="0 0 350 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arriva Soft"
    >
      {/* Water droplet with streams icon */}
      <g transform="translate(0, 10)">
        {/* Left bracket-like lines */}
        <rect x="0" y="8" width="2" height="4" fill={accentColor} rx="0.5" />
        <rect x="0" y="16" width="2" height="10" fill={accentColor} rx="0.5" />
        <rect x="0" y="30" width="2" height="10" fill={accentColor} rx="0.5" />

        {/* Curved connector */}
        <path
          d="M 4 10 Q 12 10, 12 18"
          stroke={accentColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Horizontal lines (streams) */}
        <rect x="14" y="9" width="15" height="2" fill={accentColor} rx="1" />
        <rect x="14" y="16" width="15" height="2" fill={accentColor} rx="1" />
        <rect x="14" y="23" width="15" height="2" fill={accentColor} rx="1" />
        <rect x="14" y="30" width="15" height="2" fill={accentColor} rx="1" />

        {/* Water droplet */}
        <path
          d="M 33 2 C 33 2, 37 10, 37 14 C 37 18, 35.5 20, 33 20 C 30.5 20, 29 18, 29 14 C 29 10, 33 2, 33 2 Z"
          fill={accentColor}
        />
      </g>

      {/* "Arriva" text in primary color */}
      <text
        x="50"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill={textColor}
      >
        Arriva
      </text>

      {/* "Soft" text in accent color */}
      <text
        x="175"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="300"
        fill={accentColor}
      >
        Soft
      </text>

      {/* Underline with arrow */}
      <line
        x1="50"
        y1="47"
        x2="268"
        y2="47"
        stroke={accentColor}
        strokeWidth="1.5"
      />
      <polygon points="268,47 263,45 263,49" fill={accentColor} />
    </svg>
  );
};

export default ArrivaLogo;
