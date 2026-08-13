"use client";

import { cn } from "forma-li";
import BrandCard from "./BrandCard";

interface RightSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function RightSidebar({ className, children }: RightSidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col w-full p-2 relative",
        "bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-amber-100/95",
        "border border-amber-200/40",
        "shadow-2xl shadow-amber-900/20",
        "ltr:rounded-r-2xl rtl:rounded-l-2xl",
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-200/20 via-orange-200/10 to-transparent pointer-events-none ltr:rounded-r-2xl rtl:rounded-l-2xl" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-orange-300/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 ltr:rounded-r-2xl rtl:rounded-l-2xl shadow-[inset_0_0_80px_rgba(251,146,60,0.05)] pointer-events-none" />
      
      <div className="flex flex-col h-full items-center justify-between z-10">
        <BrandCard />
        {children}
      </div>
    </div>
  );
}