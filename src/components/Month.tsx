import { FC, useMemo } from "react";
import { getMonthData, getYearAndMonth } from "../utils";
import WeekDay from "./Weekday";
import Days from "./Days";

interface IMonthProps {
  month: number;
  year: number;
}

const Month: FC<IMonthProps> = ({ month, year }) => {
  const days = useMemo(() => getMonthData(month, year), [month, year]);

  return (
    <>
      <div className='monthTableLayer'>
        <header className='header'>
          <h2 className='yearMonth'>{getYearAndMonth(month, year)}</h2>
        </header>
        <table className='table'>
          <WeekDay />
          <Days days={days} />
        </table>
      </div>
    </>
  );
};

export default Month;
