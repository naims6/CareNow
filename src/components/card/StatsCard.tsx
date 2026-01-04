import { Card, CardContent } from "@/src/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Counter } from "../ui/Counter";

interface StatsCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  description?: string;
  prefix?: string;
  suffix?: string;
}

export function StatsCard({
  icon: Icon,
  value,
  label,
  description,
  suffix,
}: StatsCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow border border-accent/10 bg-card/20">
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground">
              <Counter value={Number(value)} suffix={suffix}></Counter>
            </h3>

            <p className="text-lg font-semibold text-foreground">{label}</p>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
