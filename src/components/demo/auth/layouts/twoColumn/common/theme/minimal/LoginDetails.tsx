/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

"use client";

// Components

import { Shield, Bolt, Eye } from "lucide-react";

// Hooks

import { useTranslation } from "@/hooks/useTranslation";

export default function LoginDetails() {
  // Hooks

  const { t } = useTranslation();

  // Constants

  const features = [
    { icon: Shield, label: t("encrypted"), color: "text-emerald-600" },
    { icon: Bolt, label: t("fast"), color: "text-amber-600" },
    { icon: Eye, label: t("protected"), color: "text-sky-600" },
  ];

  return (
    <div className="px-1">
      <div className="flex gap-6">
        {features.map(({ icon: Icon, label, color }) => (
          <div key={label} className="flex items-center gap-2 group">
            <div
              className={`rounded-full bg-amber-50/80 p-1.5 ${color} transition-all group-hover:scale-110 group-hover:bg-amber-100/80`}
            >
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
