import { currentDateString, formatDate } from "@/utils/date";
import { QrGenerate } from "./components/qr-generate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asistencia QR",
};

export default function AsistenciaQr() {
  const dataQr = JSON.stringify({
    idUser: 1,
    date: currentDateString(),
    time: formatDate(new Date(), "HH:mm"),
  });

  return (
    <section>
      <QrGenerate dataQr={dataQr} />
    </section>
  );
}
