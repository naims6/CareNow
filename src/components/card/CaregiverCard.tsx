"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Star, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TCaregiver } from "@/src/types/CaregiverType";

const CaregiverCard = ({ caregiversData }: { caregiversData: TCaregiver[] }) => {
  return (
   <>
   {caregiversData.map((caregiver, index) => (
     <motion.div
       key={caregiver.id}
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.2, delay: index * 0.05 }}
       className="h-full"
     >
       <Card className="h-full border hover:shadow-sm transition-all duration-200 flex flex-col">
         <CardContent className="p-4 flex flex-col flex-1">
           {/* Avatar & Name */}
           <div className="flex items-center gap-3 mb-3">
             <Avatar className="h-12 w-12">
               <AvatarImage src={caregiver.image} alt={caregiver.name} />
               <AvatarFallback className="text-xs">
                 {caregiver.name
                   .split(" ")
                   .map((n) => n[0])
                   .join("")}
               </AvatarFallback>
             </Avatar>
             <div className="flex-1 min-w-0">
               <h3 className="font-semibold text-sm truncate">
                 {caregiver.name}
               </h3>
               <p className="text-xs text-muted-foreground truncate">
                 {caregiver.role}
               </p>
             </div>
           </div>

           {/* Verification & Rating */}
           <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-2">
               {caregiver.verified && (
                 <Badge 
                   variant="secondary" 

                   className="text-[10px] px-1.5 py-0"
                 >
                   <CheckCircle className="h-2.5 w-2.5 mr-0.5" />
                   Verified
                 </Badge>
               )}
               <div className="flex items-center gap-1 text-xs">
                 <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                 <span className="font-medium">{caregiver.rating}</span>
               </div>
             </div>
             <div className="text-sm font-bold text-primary">
               ৳{caregiver.hourlyRate}
             </div>
           </div>

           {/* Location & Experience */}
           <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
             <div className="flex items-center gap-1">
               <MapPin className="h-3 w-3" />
               <span>{caregiver.location}</span>
             </div>
             <div>•</div>
             <div>{caregiver.experience}</div>
           </div>

           {/* Specialties (Collapsed) */}
           <div className="mb-4">
             <div className="flex flex-wrap gap-1">
               {caregiver.specialties.slice(0, 2).map((specialty, idx) => (
                 <Badge 
                   key={idx} 
                   variant="outline" 
                   className="text-[10px] py-0.5 px-1.5"
                 >
                   {specialty}
                 </Badge>
               ))}
               {caregiver.specialties.length > 2 && (
                 <Badge 
                   variant="outline" 
                   className="text-[10px] py-0.5 px-1.5"
                 >
                   +{caregiver.specialties.length - 2}
                 </Badge>
               )}
             </div>
           </div>

           {/* Action Button */}
           <div className="mt-auto">
             <Button 
               asChild 
               size="sm" 
               variant="default"
               className="w-full text-sm"
             >
               <Link href={`/caregivers/${caregiver.id}`}>
                 View Profile
               </Link>
             </Button>
           </div>
         </CardContent>
       </Card>
     </motion.div>
   ))}
   </>
   
  );
};

export default CaregiverCard;