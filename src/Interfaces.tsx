/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 07:56:22
 * @Description:
 */

// Interfaces

export interface LoginMetadataInterface {
  title?: string;
  description?: string;
  logoUrl?: string;
}

export interface LangInterface {
  params: { lang?: string } | Promise<{ lang?: string }>;
}

export interface ClientLoginInterface {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

export interface LoginInterface {
  loginRoute: string;
  metadata?: LoginMetadataInterface;
  onGoogleLogin?: () => void;
  dict: any;
  lang: string;
  UiComponent?: React.ComponentType<ClientLoginInterface>;
}
