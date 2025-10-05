/*
 * @Author: Arya
 * @Email: c63.helix@gmail.com
 * @Team:
 * @Date: 2025-10-05 13:49
 * @Description:
 */

// Components

import ForgotPassword from "@/components/ForgotPassword";

// Functions

import { getDictionary } from "@/dictionaries";

// Interfaces

import { LangInterface } from "@/Interfaces";

export default async function ForgotPasswordPage({ params }: LangInterface) {
  // Constants
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};

  // Functions
  const dict = await getDictionary(lang);

  return (
    <>
      <ForgotPassword
        dict={await dict}
        lang={lang}
        loginRoute={"/api/auth/forgotpassword"}
        // registerRoute={"/api/auth/register"}
        // onGoogleRegister={onGoogleRegister}
        // UiComponent={CustomUiRegister}
      />
    </>
  );
}
