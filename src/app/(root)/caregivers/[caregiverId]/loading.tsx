export default function CaregiverProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background mt-16 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info Card */}
            <div className="lg:col-span-2">
              <div className="border rounded-xl p-6 bg-card space-y-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Avatar Circle */}
                  <div className="h-32 w-32 rounded-full bg-muted shrink-0" />

                  {/* Name and Badges */}
                  <div className="flex-1 space-y-4 w-full">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="h-8 bg-muted rounded w-48" />
                        <div className="flex gap-2">
                          <div className="h-5 bg-muted rounded w-20" />
                          <div className="h-5 bg-muted rounded w-24" />
                        </div>
                      </div>
                      <div className="h-8 bg-muted rounded w-24" />
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded bg-muted" />
                          <div className="space-y-1">
                            <div className="h-3 bg-muted rounded w-12" />
                            <div className="h-2 bg-muted/60 rounded w-10" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="hidden lg:block">
              <div className="border rounded-xl p-6 bg-card space-y-6 sticky top-6">
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="h-4 bg-muted rounded w-1/3" />
                    <div className="h-4 bg-muted rounded w-1/4" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-muted rounded w-1/3" />
                    <div className="h-4 bg-muted rounded w-1/4" />
                  </div>
                </div>
                <div className="h-px bg-muted w-full" />
                <div className="space-y-3">
                  <div className="h-12 bg-muted rounded w-full" />
                  <div className="flex gap-3">
                    <div className="h-10 bg-muted rounded flex-1" />
                    <div className="h-10 bg-muted rounded flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section Skeleton */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tab Triggers */}
          <div className="grid grid-cols-4 gap-2 mb-8 h-10 bg-muted/30 rounded-lg p-1" />

          {/* Content Area */}
          <div className="border rounded-xl p-6 bg-card space-y-6">
            <div className="h-6 bg-muted rounded w-32 mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="h-5 bg-muted rounded w-1/2" />
                <div className="h-20 bg-muted/40 rounded w-full" />
              </div>
              <div className="space-y-4">
                <div className="h-5 bg-muted rounded w-1/2" />
                <div className="h-20 bg-muted/40 rounded w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
