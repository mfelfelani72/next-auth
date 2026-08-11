/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-18 14:06:46
 * @Description:
 */
import { cookies } from "next/headers";
const detectComponentsResponsive = async (MobileComponent, IpadComponent, DesktopComponent) => {
    var _a;
    const cookieStore = await cookies();
    const deviceType = (_a = cookieStore.get("device-type")) === null || _a === void 0 ? void 0 : _a.value;
    switch (deviceType) {
        case "mobile":
            return MobileComponent;
        case "ipad":
            return IpadComponent;
        case "desktop":
            return DesktopComponent;
        default:
            return "Unknown";
    }
};
export default detectComponentsResponsive;
