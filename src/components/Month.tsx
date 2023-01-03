import { FC } from "react";
import { getYearAndMonth } from "../utils";

interface IMonthProps {
  month: number;
  year: number;
}

const Month: FC<IMonthProps> = ({ month, year }) => {
  return (
    <div>
      <div className='monthTableLayer'>
        <div className='header'>
          <div className='yearMonth'>{getYearAndMonth(year, month)}</div>
        </div>
        <div className='table'>
          {/* <Weekday />
          <Days days={days} /> */}
        </div>
      </div>
    </div>
  );
};

export default Month;
