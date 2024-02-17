"use client";
import { MeetingAtom } from "@/atoms";
import Card from "@/components/Card";
import { useAtom } from "jotai";

export default function UserInfo() {
  const [meetingAtom] = useAtom(MeetingAtom);
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center">
      <Card className="main-card">
        <h1>User Info {JSON.stringify(meetingAtom)}</h1>
      </Card>
    </main>
  );
}
