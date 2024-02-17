"use client";
import { MeetingAtom } from "@/atoms";
import { useAtom } from "jotai";

export default function UserInfo() {
  const [meetingAtom] = useAtom(MeetingAtom);
  return (
    <div>
      <h1>User Info {JSON.stringify(meetingAtom)}</h1>
    </div>
  );
}
