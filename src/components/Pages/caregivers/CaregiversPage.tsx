"use client";

import { Input } from "@/src/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Search, Users, ChevronLeft, ChevronRight } from "lucide-react";

import CaregiverCard from "../../card/CaregiverCard";
import { TCaregiver } from "@/src/types/CaregiverType";
import { useRouter, useSearchParams } from "next/navigation";

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
    params.set(key, value);
    // params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 mt-16">
      {/* Search & Filters */}
      <section className="py-8 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                className="pl-12 h-12 text-lg shadow-sm"
                defaultValue={searchParams.get("search") || ""}
                onChange={(e) => updateQuery("search", e.target.value)}
              />
            </div>

            {/* Sort & Quick Actions */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  Sort By:
                </span>
                <Select
                  defaultValue={searchParams.get("sort") || "default"}
                  onValueChange={(value) => updateQuery("sort", value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Most Recent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Recommended</SelectItem>
                    <SelectItem value="rating-desc">Highest Rated</SelectItem>
                    <SelectItem value="rate-asc">
                      Hourly Rate: Low to High
                    </SelectItem>
                    <SelectItem value="rate-desc">
                      Hourly Rate: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
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

              <div className="mt-12 pt-8 border-t">
                <div className="hidden sm:flex flex items-center justify-center">
                  {/* Pagination Controls */}
                  <Pagination>
                    <PaginationContent>
                      {/* Previous Button */}
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            if (page > 1)
                              updateQuery("page", (page - 1).toString());
                          }}
                          className={
                            page <= 1
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>

                      {/* Page Numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (p) => (
                          <PaginationItem key={p}>
                            <PaginationLink
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                updateQuery("page", p.toString());
                              }}
                              isActive={page === p}
                              className="cursor-pointer"
                            >
                              {p}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      )}

                      {/* Next Button */}
                      <PaginationItem>
                        <PaginationNext
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            if (page < totalPages)
                              updateQuery("page", (page + 1).toString());
                          }}
                          className={
                            page >= totalPages
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                {/* Mobile Pagination */}
                <div className="mt-8 flex items-center justify-center sm:hidden">
                  <div className="flex items-center space-x-4">
                    <button
                      disabled={page <= 1}
                      onClick={() => updateQuery("page", (page - 1).toString())}
                      className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Prev
                    </button>
                    <span className="text-sm font-medium">
                      Page {page} of {totalPages}
                    </span>
                    <button
                      disabled={page >= totalPages}
                      onClick={() => updateQuery("page", (page + 1).toString())}
                      className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
                    >
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
