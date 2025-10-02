/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:53:53
 * @Description:
 */

// Components

import Register from "@/components/Register";

// Functions

import { getDictionary } from "@/dictionaries";

// Interfaces

import { LangInterface } from "@/Interfaces";

export default async function RegisterPage({ params }: LangInterface) {
  // Constants
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};
  const dict = await getDictionary(lang);

  return (
    <>
      <Register
        dict={await dict}
        lang={lang}
        loginRoute={"/api/auth/login"}
        // onGoogleLogin={onGoogleLogin}
        // UiComponent={NewUiLogin}
      />
      ;
    </>
  );
}
