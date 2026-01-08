"use client";

import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Star,
  Clock,
  MapPin,
  CheckCircle,
  Sparkles,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import { TCaregiver } from "@/src/types/CaregiverType";
const CaregiverCard = ({
  caregiversData,
}: {
  caregiversData: TCaregiver[];
}) => {
  return (
    <>
      {caregiversData.map((caregiver, index) => (
        <motion.div
          key={caregiver.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden group">
            {/* Top Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge
                className={cn(
                  "shadow-md",
                  caregiver.rating >= 4.8
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : caregiver.rating >= 4.5
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-green-500 hover:bg-green-600"
                )}
              >
                <Star className="h-3 w-3 mr-1" />
                {caregiver.rating}
              </Badge>
            </div>

            <CardContent className="p-6">
              {/* Caregiver Header */}
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="h-20 w-20 border-2 border-primary/20">
                  <AvatarImage src={caregiver.image} alt={caregiver.name} />
                  <AvatarFallback className="text-lg">
                    {caregiver.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-1">
                        {caregiver.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {caregiver.role}
                      </p>
                    </div>

                    {caregiver.verified && (
                      <Badge variant="outline" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{caregiver.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{caregiver.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caregiver.specialties.slice(0, 3).map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {caregiver.specialties.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{caregiver.specialties.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    ৳{caregiver.hourlyRate}
                  </div>
                  <p className="text-xs text-muted-foreground">per hour</p>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold">{caregiver.reviews}</div>
                  <p className="text-xs text-muted-foreground">reviews</p>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold">
                    {caregiver.responseTime}
                  </div>
                  <p className="text-xs text-muted-foreground">response</p>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {caregiver.languages.slice(0, 2).map((language, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <div className="flex gap-3 w-full">
                <Button asChild className="flex-1">
                  <Link href={`/caregivers/${caregiver.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

export default CaregiverCard;
