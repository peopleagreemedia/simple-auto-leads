import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  className?: string;
}

export const LoadingOverlay = ({ className = "" }: LoadingOverlayProps) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-white/80 z-50 rounded-lg ${className}`}>
      <Loader2 className="w-8 h-8 text-ford-blue animate-spin" />
    </div>
  );
};