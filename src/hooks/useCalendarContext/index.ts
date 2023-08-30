import CalendarContext from "@/context/Calendar/CalendarContext";
import { useContext } from "react";

const useCalendarContext = () => {
  const calendarContext = useContext(CalendarContext);

  // To make sure that the calendar context is available throughout the component
  if (calendarContext === null) {
    throw new Error("Calendar Context not available...");
  }

  return calendarContext;
};

export default useCalendarContext;
