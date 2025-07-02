"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Listbox,
  ListboxItem,
} from "@heroui/react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <main className="p-4">
      <Button isIconOnly aria-label="Abrir menú" onPress={onOpen}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
          />
        </svg>
      </Button>

      <Drawer
        size="xs"
        isOpen={isOpen}
        backdrop="opaque"
        placement="left"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <DrawerHeader>Edu Asiste</DrawerHeader>
          <DrawerBody>
            <Listbox aria-label="links" onAction={onClose}>
              <ListboxItem key="escanear-qr" href="/escanear-qr">
                Escanear QR
              </ListboxItem>
              <ListboxItem
                key="lista-de-asistencias"
                href="/lista-de-asistencias"
              >
                Lista de asistencias
              </ListboxItem>
              <ListboxItem key="lista-de-empleados" href="/lista-de-empleados">
                Lista de empleados
              </ListboxItem>
              <ListboxItem key="horarios" href="/horarios">
                Horarios
              </ListboxItem>
            </Listbox>
          </DrawerBody>
          <DrawerFooter>info@eduasiste.com</DrawerFooter>
        </DrawerContent>
      </Drawer>

      <section className="mx-16 my-4">{children}</section>
    </main>
  );
}
