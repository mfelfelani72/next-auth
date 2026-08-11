import { createMetadata } from "@/utilities/app/metadataHelper";
import { languages, type Lang } from "@/configs/language";
import Login from "@/components/demo/auth/Login";
import TwoColumnLayout from "@/components/demo/auth/layouts/TwoColumn";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createMetadata(await params, "login");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang in languages ? (resolvedParams.lang as Lang) : "en";

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen"
      style={{ backgroundImage: `url('/images/jpg/auth.jpeg')` }}
    >
      <Login
        loginRoute="/api/auth/login"
        UiComponent={TwoColumnLayout}
        className="w-full max-w-none px-0"
      />
    </div>
  );
}