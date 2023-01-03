import React from "react";
import { Next, Prev } from "./Icons";

const DatePicker = () => {
  return (
    <div>
      <div className='date-picker-layer'>
        {/* {monthTableData.map(({ year, month }) => (
          <MonthTable key={`${year}${month}`} year={year} month={month} />
        ))} */}
        <span className='prevbtn-prevbtn'>
          <Prev />
        </span>
        <span className='nextbtn-nextbtn'>
          <Next />
        </span>
      </div>
    </div>
  );
};

export default DatePicker;
