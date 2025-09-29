import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

import Login from "@/components/login";

export default function Page() {
  return (
    <>
      <Login />;
    </>
  );
}
