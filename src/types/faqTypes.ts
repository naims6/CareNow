import { LucideIcon } from "lucide-react";

export type FAQItemType = {
  question: string;
  answer: string;
  icon: LucideIcon;
  badge?: string;
  highlight?: string;
  category: string;
};
