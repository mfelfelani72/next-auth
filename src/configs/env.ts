// src/config/env.ts
import { z } from "zod";

// Define schemas
const serverSchema = z.object({
  AUTH_SECRET: z.string().min(32, "AUTH_SECRET must be at least 32 characters"),
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  NEXTAUTH_URL: z.string().url().optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url("NEXT_PUBLIC_APP_URL must be a valid URL"),
  NEXT_PUBLIC_API_URL: z.string().url("NEXT_PUBLIC_API_URL must be a valid URL"),
});

// Type inference
export type ServerEnv = z.infer<typeof serverSchema>;
export type ClientEnv = z.infer<typeof clientSchema>;

// Validation result type
type ValidationResult<T> = 
  | { success: true; data: T }
  | { success: false; errors: z.ZodError };

// Helper to safely validate
function validateEnv<T>(schema: z.ZodSchema<T>, env: Record<string, string | undefined>): ValidationResult<T> {
  const result = schema.safeParse(env);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
}

// Lazy validation - only runs when accessed
class EnvManager {
  private _server: ServerEnv | null = null;
  private _client: ClientEnv | null = null;
  private _serverValidationErrors: z.ZodError | null = null;
  private _clientValidationErrors: z.ZodError | null = null;
  private _initialized = false;

  private validate() {
    if (this._initialized) return;

    // Validate server env
    const serverResult = validateEnv(serverSchema, process.env);
    if (serverResult.success) {
      this._server = serverResult.data;
    } else {
      this._serverValidationErrors = serverResult.errors;
    }

    // Validate client env
    const clientResult = validateEnv(clientSchema, process.env);
    if (clientResult.success) {
      this._client = clientResult.data;
    } else {
      this._clientValidationErrors = clientResult.errors;
    }

    this._initialized = true;
  }

  get server(): ServerEnv {
    this.validate();
    if (this._server) {
      return this._server;
    }
    throw new Error(
      `Missing or invalid server environment variables:\n` +
      this._serverValidationErrors?.issues.map(i => 
        `  - ${i.path.join('.')}: ${i.message}`
      ).join('\n') +
      `\n\nPlease add these to your .env.local file.`
    );
  }

  get client(): ClientEnv {
    this.validate();
    if (this._client) {
      return this._client;
    }
    throw new Error(
      `Missing or invalid client environment variables:\n` +
      this._clientValidationErrors?.issues.map(i => 
        `  - ${i.path.join('.')}: ${i.message}`
      ).join('\n') +
      `\n\nPlease add these to your .env.local file.`
    );
  }

  // Check if all env vars are valid without throwing
  isServerValid(): boolean {
    this.validate();
    return this._server !== null;
  }

  isClientValid(): boolean {
    this.validate();
    return this._client !== null;
  }

  // Get validation errors without throwing
  getServerErrors(): z.ZodError | null {
    this.validate();
    return this._serverValidationErrors;
  }

  getClientErrors(): z.ZodError | null {
    this.validate();
    return this._clientValidationErrors;
  }

  // Reset validation (useful for testing)
  reset() {
    this._initialized = false;
    this._server = null;
    this._client = null;
    this._serverValidationErrors = null;
    this._clientValidationErrors = null;
  }
}

// Singleton instance
export const env = new EnvManager();

// Helper for package consumers to check their env
export function checkEnv() {
  const errors: string[] = [];

  if (!env.isServerValid()) {
    const serverErrors = env.getServerErrors();
    if (serverErrors) {
      errors.push('Server environment variables:');
      serverErrors.issues.forEach(issue => {
        errors.push(`  - ${issue.path.join('.')}: ${issue.message}`);
      });
    }
  }

  if (!env.isClientValid()) {
    const clientErrors = env.getClientErrors();
    if (clientErrors) {
      errors.push('Client environment variables:');
      clientErrors.issues.forEach(issue => {
        errors.push(`  - ${issue.path.join('.')}: ${issue.message}`);
      });
    }
  }

  if (errors.length > 0) {
    console.warn('⚠️  Environment variable validation issues found:');
    console.warn(errors.join('\n'));
    console.warn('\nPlease add the required variables to your .env.local file');
    return false;
  }

  console.log('✅ All environment variables are valid!');
  return true;
}