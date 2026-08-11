export declare class AuthCore {
    private config;
    constructor();
    login(email: string, password: string): Promise<{
        user: {
            email: string;
        };
        token: string;
    }>;
}
export declare const auth: AuthCore;
