import React from "react";
import type { LoginProps } from "../types";
interface LoginComponentProps {
    onSubmit: (formData: FormData) => void;
    errors?: {
        username?: string;
        password?: string;
    };
    message?: string | null;
}
export default function Login({ loginRoute, UiComponent, }: LoginProps & {
    UiComponent?: React.ComponentType<LoginComponentProps>;
}): React.JSX.Element;
export {};
