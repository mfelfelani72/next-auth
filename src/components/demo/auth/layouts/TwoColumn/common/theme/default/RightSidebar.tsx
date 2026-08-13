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
        "bg-white/80 backdrop-blur-none",
        "border border-white/20",
        "shadow-2xl shadow-black/15",
        "ltr:rounded-r-2xl rtl:rounded-l-2xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/10 to-transparent pointer-events-none ltr:rounded-r-2xl rtl:rounded-l-2xl" />
      <div className="flex flex-col h-full items-center justify-between z-10">
        <BrandCard />
        {children}
      </div>
    </div>
  );
}