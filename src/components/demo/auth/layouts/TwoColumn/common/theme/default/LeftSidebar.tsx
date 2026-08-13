"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "forma-li";

interface LeftSidebarProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LeftSidebar({ title, description, className, children }: LeftSidebarProps) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col w-full px-6 py-5 relative overflow-hidden",
        "bg-white/3 backdrop-blur-lg",
        "border border-white/5",
        "shadow-2xl shadow-black/10",
        "ltr:rounded-l-2xl rtl:rounded-r-2xl",
        "xl:px-8 xl:py-6",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 rounded-l-2xl shadow-[inset_0_0_80px_rgba(255,255,255,0.03)] pointer-events-none" />

      <header className="relative z-10 mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="group cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-gray-200/50 bg-white/30 text-gray-400 transition-all hover:bg-white/20 hover:border-gray-300 hover:text-gray-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:scale-110 rtl:rotate-180 text-Neutral-100" />
          </button>
          <h1 className="text-lg font-semibold tracking-wide text-Neutral-50 xl:text-xl">
            {title}
          </h1>
        </div>
        <p className="hidden 4xl:block mt-1 max-w-[24rem] text-xs text-Neutral-100 ltr:pl-11 rtl:pr-11 xl:text-sm">
          {description}
        </p>
      </header>

      <div className="relative z-10 flex-1">{children}</div>
    </div>
  );
}