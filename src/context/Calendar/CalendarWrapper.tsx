import { TimeZones } from "@/interface/global/interface";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useCallback, useState } from "react";
import CalendarContext from "./CalendarContext";

dayjs.extend(weekOfYear);

const CalendarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [weekIndex, setWeekIndex] = useState(dayjs().week());
  
  // Dynamically setting the time zone.
  const [timeZone, setTimeZone] = useState<TimeZones>("Asia/Kolkata");

  // weekIncrement is used to Increase Week Index for Further Week Array Calculations.
  const weekIncrement = useCallback(() => {
    setWeekIndex((prev) => prev + 1);
  }, []);

  // weekDecrement is used to Decrease Week Index for Further Week Array Calculations.
  const weekDecrement = useCallback(() => {
    setWeekIndex((prev) => prev - 1);
  }, []);

  // dayOfWeekReset is used to reset the current Week Index.
  const dayOfWeekReset = useCallback(() => {
    setWeekIndex(dayjs().week());
  }, []);

  return (
    <>
      <CalendarContext.Provider
        value={{
          weekIndex,
          setWeekIndex,
          timeZone,
          setTimeZone,
          weekIncrement,
          weekDecrement,
          dayOfWeekReset,
        }}
      >
        {children}
      </CalendarContext.Provider>
    </>
  );
};

export default CalendarWrapper;
