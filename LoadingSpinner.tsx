import { Heart, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";

const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => {
  const [dots, setDots] = useState(".");
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [
    { component: Heart, color: "text-red-500" },
    { component: Zap, color: "text-yellow-500" },
    { component: Users, color: "text-blue-500" }
  ];

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

  // Rotate icons
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [icons.length]);

  const CurrentIcon = icons[currentIcon].component;
  const iconColor = icons[currentIcon].color;

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 min-h-[400px] relative">
      {/* Main animated spinner with icon */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>
        
        {/* Inner rotating icon */}
        <div className="relative h-16 w-16 flex items-center justify-center">
          <div className="animate-pulse">
            <CurrentIcon className={`h-8 w-8 ${iconColor} transition-all duration-500`} />
          </div>
        </div>

        {/* Orbiting dots */}
        <div className="absolute -inset-4">
          <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 animate-ping rounded-full bg-primary"></div>
          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1 animate-ping rounded-full bg-accent"></div>
          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1 animate-ping rounded-full bg-secondary"></div>
          <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1 animate-ping rounded-full bg-muted"></div>
        </div>
      </div>

      {/* Loading text with animated dots */}
      <div className="text-center">
        <p className="text-lg font-semibold text-foreground mb-2">
          {text}
          <span className="inline-block w-8 text-left">{dots}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Connecting communities, building futures
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse rounded-full"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 h-4 w-4 rounded-full bg-primary/20 animate-bounce"></div>
        <div className="absolute top-20 right-20 h-3 w-3 rounded-full bg-accent/20 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 h-5 w-5 rounded-full bg-secondary/20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 rounded-full bg-muted/20 animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
