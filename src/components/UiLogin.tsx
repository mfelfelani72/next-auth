"use client";
import Link from "next/link";

type Dict = {
  login: { title: string; button: string };
  register: { title: string; button: string };
};

export default function UiLogin({ dict, lang }: { dict: Dict; lang: string }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-900 text-white">
      <div className="p-6 bg-white/20 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">{dict.login.title}</h1>
        <Link
          href={`/${lang}/register`}
          className="bg-purple-700 px-4 py-2 rounded inline-block"
        >
          {dict.login.button}
        </Link>
      </div>
    </main>
  );
}
