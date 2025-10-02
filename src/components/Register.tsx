/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:57:46
 * @Description:
 */
"use client";

import { useState } from "react";
import UiRegister from "./demo/UiRegister";

// Interfaces
import type { LoginInterface, ClientLoginInterface } from "../Interfaces";

export default function Register({
  loginRoute,
  onGoogleLogin,
  UiComponent,
  dict,
  lang,
}: LoginInterface & {
  UiComponent?: React.ComponentType<ClientLoginInterface>;
}) {
  const [errors, setErrors] = useState<any>({});
  const [message, setMessage] = useState<string | null>(null);

  const validate = (formData: FormData) => {
    const newErrors: any = {};
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    // Name validation
    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (formData: FormData) => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setMessage(null);
      // onSubmitServer(formData);
      console.log("Form submitted successfully:", {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      });
    } else {
      setMessage("Please fix the errors below.");
    }
  };

  return (
    <UiRegister onSubmit={handleSubmit} errors={errors} message={message} />
  );
}
