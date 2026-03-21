import { useState, useEffect } from "react";

interface ReloadLoaderProps {
  show?: boolean;
  text?: string;
}

const ReloadLoader = ({ show = false, text = "Reloading..." }: ReloadLoaderProps) => {
  const [dots, setDots] = useState(".");

  // Animate dots
  useEffect(() => {
    if (!show) return;
    
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return ".";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center animate-fadeIn">
        {/* Main Spinner */}
        <div className="relative inline-block mb-8">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -inset-4">
            <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-blue-600 rounded-full animate-ping"></div>
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1 bg-green-600 rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1 bg-yellow-600 rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
            <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 bg-red-600 rounded-full animate-ping" style={{animationDelay: '600ms'}}></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {text}
            <span className="inline-block w-8 text-left">{dots}</span>
          </h2>
          <p className="text-gray-600">Please wait while we refresh your content</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-8 mx-auto">
          <div className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ReloadLoader;
