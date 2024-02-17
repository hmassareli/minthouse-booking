import { atom } from "jotai";
import { createPropertyAtom } from "./utils";

type meetingAtomTypes = {
  date: Date | null;
  time: string;
  location: string;
  duration: "30" | "60";
};

export const MeetingAtom = atom<meetingAtomTypes>({
  date: new Date(),
  time: "",
  location: "singapore",
  duration: "30",
});

export const locationAtom = createPropertyAtom(MeetingAtom, "location");
export const durationAtom = createPropertyAtom(MeetingAtom, "duration");
export const timeAtom = createPropertyAtom(MeetingAtom, "time");
export const dateAtom = createPropertyAtom(MeetingAtom, "date");
