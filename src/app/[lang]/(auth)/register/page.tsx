"use client";

import Register from "@/components/Register";

export default function RegisterPage() {
  // const handleSubmitServer = async (formData: FormData) => {
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const confirmPassword = formData.get("confirmPassword");

  //   console.log({ name, email, password, confirmPassword });
  //   // Logic to create user or call backend
  // };

  return (
    <Register
    // onSubmitServer={handleSubmitServer}
    />
  );
}
