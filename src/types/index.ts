export interface LoginComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { email?: string; password?: string };
  message?: string | null;
  theme?: string;
}

export interface LoginProps {
  layout: string;
  theme?: string;
  className?: string;
}

export interface RegisterComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { email?: string; password?: string };
  message?: string | null;
  theme?: string;
}

export interface RegisterProps {
  layout: string;
  theme?: string;
  className?: string;
}
