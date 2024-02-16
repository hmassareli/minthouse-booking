import dayjs from "dayjs";

export const monthScheduleMock: {
  [key: number]: number[];
} = {
  16: [29, 32, 33],
  18: [26, 27, 32, 33],
};

export const getDatesForThisMonthByDay = (days: number[]) => {
  return days.map((day) => {
    return dayjs().set("date", day).toDate();
  });
};

export const rangeOfAvailability = [25, 35] as [number, number];