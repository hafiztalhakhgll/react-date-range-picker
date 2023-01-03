import { getWeekDays, isBrowser } from "../utils";

const language = isBrowser() ? navigator.language : "en-US";

const weekday = getWeekDays(language);

function WeekDay() {
  return (
    <thead className='weekday'>
      <tr className='row'>
        {weekday.map((day) => (
          <th className='cell' key={day}>
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default WeekDay;
