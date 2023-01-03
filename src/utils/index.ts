import { endOfMonth, getDay, startOfMonth, getDate, getYear, getMonth } from "date-fns";

type MonthTableRowType = Array<number | false>;

export const isBrowser = () => {
  return typeof window !== "undefined";
};

export const getCurrentMonthAndYear = () => {
  const today = new Date();
  return [getYear(today), getMonth(today)];
};

export const getYearAndMonth = (year: number, month: number) => {
  const language = isBrowser() ? navigator.language : "en-US";
  return new Intl.DateTimeFormat(language, { year: "numeric", month: "long" }).format(
    new Date(year, month - 1),
  );
};
