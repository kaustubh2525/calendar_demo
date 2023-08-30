import { TimeZones } from "@/interface/global/interface";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useCallback, useState } from "react";
import CalendarContext from "./CalendarContext";

dayjs.extend(weekOfYear);

const CalendarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [weekIndex, setWeekIndex] = useState(dayjs().week());
  const [timeZone, setTimeZone] = useState<TimeZones>("Asia/Kolkata");

  const weekIncrement = useCallback(() => {
    setWeekIndex((prev) => prev + 1);
  }, []);

  const weekDecrement = useCallback(() => {
    setWeekIndex((prev) => prev - 1);
  }, []);

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
