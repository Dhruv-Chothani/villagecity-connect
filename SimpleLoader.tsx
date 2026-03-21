import { Loader2 } from "lucide-react";

const SimpleLoader = ({ text = "Loading..." }: { text?: string }) => (
  <div className="flex flex-col items-center justify-center gap-4 py-20">
    <div className="relative">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full bg-primary/20"></div>
    </div>
    <div className="text-center">
      <p className="text-lg font-semibold text-foreground">{text}</p>
      <p className="text-sm text-muted-foreground mt-1">Please wait...</p>
    </div>
  </div>
);

export default SimpleLoader;
