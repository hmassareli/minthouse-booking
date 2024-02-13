"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

dayjs.locale("en");

export default function BasicDateCalendar({
  disabledDays = [],
  onChange = () => {},
}: {
  disabledDays: Date[];
  onChange: (value: Date | null) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        dayOfWeekFormatter={(day) => {
          return day;
        }}
        shouldDisableDate={(date: dayjs.Dayjs) => {
          return disabledDays.some((disabledDate) =>
            dayjs(disabledDate).isSame(date, "day")
          );
        }}
        onChange={onChange}
        className="date-calendar"
        sx={{
          "& .MuiPickersCalendarHeader-root": { paddingLeft: "5px" },
          "& .MuiPickersCalendarHeader-switchViewButton": { display: "none" },
          width: "auto",
          margin: "0 0",
        }}
      />
    </LocalizationProvider>
  );
}
