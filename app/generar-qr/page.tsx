import { currentDateString, formatDate } from "@/utils/date";
import QrCode from "react-qr-code";

export default function GenerarQr() {
  const dataQr = JSON.stringify({
    idUser: 1,
    date: currentDateString(),
    time: formatDate(new Date(), "HH:mm"),
  });

  return (
    <div>
      <QrCode value={dataQr} />
    </div>
  );
}
