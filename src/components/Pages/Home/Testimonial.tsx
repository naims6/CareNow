"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import { TestimonialType, testimonials } from "@/src/data/reviews";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { useState } from "react";

const chunkArray = (
  array: TestimonialType[],
  chunkSize: number
): TestimonialType[][] => {
  const result: TestimonialType[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function Testimonial() {
  const [iseExpandedTestimonial, setIsExpandedTestimonial] = useState(false);

  const handleLoadReview = () => {
    setIsExpandedTestimonial(true);
  };

  return (
    <section>
      <div className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Customer Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Families Across Bangladesh
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how our caregivers have made a difference in the lives of
              families just like yours
            </p>
          </div>
          <div
            className={`${
              iseExpandedTestimonial ? "" : "max-h-162.5"
            } mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden relative transition-all duration-200`}
          >
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-4 md:space-y-6">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
            {/* show more button */}
            <div
              className={`${
                iseExpandedTestimonial ? "hidden" : ""
              } absolute bottom-0 left-0 h-37.5 w-full flex items-center justify-center bg-linear-to-t from-background to-transparent`}
            >
              <Button
                variant="default"
                className="cursor-pointer"
                onClick={handleLoadReview}
              >
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
