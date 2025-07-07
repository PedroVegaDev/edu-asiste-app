import { auth } from "@/lib/next-auth";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user?.role !== "user") return redirect("/login");

  return <main>{children}</main>;
}
