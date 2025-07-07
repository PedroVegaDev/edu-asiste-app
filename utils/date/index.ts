import { format } from "date-fns";
import { es } from "date-fns/locale";

export const currentDateString = () => formatDate(new Date());
export const currentTimeString = () => formatDate(new Date(), "HH:mm:ss");

export function formatDate(
  date: Date,
  formatString = "dd/MM/yyyy",
  locale = es
) {
  return format(date, formatString, { locale });
}
