import { useState, useEffect } from 'react';

interface ModernSpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'primary' | 'gradient';
}

const ModernSpinner = ({ 
  text = "Loading...", 
  size = 'md',
  color = 'primary'
}: ModernSpinnerProps) => {
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

  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'h-12 w-12',
      ring: 'h-12 w-12',
      border: 'border-3',
      inner: 'h-2 w-2'
    },
    md: {
      container: 'h-16 w-16',
      ring: 'h-16 w-16',
      border: 'border-4',
      inner: 'h-3 w-3'
    },
    lg: {
      container: 'h-20 w-20',
      ring: 'h-20 w-20',
      border: 'border-4',
      inner: 'h-4 w-4'
    }
  };

  // Color configurations
  const colorConfig = {
    blue: {
      ring: 'border-blue-200 border-t-blue-500',
      inner: 'bg-blue-500',
      glow: 'shadow-blue-500/20'
    },
    primary: {
      ring: 'border-primary/20 border-t-primary',
      inner: 'bg-primary',
      glow: 'shadow-primary/20'
    },
    gradient: {
      ring: 'border-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-border border-t-transparent',
      inner: 'bg-gradient-to-r from-blue-500 to-purple-600',
      glow: 'shadow-blue-500/20'
    }
  };

  const currentSize = sizeConfig[size];
  const currentColor = colorConfig[color];

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 p-8">
        {/* Main Spinner Container */}
        <div className={`relative ${currentSize.container}`}>
          {/* Outer Ring */}
          <div 
            className={`
              ${currentSize.ring} 
              ${currentColor.ring} 
              rounded-full 
              animate-spin 
              ${currentColor.glow}
            `}
          />
          
          {/* Inner Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`
                ${currentSize.inner} 
                ${currentColor.inner} 
                rounded-full 
                animate-pulse
                shadow-lg
              `}
            />
          </div>

          {/* Orbiting Dots */}
          <div className="absolute -inset-2">
            <div className={`absolute top-0 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-0.5 ${currentColor.inner} rounded-full animate-ping`} />
            <div className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-0.5 ${currentColor.inner} rounded-full animate-ping`} style={{animationDelay: '150ms'}} />
            <div className={`absolute left-0 top-1/2 h-1 w-1 -translate-y-0.5 -translate-x-0.5 ${currentColor.inner} rounded-full animate-ping`} style={{animationDelay: '300ms'}} />
            <div className={`absolute right-0 top-1/2 h-1 w-1 -translate-y-0.5 translate-x-0.5 ${currentColor.inner} rounded-full animate-ping`} style={{animationDelay: '450ms'}} />
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
              Please wait while we prepare your content
            </p>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ModernSpinner;
