import React, { FC, memo } from "react";

interface IDayProps {
  day: number | false;
}

const Day: FC<IDayProps> = ({ day }) => {
  return <td className='cellLayer'>{day && <div className='cell'>{day}</div>}</td>;
};

export default memo(Day);
