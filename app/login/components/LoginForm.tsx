"use client";

import { Form, Input, Button } from "@heroui/react";
import { signIn, getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const LoginForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const dni = formData.get("dni") as string;
    const password = formData.get("password") as string;

    await signIn("credentials", {
      dni,
      password,
      redirect: false,
    });

    const session = await getSession();

    if (session?.user?.role === "admin") return redirect("/escanear-qr");
    if (session?.user?.role === "user") return redirect("/asistencia-qr");
  };

  return (
    <Form className="w-80" onSubmit={handleSubmit}>
      <Input
        isRequired
        name="dni"
        type="text"
        label="DNI"
        className="mb-4"
        labelPlacement="outside"
        placeholder="12345678"
        errorMessage="El DNI debe ser exactamente de 8 caracteres numéricos"
        pattern="\d{8}" // Validación de solo números y longitud exacta de 8 caracteres
      />
      <Input
        isRequired
        name="password"
        type="password"
        className="mb-3"
        label="Contraseña"
        placeholder="********"
        labelPlacement="outside"
        errorMessage="La contraseña debe tener al menos 6 caracteres"
        minLength={6} // Validación de longitud mínima de 6 caracteres
      />
      <Button type="submit" variant="bordered" className="w-full">
        Ingresar
      </Button>
    </Form>
  );
};
