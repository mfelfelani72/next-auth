interface ClientLoginProps {
    onSubmit: (formData: FormData) => void;
    errors?: {
        username?: string;
        password?: string;
    };
    message?: string | null;
}
export default function UiLogin({ onSubmit, errors, message, }: ClientLoginProps): import("react/jsx-runtime").JSX.Element;
export {};
