import { auth } from "@/lib/next-auth";
import { DrawerAdmin } from "./components/drawer-admin";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user?.role !== "admin") return redirect("/login");

  return (
    <main className="p-4">
      <DrawerAdmin />
      <section className="mx-16 my-4">{children}</section>
    </main>
  );
}
