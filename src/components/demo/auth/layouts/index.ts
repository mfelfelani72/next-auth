/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-04 11:48:20
 * @Description:
 */

// Components

import twoColumn from "./twoColumn";

export const LAYOUTS = {
  twoColumn,
} as const;

export type LayoutKey = keyof typeof LAYOUTS;
