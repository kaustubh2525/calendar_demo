import { TimeZones } from "@/interface/global/interface";

export interface CalendarProps {
  weekIndex: number;
  setWeekIndex: React.Dispatch<React.SetStateAction<number>>;
  timeZone: TimeZones;
  setTimeZone: React.Dispatch<React.SetStateAction<TimeZones>>;
  weekIncrement: () => void;
  weekDecrement: () => void;
  dayOfWeekReset: () => void;
}
