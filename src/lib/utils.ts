import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertDateFormat = (date: string) => {
  const beforeDate = moment(date, "YYYY-MM-DDTHH:mm");
  const afterDate = beforeDate.format("YYYY-MM-DD");
  return afterDate;
};
