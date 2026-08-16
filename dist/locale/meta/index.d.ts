/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2026-06-23
 * @Description: Load meta files dynamically
 */
export declare function getMeta(lang: string): Promise<{
    meta: any;
    meta_home: any;
    meta_login: any;
    meta_register: any;
    meta_forgotPassword: any;
}>;
