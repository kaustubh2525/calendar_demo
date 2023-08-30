import useCalendarContext from "@/hooks/useCalendarContext";
import { getWeeksOfMonth } from "@/lib/helper";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Month from "./components/Week";

const Calendar = () => {
  // Getting the Week Array from helper method and setting it to the state
  const [currentWeek, setCurrentWeek] = useState(getWeeksOfMonth({}));

  const { weekIndex, timeZone } = useCalendarContext();

  useEffect(() => {
    setCurrentWeek(
      getWeeksOfMonth({
        weekIndex,
        timeZone,
      })
    );
  }, [weekIndex, timeZone]);

  return (
    <>
      <div className="h-full bg-white">
        <Header />
        <div className="flex lg:flex-row flex-col h-[calc(100vh-3.5rem)]">
          <Month week={currentWeek} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
