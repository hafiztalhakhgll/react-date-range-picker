import React, { FC, memo } from "react";

import DayRow from "./DayRow";

interface IDaysProps {
  days: Array<Array<number | false>>;
}

const Days: FC<IDaysProps> = ({ days }) => {
  return (
    <tbody>
      {days.map((dayList, rowIdx) => (
        <DayRow key={String(rowIdx)} dayList={dayList} />
      ))}
    </tbody>
  );
};

export default memo(Days);
