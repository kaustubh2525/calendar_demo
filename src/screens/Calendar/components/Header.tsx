import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCalendarContext from "@/hooks/useCalendarContext";
import { TimeZones } from "@/interface/global/interface";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { timeZonesConstant } from "../constants";

const Header = () => {
  const { weekIncrement, weekDecrement, dayOfWeekReset, setTimeZone } =
    useCalendarContext();

  return (
    <>
      <header className="z-20 flex items-center px-4 shadow-sm h-14">
        <div className="items-center hidden h-full capitalize pointer-events-none lg:flex lg:gap-2">
          <h1 className="flex items-center h-full mr-10 text-xl font-semibold text-black">
            calendar
          </h1>
        </div>
        <div className="flex items-center gap-x-4">
          <Button onClick={dayOfWeekReset}>Today</Button>
          <Button variant={"outline"} size={"icon"} onClick={weekDecrement}>
            <BsChevronLeft className="w-4 h-4 text-black rounded-full slowTransition" />
          </Button>
          <Button variant={"outline"} size={"icon"} onClick={weekIncrement}>
            <BsChevronRight className="w-4 h-4 text-black rounded-full slowTransition" />
          </Button>
          <h2 className="ml-4 font-semibold text-gray-500 lg:text-xl">
            {dayjs().format("MMM DD, YYYY")}
          </h2>
          <Select
            defaultValue={timeZonesConstant["Asia/Kolkata"]}
            onValueChange={(value: TimeZones) => setTimeZone(value)}
          >
            <SelectTrigger className="w-80">
              <SelectValue placeholder="Select a Timezone" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(timeZonesConstant).map(([key, value]) => (
                <SelectItem value={value} key={key}>
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>
    </>
  );
};

export default Header;
