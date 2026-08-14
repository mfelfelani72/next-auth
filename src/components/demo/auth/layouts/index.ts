
// src/components/demo/auth/layouts/index.ts
import TwoColumn from "./TwoColumn";


export const LAYOUTS = {
  TwoColumn,
} as const;

export type LayoutKey = keyof typeof LAYOUTS;