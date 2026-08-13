"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "@/components/base/Image";
import { cn } from "forma-li";

interface BrandCardProps {
  className?: string;
}

export default function BrandCard({ className }: BrandCardProps) {
  const { t } = useTranslation();

  return (
    <div className={cn("flex flex-col items-center gap-4 text-center", className)}>
      <div className="h-20 w-20 xl:h-24 xl:w-24 shrink-0">
        <Image
          src="/images/jpg/logo.png"
          alt="Logo"
          width={80}
          height={80}
          unoptimized
          className="h-full w-full object-contain"
          enableLoading={false}
          loading="eager"
        />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-cyan-800 xl:text-4xl 2xl:text-5xl">
        {t(process.env.NEXT_PUBLIC_LICENSE_NAME || "")}
      </h1>
      <p className="text-xs text-Neutral-400 xl:text-sm">
        {t("right_sidebar_description")}
      </p>
    </div>
  );
}