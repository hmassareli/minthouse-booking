"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export default function BasicDateCalendar({
  disabledDays = [],
}: {
  disabledDays: Date[];
}) {
  dayjs.locale("en");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        shouldDisableDate={(date: dayjs.Dayjs) => {
          return disabledDays.some((disabledDate) =>
            dayjs(disabledDate).isSame(date, "day")
          );
        }}
        className="date-calendar"
        sx={{ margin: "0 0" }}
      />
    </LocalizationProvider>
  );
}
