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
  variant: string;
  UiComponent?: React.ComponentType<LoginComponentProps>;
  className?: string;
  onGoogleLogin?: () => void;
}
