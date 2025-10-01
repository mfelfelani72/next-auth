"use client";

import React, { useState } from "react";
import Link from "next/link";
// Components
import UiForgotpassword from "./demo/UiForgotpassword";

interface LoginComponentProps {
  onSubmit: (formData: FormData) => void;
  errors?: { username?: string; password?: string };
  message?: string | null;
}

const ForgotPassword: React.FC = () => {
  // states
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;

    // fake success
    console.log("submitted email:", email);
    setMessage("Check your email for reset instructions.");
    setErrors({});
  };
  return (
    <>
      <UiForgotpassword
        onSubmit={handleSubmit}
        errors={errors}
        message={message}
      />
    </>
  );
};

export default ForgotPassword;
