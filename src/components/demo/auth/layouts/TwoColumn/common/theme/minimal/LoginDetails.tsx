"use client";

import { Shield, Bolt, Eye } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function LoginDetails() {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, label: t("encrypted"), color: "text-amber-600" },
    { icon: Bolt, label: t("fast"), color: "text-orange-500" },
    { icon: Eye, label: t("protected"), color: "text-amber-700" },
  ];

  return (
    <div className="px-1">
      <div className="flex gap-6">
        {features.map(({ icon: Icon, label, color }) => (
          <div key={label} className="flex items-center gap-2 group">
            <div className={`rounded-full bg-amber-50/80 p-1.5 ${color} transition-all group-hover:scale-110 group-hover:bg-amber-100/80`}>
              <Icon className={`h-3.5 w-3.5 ${color} xl:h-4 xl:w-4`} />
            </div>
            <span className="text-xs font-medium text-amber-800/80 xl:text-sm group-hover:text-amber-900 transition-colors">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}