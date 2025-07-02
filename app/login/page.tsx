"use client";
import Image from "next/image";
import { Form, Input, Button } from "@heroui/react";

export default function LoginPage() {
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
      <Form className="w-80">
        <Input
          isRequired
          name="email"
          type="email"
          label="Correo"
          className="mb-4"
          labelPlacement="outside"
          placeholder="jose@gmail.com"
          errorMessage="El correo es requerido"
        />
        <Input
          isRequired
          name="password"
          type="password"
          className="mb-3"
          label="Contraseña"
          placeholder="********"
          labelPlacement="outside"
          errorMessage="La contraseña es requerida"
        />
        <Button type="submit" variant="bordered" className="w-full">
          Ingresar
        </Button>
      </Form>
    </main>
  );
}
