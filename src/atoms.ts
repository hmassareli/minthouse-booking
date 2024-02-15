import { atom } from "jotai";
import { createPropertyAtom } from "./utils";

export const MeetingAtom = atom({
  date: new Date(),
  time: new Date(),
  location: "singapore",
  duration: "30",
});

export const locationAtom = createPropertyAtom(MeetingAtom, "location");
export const durationAtom = createPropertyAtom(MeetingAtom, "duration");
export const timeAtom = createPropertyAtom(MeetingAtom, "time");
export const dateAtom = createPropertyAtom(MeetingAtom, "date");
