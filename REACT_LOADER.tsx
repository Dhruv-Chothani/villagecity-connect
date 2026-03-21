import { useState, useEffect } from "react";

const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => {
  const [dots, setDots] = useState(".");

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return ".";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 min-h-[400px]">
      {/* Main animated spinner */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
        
        {/* Inner pulse dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 bg-blue-600 rounded-full animate-pulse"></div>
        </div>

        {/* Orbiting dots */}
        <div className="absolute -inset-4">
          <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-blue-600 rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1 bg-green-600 rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1 bg-yellow-600 rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
          <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 bg-red-600 rounded-full animate-ping" style={{animationDelay: '600ms'}}></div>
        </div>
      </div>

      {/* Loading text with animated dots */}
      <div className="text-center">
        <p className="text-xl font-bold text-gray-800 mb-2">
          {text}
          <span className="inline-block w-8 text-left">{dots}</span>
        </p>
        <p className="text-sm text-gray-600">
          Connecting communities, building futures
        </p>
      </div>

      {/* Animated progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full animate-pulse"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 h-4 w-4 bg-blue-200 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 h-3 w-3 bg-green-200 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
        <div className="absolute bottom-20 left-20 h-5 w-5 bg-yellow-200 rounded-full animate-bounce" style={{animationDelay: '400ms'}}></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 bg-red-200 rounded-full animate-bounce" style={{animationDelay: '600ms'}}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
