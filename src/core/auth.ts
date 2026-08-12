// src/core/auth.ts
import { env } from '../configs/env';

export class AuthCore {
  private config: {
    secret: string;
    databaseUrl: string;
    appUrl: string;
    apiUrl: string;
  };

  constructor() {
    try {
      // Accessing env.server will trigger validation
      const server = env.server;
      const client = env.client;
      
      this.config = {
        secret: server.AUTH_SECRET,
        databaseUrl: server.DATABASE_URL,
        appUrl: client.NEXT_PUBLIC_APP_URL,
        apiUrl: client.NEXT_PUBLIC_API_URL,
      };
    } catch (error) {
      // Re-throw with clear message
      if (error instanceof Error) {
        throw new Error(`Auth package initialization failed: ${error.message}`);
      }
      throw error;
    }
  }

  async login(email: string, password: string) {
    // Your login logic
    console.log('Using config:', {
      appUrl: this.config.appUrl,
      apiUrl: this.config.apiUrl,
    });
    return { user: { email }, token: 'fake-token' };
  }
}

export const auth = new AuthCore();