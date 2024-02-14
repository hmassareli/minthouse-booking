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
  const datePickerStyles = {
    "& * ": { fontSize: "14px" },
    "& .MuiPickersArrowSwitcher-root": {
      paddingRight: "8px",
    },
    "& .MuiPickersArrowSwitcher-button": {
      fontSize: "22px",
      height: "35px",
      width: "35px",
    },
    "& .MuiPickersSlideTransition-root": {
      height: "400px",
    },
    "& .MuiDayCalendar-weekDayLabel": {
      fontSize: "14px",
    },
    "& .MuiPickersCalendarHeader-root": {
      paddingInline: 0,
      marginBottom: "12px",
      marginTop: "18px",
      "& .MuiPickersCalendarHeader-label": {
        fontSize: "17px",
        paddingLeft: "8px",
      },
    },
    "& .MuiPickersDay-root": {
      fontSize: "14px",
    },

    "& .MuiPickersCalendarHeader-switchViewButton": { display: "none" },
    width: "410px",
    margin: "0 0",
  };

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
        sx={datePickerStyles}
      />
    </LocalizationProvider>
  );
}
