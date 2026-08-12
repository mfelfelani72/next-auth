/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-18 14:06:46
 * @Description:
 */
import { type ComponentType } from "react";
declare const detectComponentsResponsive: (MobileComponent: ComponentType<any>, IpadComponent: ComponentType<any>, DesktopComponent: ComponentType<any>) => Promise<ComponentType<any> | string>;
export default detectComponentsResponsive;
