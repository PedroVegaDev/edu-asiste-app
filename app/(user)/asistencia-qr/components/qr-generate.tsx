"use client";

import { Button } from "@heroui/react";
import { signOut } from "next-auth/react";
import QrCode from "react-qr-code";

interface Props {
  dataQr: string;
}

export const QrGenerate = ({ dataQr }: Props) => {
  return (
    <>
      <QrCode value={dataQr} />
      <Button
        variant="light"
        color="danger"
        onPress={() => {
          signOut({ redirect: true, redirectTo: "/login" });
        }}
      >
        Cerrar sesión
      </Button>
    </>
  );
};
