import React, { FC, memo } from "react";
import WeekRow from "./WeekRow";

interface IDaysProps {
  days: Array<Array<number | false>>;
}

const Days: FC<IDaysProps> = ({ days }) => {
  return (
    <tbody>
      {days.map((dayList, rowIdx) => (
        <WeekRow key={String(rowIdx)} dayList={dayList} />
      ))}
    </tbody>
  );
};

export default memo(Days);
