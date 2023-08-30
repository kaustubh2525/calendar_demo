import CalendarContext from "@/context/Calendar/CalendarContext";
import { useContext } from "react";

const useCalendarContext = () => {
  const calendarContext = useContext(CalendarContext);

  if (calendarContext === null) {
    throw new Error("Calendar Context not available...");
  }

  return calendarContext;
};

export default useCalendarContext;
