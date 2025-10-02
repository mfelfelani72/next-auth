/*
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-02 06:53:53
 * @Description:
 */

// Components

import Login from "@/components/Login";

// Functions

import { getDictionary } from "@/dictionaries";

// Interfaces

import { LangInterface } from "@/Interfaces";

export default async function LoginPage({ params }: LangInterface) {
  // Constants
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};

  // Functions
  const dict = await getDictionary(lang);

  return (
    <>
      <Login
        dict={await dict}
        lang={lang}
        loginRoute={"/api/auth/login"}
        // onGoogleLogin={onGoogleLogin}
        // UiComponent={NewUiLogin}
        // UiComponent={New2}
      />
    </>
  );
}
