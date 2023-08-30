import data from "@/json/data.json";
import dayjs from "dayjs";
import { Fragment, useEffect, useState } from "react";
import { WeekProps } from "../interface/interface";
import Day from "./Day";

const Month = ({ week }: WeekProps) => {
  const [randomData, setRandomData] = useState(data);

  useEffect(() => {
    week.map((day) => {
      randomData.find((data) => {
        if (data.date === dayjs(day).format("YYYY-MM-DD"))
          console.log(data.date, dayjs(day).format("YYYY-MM-DD"));
      });
    });
  }, []);

  return (
    <>
      <div className="flex-1 grid grid-col-1">
        {week?.map((day, index) => {
          return dayjs(day).day() !== 0 && dayjs(day).day() !== 6 ? (
            <Fragment key={index}>
              <Day day={day} />
            </Fragment>
          ) : null;
        })}
      </div>
    </>
  );
};

export default Month;
