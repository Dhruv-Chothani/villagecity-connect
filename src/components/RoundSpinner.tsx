import { useState, useEffect } from 'react';

interface RoundSpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'primary';
}

const RoundSpinner = ({ 
  text = "Loading...", 
  size = 'md',
  color = 'primary'
}: RoundSpinnerProps) => {
  const [dots, setDots] = useState(".");

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return ".";
        return prev + ".";
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Size configurations
  const sizeConfig = {
    sm: { spinner: 'h-8 w-8', border: 'border-2', dot: 'h-1.5 w-1.5' },
    md: { spinner: 'h-12 w-12', border: 'border-3', dot: 'h-2 w-2' },
    lg: { spinner: 'h-16 w-16', border: 'border-4', dot: 'h-3 w-3' }
  };

  // Color configurations
  const colorConfig = {
    blue: { border: 'border-blue-200 border-t-blue-500', bg: 'bg-blue-500' },
    green: { border: 'border-green-200 border-t-green-500', bg: 'bg-green-500' },
    purple: { border: 'border-purple-200 border-t-purple-500', bg: 'bg-purple-500' },
    primary: { border: 'border-primary/20 border-t-primary', bg: 'bg-primary' }
  };

  const currentSize = sizeConfig[size];
  const currentColor = colorConfig[color];

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 p-8">
        {/* Round Spinner */}
        <div className={`relative ${currentSize.spinner}`}>
          {/* Outer ring */}
          <div 
            className={`
              ${currentSize.spinner} 
              ${currentColor.border} 
              rounded-full 
              animate-spin
            `}
          />
          
          {/* Inner center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`
                ${currentSize.dot} 
                ${currentColor.bg} 
                rounded-full 
                animate-pulse
              `}
            />
          </div>
        </div>

        {/* Loading Text */}
        {text && (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              {text}
              <span className="inline-block w-6 text-left text-primary">{dots}</span>
            </p>
            <p className="text-sm text-gray-600">
              Please wait a moment
            </p>
          </div>
        )}

        {/* Progress Ring */}
        <div className="relative w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default RoundSpinner;
