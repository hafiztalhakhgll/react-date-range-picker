import { endOfMonth, getDay, startOfMonth, getDate, getYear, getMonth } from "date-fns";

export const isBrowser = () => {
  return typeof window !== "undefined";
};

export const getCurrentMonthAndYear = () => {
  const today = new Date();
  return [getMonth(today), getYear(today)];
};

export const getYearAndMonth = (month: number, year: number) => {
  const language = isBrowser() ? navigator.language : "en-US";
  return new Intl.DateTimeFormat(language, { year: "numeric", month: "long" }).format(
    new Date(year, month - 1),
  );
};

export const getWeekDays = (locale: string) => {
  if (locale.startsWith("ar")) {
    return [
      "يوم الأحد",
      "الإثنين",
      "يوم الثلاثاء",
      "الأربعاء",
      "الخميس",
      "يوم الجمعة",
      "يوم السبت",
    ];
  }

  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
};

type MonthTableRowType = Array<number | false>;
interface IGetMonthData {
  (month: number, year: number): MonthTableRowType[];
}

const getRangeArray = (start: number, end: number): number[] => {
  return Array(end - start + 1)
    .fill(undefined)
    .map((_, index) => index + start);
};

const splitArray = (array: MonthTableRowType, part: number): MonthTableRowType[] => {
  const tmp = [];
  for (let i = 0; i < array.length; i += part) {
    tmp.push(array.slice(i, i + part));
  }

  const lastTmpRow = tmp[tmp.length - 1];
  if (lastTmpRow.length < part) {
    const requiredCellCount = part - lastTmpRow.length;
    lastTmpRow.push(...Array(requiredCellCount).fill(false));
  }

  return tmp;
};

export const getMonthData: IGetMonthData = (month, year) => {
  if (month < 1 || month > 12) {
    console.error("month must be between 1 and 12");
    return [];
  }

  const date = new Date(year, month - 1);
  const startDay = getDay(startOfMonth(date)); // get index of Day of the week
  const endDate = getDate(endOfMonth(date)); // 30th day or 31th day

  const daysArray = getRangeArray(1, endDate); // [1, 2, ..., 30]
  const spaceArray = Array(startDay).fill(false);
  const targetArray = spaceArray.concat(daysArray);

  console.log({ startDay, daysArray, spaceArray, targetArray }, splitArray(targetArray, 7));

  return splitArray(targetArray, 7); // weekly data
};
