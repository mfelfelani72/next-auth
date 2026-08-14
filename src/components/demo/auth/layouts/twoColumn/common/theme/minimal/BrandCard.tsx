/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

// Components

import Image from "@/components/base/Image";

// Functions

import { cn } from "forma-li";

// Interfaces

interface BrandCardProps {
  className?: string;
}

// Hooks

import { useTranslation } from "@/hooks/useTranslation";

export default function BrandCard({ className }: BrandCardProps) {
  // Hooks

  const { t } = useTranslation();

  return (
    <div
      className={cn("flex flex-col items-center gap-4 text-center", className)}
    >
      <div className="h-20 w-20 xl:h-24 xl:w-24 shrink-0 rounded-full bg-linear-to-br from-amber-400 to-orange-500 p-1 shadow-lg">
        <div className="h-full w-full rounded-full bg-white p-2">
          <Image
            src="/images/png/logo.png"
            alt="Logo"
            width={80}
            height={80}
            unoptimized
            className="h-full w-full object-contain"
            enableLoading={false}
            loading="eager"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold tracking-tight bg-linear-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent xl:text-4xl 2xl:text-5xl">
        {t(process.env.NEXT_PUBLIC_LICENSE_NAME || "")}
      </h1>
      <p className="text-xs text-amber-700/70 xl:text-sm font-medium">
        {t("right_sidebar_description")}
      </p>
    </div>
  );
}
