import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import type { Metadata } from "next";
import { auth } from "@/lib/next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage() {
  const session = await auth();

  if (session?.user?.role === "admin") return redirect("/escanear-qr");
  if (session?.user?.role === "user") return redirect("/asistencia-qr");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        priority
        width={420}
        height={110}
        src="/logo.png"
        alt="EduAsiste Logo"
        className="dark:invert scale-75 mb-4"
      />

      <LoginForm />
    </main>
  );
}
