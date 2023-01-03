import React, { useState } from "react";
import { Next, Prev } from "./Icons";
import { getCurrentMonthAndYear } from "../utils";
import Month from "./Month";

const DatePicker = () => {
  const [currentMonth, currentYear] = getCurrentMonthAndYear();
  const [monthTableData, setMonthTableData] = useState([
    { month: currentMonth + 1, year: currentYear },
    { month: currentMonth + 2, year: currentYear },
  ]);

  return (
    <div>
      <div className='date-picker-layer'>
        {monthTableData.map(({ year, month }) => (
          <Month key={`${year}-${month}`} year={year} month={month} />
        ))}
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
