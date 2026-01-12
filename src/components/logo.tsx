import { Heart, Users, Stethoscope, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "heart" | "users" | "medical" | "simple";
  showIcon?: boolean;
}

export const Logo = ({ 
  className, 
  variant = "simple",
  showIcon = true
}: LogoProps) => {
  
  const getIcon = () => {
    switch(variant) {
      case "heart":
        return Heart;
      case "users":
        return Users;
      case "medical":
        return Stethoscope;
      case "simple":
      default:
        return Sparkles;
    }
  };

  const Icon = getIcon();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showIcon && (
        <div className="flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight">
        Care<span className="text-primary">now</span>
      </h2>
    </div>
  );
};

// Variant 1: Minimal with underline accent
export const LogoUnderline = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2">
        <Heart className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold">CareNow</h2>
      </div>
      <div className="h-0.5 w-16 bg-primary mt-1" />
    </div>
  );
};

// Variant 2: Square badge style
export const LogoBadge = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2">
        <Users className="h-5 w-5 text-primary" />
      </div>
      <h2 className="text-2xl font-bold">CareNow</h2>
    </div>
  );
};

// Variant 3: Circle badge style
export const LogoCircle = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
        <Stethoscope className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">CareNow</h2>
        <p className="text-xs text-muted-foreground">Care Services</p>
      </div>
    </div>
  );
};

// Variant 4: Text only with primary color
export const LogoText = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <h2 className="text-2xl font-bold">
        <span className="text-foreground">Care</span>
        <span className="text-primary">Now</span>
      </h2>
    </div>
  );
};