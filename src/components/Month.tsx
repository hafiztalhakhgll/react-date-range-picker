import { FC } from "react";
import { getYearAndMonth } from "../utils";
import WeekDay from "./Weekday";

interface IMonthProps {
  month: number;
  year: number;
}

const Month: FC<IMonthProps> = ({ month, year }) => {
  return (
    <>
      <div className='monthTableLayer'>
        <header className='header'>
          <h2 className='yearMonth'>{getYearAndMonth(year, month)}</h2>
        </header>
        <table className='table'>
          <WeekDay />
          {/* <Days days={days} /> */}
        </table>
      </div>
    </>
  );
};

export default Month;
