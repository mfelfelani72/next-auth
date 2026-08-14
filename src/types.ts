export interface LoginComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { email?: string; password?: string };
  message?: string | null;
  loading?: boolean;
  theme?: string;
  variant?: string;
}

export interface LoginMetadata {
  title?: string;
  description?: string;
  logoUrl?: string;
}

export interface LoginProps {
  metadata?: LoginMetadata;
  theme?: string;
  layout?: string;
  className?: string;
  onGoogleLogin?: () => void;
}

export interface RegisterComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  message?: string | null;
  loading?: boolean;
  theme?: string;
  variant?: string;
}

export interface RegisterMetadata {
  title?: string;
  description?: string;
  logoUrl?: string;
}

export interface RegisterProps {
  metadata?: RegisterMetadata;
  theme?: string;
  layout?: string;
  className?: string;
  onGoogleRegister?: () => void;
}
