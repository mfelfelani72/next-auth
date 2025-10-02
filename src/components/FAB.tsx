"use client";

import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  CSSProperties,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface LangSwitcherProps {
  currentLang: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  children?: string;
}

export default function SmartRadialMenu({ currentLang }: LangSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // تنظیمات
  const mainSize = 70;
  const itemSize = 56;
  const itemRadius = 100;
  const animationDuration = 500;
  const staggerDelay = 100;

  const [menuState, setMenuState] = useState<
    "closed" | "main" | "language" | "theme"
  >("closed");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // پالت رنگ‌ها
  const colorPalette = {
    light: {
      primary: "#7C3AED",
      secondary: "#06B6D4",
      accent: "#10B981",
      background: "#FFFFFF",
      surface: "#F8FAFC",
      text: "#1E293B",
      border: "rgba(124, 58, 237, 0.1)",
      shadow:
        "0 20px 25px -5px rgba(124, 58, 237, 0.15), 0 10px 10px -5px rgba(124, 58, 237, 0.1)",
      innerShadow:
        "inset 2px 2px 5px rgba(124, 58, 237, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.8)",
      itemShadow:
        "0 8px 20px rgba(124, 58, 237, 0.15), 0 2px 6px rgba(124, 58, 237, 0.1)",
      overlay: "rgba(15, 23, 42, 0.6)",
    },
    dark: {
      primary: "#8B5CF6",
      secondary: "#22D3EE",
      accent: "#34D399",
      background: "#1E293B",
      surface: "#334155",
      text: "#F1F5F9",
      border: "rgba(139, 92, 246, 0.15)",
      shadow:
        "0 20px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(139, 92, 246, 0.15)",
      innerShadow:
        "inset 2px 2px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(139, 92, 246, 0.05)",
      itemShadow:
        "0 8px 20px rgba(139, 92, 246, 0.2), 0 2px 6px rgba(139, 92, 246, 0.15)",
      overlay: "rgba(2, 6, 23, 0.7)",
    },
  };

  const currentColors = colorPalette[theme];

  // آیکون‌ها
  const GlobeIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const SunIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const MoonIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const PaletteIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );

  const CloseIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const BackIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );

  // ساختار منو
  const menuStructure = {
    main: [
      {
        id: "language",
        label: "Language",
        icon: <GlobeIcon />,
        children: "language",
      },
      {
        id: "theme",
        label: "Theme",
        icon: <PaletteIcon />,
        children: "theme",
      },
    ],
    language: [
      {
        id: "en",
        label: "English",
        icon: <span style={{ fontWeight: "bold", fontSize: "14px" }}>EN</span>,
        onClick: () => {
          const newPath = pathname.replace(`/${currentLang}`, `/en`);
          router.push(newPath);
          setMenuState("closed");
        },
      },
      {
        id: "fa",
        label: "فارسی",
        icon: <span style={{ fontWeight: "bold", fontSize: "14px" }}>FA</span>,
        onClick: () => {
          const newPath = pathname.replace(`/${currentLang}`, `/fa`);
          router.push(newPath);
          setMenuState("closed");
        },
      },
    ],
    theme: [
      {
        id: "light",
        label: "Light Mode",
        icon: <SunIcon />,
        onClick: () => {
          setTheme("light");
          document.documentElement.classList.remove("dark");
          setMenuState("closed");
        },
      },
      {
        id: "dark",
        label: "Dark Mode",
        icon: <MoonIcon />,
        onClick: () => {
          setTheme("dark");
          document.documentElement.classList.add("dark");
          setMenuState("closed");
        },
      },
    ],
  };

  // موقعیت آیتم‌ها
  const itemPositions = useMemo(() => {
    if (!mounted || menuState === "closed") return [];

    const currentItems = menuStructure[menuState as keyof typeof menuStructure];
    const angleStep = (2 * Math.PI) / currentItems.length;
    const positions = [];

    for (let i = 0; i < currentItems.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = Math.cos(angle) * itemRadius;
      const y = Math.sin(angle) * itemRadius;

      positions.push({ x, y });
    }

    return positions;
  }, [menuState, mounted]);

  // موقعیت دکمه اصلی
  const mainButtonPosition = useMemo(() => {
    if (typeof window === "undefined") return { bottom: 40, right: 40 };

    return menuState === "closed"
      ? { bottom: 40, right: 40 }
      : {
          bottom: window.innerHeight / 2 - mainSize / 2,
          right: window.innerWidth / 2 - mainSize / 2,
        };
  }, [menuState]);

  // مدیریت کلیک روی آیتم - FIXED
  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      // باز کردن زیرمنو
      setMenuState(item.children as any);
    } else if (item.onClick) {
      // اجرای اکشن
      item.onClick();
    }
  };

  // مدیریت بازگشت
  const handleBack = () => {
    if (menuState === "language" || menuState === "theme") {
      setMenuState("main");
    } else {
      setMenuState("closed");
    }
  };

  // مدیریت کلیک روی overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuState("closed");
  };

  // آیتم‌های فعال
  const activeItems =
    menuState === "closed"
      ? []
      : menuStructure[menuState as keyof typeof menuStructure];

  return (
    <>
      {/* Overlay */}
      {menuState !== "closed" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: currentColors.overlay,
            zIndex: 9998,
            backdropFilter: "blur(4px)",
          }}
          onClick={handleOverlayClick}
        />
      )}

      {/* منوی اصلی */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          ...mainButtonPosition,
          width: mainSize,
          height: mainSize,
          zIndex: 9999,
          transition: `all ${animationDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        }}
      >
        {/* منوهای مدور */}
        {activeItems.map((item, index) => {
          const pos = itemPositions[index];
          if (!pos) return null;

          const isOpen = menuState !== "closed";
          const transformX = mainSize / 2 - itemSize / 2 + pos.x;
          const transformY = mainSize / 2 - itemSize / 2 + pos.y;

          return (
            <button
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleItemClick(item);
              }}
              onMouseDown={(e) => e.preventDefault()} // جلوگیری از رفتارهای ناخواسته
              style={{
                position: "absolute",
                width: itemSize,
                height: itemSize,
                left: mainSize / 2 - itemSize / 2,
                top: mainSize / 2 - itemSize / 2,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                boxShadow: currentColors.itemShadow,
                cursor: "pointer",
                border: `2px solid ${currentColors.border}`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen
                  ? `translate(${pos.x}px, ${pos.y}px) scale(1)`
                  : `translate(0px, 0px) scale(0.5)`,
                transition: `all ${animationDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                transitionDelay: isOpen ? `${index * staggerDelay}ms` : "0ms",
                color: "white",
                zIndex: 1,
              }}
              aria-label={item.label}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              >
                {item.icon}
              </div>
            </button>
          );
        })}

        {/* دکمه اصلی */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (menuState === "closed") {
              setMenuState("main");
            } else {
              handleBack();
            }
          }}
          onMouseDown={(e) => e.preventDefault()}
          style={{
            width: mainSize,
            height: mainSize,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
            boxShadow: currentColors.shadow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            outline: "none",
            border: "none",
            transition: `all ${animationDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
            transform:
              menuState !== "closed" ? "rotate(90deg)" : "rotate(0deg)",
            zIndex: 2,
          }}
          aria-label={menuState === "closed" ? "Open menu" : "Close menu"}
        >
          <div
            style={{
              width: mainSize - 12,
              height: mainSize - 12,
              borderRadius: "50%",
              background: currentColors.surface,
              boxShadow: currentColors.innerShadow,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: currentColors.primary,
              fontWeight: "bold",
            }}
          >
            {menuState === "closed" ? (
              <PaletteIcon />
            ) : menuState === "main" ? (
              <CloseIcon />
            ) : (
              <BackIcon />
            )}
          </div>
        </button>
      </div>
    </>
  );
}
