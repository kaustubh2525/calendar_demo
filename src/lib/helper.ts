import { getWeekProps } from "@/interface/global/interface";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);
dayjs.extend(utc);
dayjs.extend(timezone);

export const getWeeksOfMonth = ({
  weekIndex = dayjs().week(),
  timeZone = "Asia/Kolkata",
}: getWeekProps) => {
  weekIndex = Math.floor(weekIndex);

  const firstDayOfWeek = dayjs().week(weekIndex).startOf("week").tz(timeZone);

  let currentDate = firstDayOfWeek.clone();

  const weeklyDates = new Array(7).fill(null).map(() => {
    const currentDay = currentDate.clone();
    currentDate = currentDate.add(1, "day");
    return currentDay;
  });

  return weeklyDates;
};
