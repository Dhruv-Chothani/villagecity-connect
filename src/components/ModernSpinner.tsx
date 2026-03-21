import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md" }) => {
  const sizeConfig = {
    sm: "h-8 w-8 border-2",
    md: "h-12 w-12 border-4",
    lg: "h-16 w-16 border-4",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-50/80 backdrop-blur-sm z-50">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div
          className={`
            ${sizeConfig[size]}
            border-green-200
            border-t-green-600
            rounded-full
            animate-spin
          `}
        />

        {/* Text */}
        <p className="text-green-700 font-semibold text-lg tracking-wide">
          Developing Village...
        </p>

        {/* Sub text */}
        <p className="text-green-600 text-sm">
          Building a better future 🌾
        </p>

        {/* Optional progress line */}
        <div className="w-40 h-1 bg-green-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 animate-pulse rounded-full" />
        </div>

      </div>
    </div>
  );
};

export default Spinner;