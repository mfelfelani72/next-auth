export interface LoginComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { email?: string; password?: string };
  message?: string | null;
}

export interface LoginProps {
  loginRoute: string;
  UiComponent?: React.ComponentType<LoginComponentProps>;
  className?: string;
}