import React from "react";
import type { RegisterInterface, ClientRegisterInterface } from "../Interfaces";
export default function Register({ registerRoute, onGoogleRegister, UiComponent, dict, lang, }: RegisterInterface & {
    UiComponent?: React.ComponentType<ClientRegisterInterface>;
}): import("react/jsx-runtime").JSX.Element;
