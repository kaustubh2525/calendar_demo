import dayjs from "dayjs";
import { Fragment } from "react";
import { WeekProps } from "../interface/interface";
import Day from "./Day";

const Month = ({ week }: WeekProps) => {
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
