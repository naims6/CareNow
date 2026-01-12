"use client";

import { Input } from "@/src/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { Search, Users, ChevronLeft, ChevronRight } from "lucide-react";

import CaregiverCard from "../../card/CaregiverCard";
import { TCaregiver } from "@/src/types/CaregiverType";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function CaregiversPage({
  caregiversData,
  totalPages,
  page,
}: {
  caregiversData: TCaregiver[];
  totalPages: number;
  page: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log("params", params);
    params.set(key, value);
    // params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 mt-16">
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
                onChange={(e) => updateQuery("search", e.target.value)}
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <CaregiverCard caregiversData={caregiversData} />
              </div>

              {/* Pagination UI Only */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-center">
                  {/* Pagination Controls */}
                  <Pagination>
                    <PaginationContent>
                      {/* Previous Button */}
                      <PaginationItem>
                        <PaginationPrevious href="#">
                          <ChevronLeft className="h-4 w-4 mr-2" />
                          Previous
                        </PaginationPrevious>
                      </PaginationItem>

                      {/* Page Numbers */}
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>

                      {/* Ellipsis */}
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>

                      {/* Next Button */}
                      <PaginationItem>
                        <PaginationNext href="#">
                          Next
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </PaginationNext>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                {/* Mobile Pagination */}
                <div className="mt-8 flex items-center justify-center sm:hidden">
                  <div className="flex items-center space-x-4">
                    <button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Prev
                    </button>
                    <span className="text-sm font-medium">Page 1 of 10</span>
                    <button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium">
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default CaregiversPage;
