import dayjs from "dayjs";

const twoDaysLater = dayjs().add(2, "day").date();
const threeDaysLater = dayjs().add(3, "day").date();

export const monthScheduleMock: {
  [key: number]: number[];
} = {
  [twoDaysLater]: [29, 32, 33],
  [threeDaysLater]: [26, 27, 32, 33],
};

export const getDatesForThisMonthByDay = (days: number[]) => {
  return days.map((day) => {
    return dayjs().set("date", day).toDate();
  });
};

export const rangeOfAvailability = [25, 35] as [number, number];
