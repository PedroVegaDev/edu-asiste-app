"use client";

import { signOut } from "next-auth/react";
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
import Image from "next/image";

export const DrawerAdmin = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleSignOut = () => {
    onClose();
    signOut({ redirect: true, redirectTo: "/login" });
  };

  return (
    <>
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
          <DrawerHeader>
            <Image
              priority
              width={200}
              height={52}
              src="/logo.png"
              alt="EduAsiste Logo"
              className="dark:invert"
            />
          </DrawerHeader>
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
          <DrawerFooter>
            <Button
              variant="light"
              color="danger"
              onPress={handleSignOut}
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 12q-.425 0-.712-.288Q11 11.425 11 11V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v8q0 .425-.287.712Q12.425 12 12 12Zm0 9q-1.875 0-3.512-.712q-1.638-.713-2.85-1.926q-1.213-1.212-1.926-2.85Q3 13.875 3 12q0-1.575.513-3.012Q4.025 7.55 4.95 6.4q.275-.35.7-.338q.425.013.75.338q.275.275.25.675q-.025.4-.275.75q-.65.875-1.012 1.937Q5 10.825 5 12q0 2.925 2.038 4.962Q9.075 19 12 19t4.962-2.038Q19 14.925 19 12q0-1.175-.362-2.263q-.363-1.087-1.038-1.962q-.25-.325-.275-.713q-.025-.387.25-.662q.3-.3.725-.313q.425-.012.7.313q.95 1.15 1.475 2.588Q21 10.425 21 12q0 1.875-.712 3.512q-.713 1.638-1.925 2.85q-1.213 1.213-2.85 1.926Q13.875 21 12 21Z"
                  />
                </svg>
              }
            >
              Cerrar sesión
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
