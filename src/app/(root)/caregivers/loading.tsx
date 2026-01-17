import CaregiversGridSkeleton from "@/src/components/Pages/caregivers/CaregiversGridSkeleton";

export default function CaregiverSkeleton() {
  return (
    <div className="min-h-screen bg-background mt-16">
      {/* Search Bar Skeleton */}
      <section className="py-8 bg-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 bg-muted rounded-md w-full animate-pulse" />
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaregiversGridSkeleton />
        </div>
      </section>
    </div>
  );
}
