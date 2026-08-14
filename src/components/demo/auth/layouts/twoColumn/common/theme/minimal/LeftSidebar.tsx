/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

import { useRouter } from "next/navigation";

// Components

import { ArrowLeft } from "lucide-react";

// Functions

import { cn } from "forma-li";

// Interfaces

interface LeftSidebarProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LeftSidebar({
  title,
  description,
  className,
  children,
}: LeftSidebarProps) {
  // Hooks

  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col w-full px-6 py-5 relative overflow-hidden",
        "bg-linear-to-br from-amber-50/95 via-orange-50/90 to-amber-100/95",
        "border border-amber-200/50",
        "shadow-2xl shadow-amber-900/20",
        "ltr:rounded-l-2xl rtl:rounded-r-2xl",
        "xl:px-8 xl:py-6",
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-200/20 via-orange-200/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 rounded-l-2xl shadow-[inset_0_0_80px_rgba(251,146,60,0.08)] pointer-events-none" />
      
      {/* Decorative dots pattern */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-orange-300/10 blur-3xl pointer-events-none" />

      <header className="relative z-10 mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="group cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/50 bg-amber-200/30 text-amber-600 transition-all hover:bg-amber-300/30 hover:border-amber-400 hover:text-amber-700 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:scale-110 rtl:rotate-180 text-amber-700" />
          </button>
          <h1 className="text-lg font-semibold tracking-wide text-amber-900 xl:text-xl">
            {title}
          </h1>
        </div>
        <p className="hidden 4xl:block mt-1 max-w-[24rem] text-xs text-amber-800/70 ltr:pl-11 rtl:pr-11 xl:text-sm">
          {description}
        </p>
      </header>

      <div className="relative z-10 flex-1">{children}</div>
    </div>
  );
}
