import { CalendarProps } from "@/interface/context/calendar/interface";
import { createContext } from "react";

const CalendarContext = createContext<CalendarProps | null>(null);

export default CalendarContext;
