import React from "react";

export function CaregiversGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Generating 6 placeholder cards */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="space-y-4 p-4 border rounded-xl border-muted/40 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="aspect-square w-full bg-muted rounded-lg" />
          {/* Text Content Placeholders */}
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-3 bg-muted/60 rounded w-1/2" />
            <div className="h-3 bg-muted/60 rounded w-5/6" />
          </div>
          {/* Button Placeholder */}
          <div className="h-10 bg-muted rounded-md w-full mt-4" />
        </div>
      ))}
    </div>
  );
}

export default CaregiversGridSkeleton;
