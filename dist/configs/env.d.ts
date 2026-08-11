import { z } from "zod";
declare const serverSchema: z.ZodObject<{
    AUTH_SECRET: z.ZodString;
    DATABASE_URL: z.ZodString;
    NEXTAUTH_URL: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const clientSchema: z.ZodObject<{
    NEXT_PUBLIC_APP_URL: z.ZodString;
    NEXT_PUBLIC_API_URL: z.ZodString;
}, z.core.$strip>;
export type ServerEnv = z.infer<typeof serverSchema>;
export type ClientEnv = z.infer<typeof clientSchema>;
declare class EnvManager {
    private _server;
    private _client;
    private _serverValidationErrors;
    private _clientValidationErrors;
    private _initialized;
    private validate;
    get server(): ServerEnv;
    get client(): ClientEnv;
    isServerValid(): boolean;
    isClientValid(): boolean;
    getServerErrors(): z.ZodError | null;
    getClientErrors(): z.ZodError | null;
    reset(): void;
}
export declare const env: EnvManager;
export declare function checkEnv(): boolean;
export {};
