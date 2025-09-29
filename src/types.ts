export interface LoginMetadata {
  title?: string;
  description?: string;
  logoUrl?: string;
}

export interface LoginProps {
  loginRoute: string;
  metadata?: LoginMetadata;
  onGoogleLogin?: () => void;
}
