"use client";
import { datePickerStyles } from "@/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export default function BasicDateCalendar({
  availableDates = [],
  onChange = () => {},
}: {
  availableDates: Date[];
  onChange: (value: Date | null) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        dayOfWeekFormatter={(day) => {
          return day;
        }}
        shouldDisableDate={(date: dayjs.Dayjs) => {
          return !availableDates.some((availableDate) =>
            dayjs(availableDate).isSame(date, "day")
          );
        }}
        onChange={onChange}
        className="date-calendar"
        sx={datePickerStyles}
      />
    </LocalizationProvider>
  );
}
