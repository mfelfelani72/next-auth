"use client"; // این کامپوننت client-side است
import { useRouter, usePathname } from "next/navigation";

interface LangSwitcherProps {
  currentLang: string;
}

export default function LangSwitcher({ currentLang }: LangSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const newLang = currentLang === "en" ? "fa" : "en";
    const newPath = pathname.replace(`/${currentLang}/`, `/${newLang}/`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLang}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {currentLang === "en" ? "فارسی" : "English"}
    </button>
  );
}
