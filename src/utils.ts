import dayjs from "dayjs";
import { atom } from "jotai";
import { PrimitiveAtom } from "jotai/vanilla";

export const createPropertyAtom = <T, K extends keyof T>(
  baseAtom: PrimitiveAtom<T>,
  propertyName: K
): PrimitiveAtom<T[K]> =>
  atom(
    (get) => get(baseAtom)[propertyName],
    (get, set, newValue) => {
      const baseValue = get(baseAtom);
      set(baseAtom, { ...baseValue, [propertyName]: newValue } as T);
    }
  );

export const getAvailableSlots = (
  slotPeriod: "30" | "60",
  usedSlots: number[],
  rangeOfAvailability: [number, number]
) => {
  const [start, end] = rangeOfAvailability;
  const available = Array.from(
    { length: end - start },
    (_, i) => i + start
  ).filter((i) => !usedSlots.includes(i));
  if (slotPeriod === "30") {
    return slotsToHours(available);
  }
  let slots = [];
  let useSlot = undefined;
  for (let i = 0; i < available.length - 1; i++) {
    let curr = available[i];
    let next = available[i + 1];

    if (curr === useSlot) {
      continue;
    }
    if (next === curr + 1) {
      slots.push(curr);
      useSlot = next;
    }
  }
  return slotsToHours(slots);
};

export const slotsToHours = (slots: number[]) => {
  const decimals = slots.map((slot) => slot / 2);

  return decimals.map((slot) => {
    if (Math.trunc(slot) === slot) {
      return dayjs(`${slot}:00`, "HH:mm");
    } else {
      return dayjs(`${Math.trunc(slot)}:30`, "HH:mm");
    }
  });
};
