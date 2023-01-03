import { endOfMonth, getDay, startOfMonth, getDate, getYear, getMonth } from "date-fns";

type MonthTableRowType = Array<number | false>;

export const isBrowser = () => {
  return typeof window !== "undefined";
};

export const getCurrentMonthAndYear = () => {
  const today = new Date();
  return [getYear(today), getMonth(today)];
};
