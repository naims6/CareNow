"use client";

import { useState } from "react";
import { Input } from "@/src/components/ui/input";

import { Search, Users } from "lucide-react";

import CaregiverCard from "../../card/CaregiverCard";
import { TCaregiver } from "@/src/types/CaregiverType";

export function CaregiversPage({caregiversData}: {caregiversData: TCaregiver[]}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20 mt-16">
      {/* Search */}
      <section className="py-8 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty, or location..."
                className="pl-12 h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caregivers Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caregiversData.length === 0 ? (
            <div className="text-center py-16">
              <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                No caregivers found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <CaregiverCard caregiversData={caregiversData} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CaregiversPage;
