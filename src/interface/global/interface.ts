export type TimeZones = "Asia/Kolkata" | "America/New_York";

export interface getWeekProps {
  weekIndex?: number;
  timeZone?: TimeZones;
}

export type TimeSlot = {
  time: string;
};
