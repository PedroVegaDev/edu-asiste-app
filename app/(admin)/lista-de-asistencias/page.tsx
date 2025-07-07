import { Metadata } from "next";
import { AttendanceTable } from "./components/attendance-table";

export const metadata: Metadata = {
  title: "Lista de Asistencias",
};

export default function ListaDeAsistenciasPage() {
  return (
    <>
      <h1 className="mb-4">ListaDeAsistenciasPage</h1>
      <AttendanceTable />
    </>
  );
}
