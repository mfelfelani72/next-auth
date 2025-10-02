import React from "react";
import type { LoginInterface, ClientLoginInterface } from "../Interfaces";
export default function Login({ loginRoute, onGoogleLogin, UiComponent, dict, lang, }: LoginInterface & {
    UiComponent?: React.ComponentType<ClientLoginInterface>;
}): import("react/jsx-runtime").JSX.Element;
