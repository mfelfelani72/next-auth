"use client";

import { Shield, Bolt, Eye } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function LoginDetails() {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, label: t("encrypted"), color: "text-emerald-600" },
    { icon: Bolt, label: t("fast"), color: "text-amber-600" },
    { icon: Eye, label: t("protected"), color: "text-sky-600" },
  ];

  return (
    <div className="px-1">
      <div className="flex gap-6">
        {features.map(({ icon: Icon, label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${color} xl:h-5 xl:w-5`} />
            <span className="text-xs text-gray-500 xl:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}