import { TimeSlot, TimeZones } from "@/interface/global/interface";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

function createTimeSlots(startHour: number, endHour: number): TimeSlot[] {
  const timeSlots: TimeSlot[] = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === endHour && minute === 30) {
        break;
      }
      timeSlots.push({
        time: dayjs().hour(hour).minute(minute).second(0).format(""),
      });
    }
  }
  return timeSlots;
}

function convertTimezone(
  timeSlots: TimeSlot[],
  timeZone: TimeZones
): TimeSlot[] {
  return timeSlots.map((slot) => ({
    time: dayjs(slot.time).tz(timeZone).format("h:mm A"),
  }));
}

export { convertTimezone, createTimeSlots };

