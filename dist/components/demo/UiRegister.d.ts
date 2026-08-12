interface UiRegisterProps {
    onSubmit: (formData: FormData) => void;
    errors?: {
        name?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    };
    message?: string | null;
}
export default function UiRegister({ onSubmit, errors, message, }: UiRegisterProps): import("react").JSX.Element;
export {};
