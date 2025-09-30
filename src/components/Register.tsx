"use client";

import { useState } from "react";
import UiRegister from "./demo/UiRegister";

interface RegisterProps {
  onSubmitServer: (formData: FormData) => void;
}

export default function Register() {
  const [errors, setErrors] = useState<any>({});
  const [message, setMessage] = useState<string | null>(null);

  const validate = (formData: FormData) => {
    const newErrors: any = {};
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (formData: FormData) => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setMessage(null);
      //   onSubmitServer(formData);
    } else {
      setMessage("Please fix the errors below.");
    }
  };

  return (
    <UiRegister onSubmit={handleSubmit} errors={errors} message={message} />
  );
}
