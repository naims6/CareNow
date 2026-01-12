import { Suspense } from "react";
import CaregiversContent from "./CaregiversContent";
import CaregiverSkeleton from "./loading";

const Caregivers = async () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-linear-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find Your Perfect Caregiver
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Browse our verified caregivers and find the perfect match for your
              family&apos;s needs
            </p>
          </div>
        </div>
      </section>
      <Suspense fallback={<CaregiverSkeleton />}>
        <CaregiversContent />
      </Suspense>
    </>
  );
};

export default Caregivers;
