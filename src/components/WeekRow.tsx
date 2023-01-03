import React, { FC, memo } from "react";

import DayCell from "./Day";

interface IWeekRowProps {
  dayList: Array<number | false>;
}

const WeekRow: FC<IWeekRowProps> = ({ dayList }) => {
  return (
    <tr>
      {dayList.map((day, cellIdx) => (
        <DayCell key={String(cellIdx)} day={day} />
      ))}
    </tr>
  );
};

export default memo(WeekRow);
