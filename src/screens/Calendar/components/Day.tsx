import { Checkbox } from "@/components/ui/checkbox";
import useCalendarContext from "@/hooks/useCalendarContext";
import data from "@/json/data.json";
import { convertTimezone, createTimeSlots } from "@/lib/timeSlotUtils";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { DayProps } from "../interface/interface";

const startHour = 8;
const endHour = 23;

const Day = ({ day }: DayProps) => {
  const [randomJson, setRandomJson] = useState(data);
  const { timeZone } = useCalendarContext();

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7 h-7"
      : "";
  };

  const timeSlots = useMemo(() => {
    const originalTimeSlot = createTimeSlots(startHour, endHour);
    const convertedTimeSlot = convertTimezone(originalTimeSlot, timeZone);

    return convertedTimeSlot;
  }, [timeZone]);

  useEffect(() => {
    data.find((res) => {
      if (res.date === dayjs(day).format("YYYY-MM-DD")) {
        // console.log(res);
      }
    });
  }, [day]);

  return (
    <>
      <div
        className={cn("border border-gray-200 flex gap-4 pl-2 lg:pl-0 w-full")}
      >
        <header className="flex flex-col items-center justify-center w-24 p-2 font-semibold bg-blue-300 border-r border-gray-200 rounded lg:p-0 lg:bg-transparent lg:rounded-none">
          <p>{day.format("ddd")}</p>
          <p
            className={cn("text-sm p-1 my-1 text-center", getCurrentDayClass())}
          >
            {day.format("DD")}
          </p>
        </header>
        <div className="flex items-center w-full h-full">
          <div className="grid grid-cols-12 gap-x-5 gap-y-2">
            {dayjs(day).format("YYYY-MM-DD") >= dayjs().format("YYYY-MM-DD") ? (
              timeSlots.map((slot, i) => {
                // randomJson.find((res) => {
                //   if (
                //     res.date === dayjs(day).format("YYYY-MM-DD") &&
                //     res.time === slot.time
                //   ) {
                //     console.log(res.date);
                //   }
                // });

                return (
                  <label
                    key={i}
                    htmlFor={i?.toString()}
                    className="flex items-center gap-x-2"
                  >
                    <Checkbox
                      id={i?.toString()}
                      checked={
                        randomJson.find(
                          (res) =>
                            res.date === dayjs(day).format("YYYY-MM-DD") &&
                            res.time === slot.time
                        )?.checked
                      }
                    />
                    <span>{slot.time}</span>
                  </label>
                );
              })
            ) : (
              <span>Past.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Day;
