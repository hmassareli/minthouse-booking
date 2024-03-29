import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "500"] });

export const datePickerStyles = {
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
    fontFamily: roboto.style.fontFamily,
    fontSize: "14px",
    width: "50px",
    height: "50px",
  },

  "& .MuiPickersCalendarHeader-switchViewButton": { display: "none" },
  width: "410px",
  overflow: "visible",
  margin: "0 0",
};
