"use client";
import { MeetingAtom } from "@/atoms";
import ArrowBackIcon from "@/components/ArrowBackIcon";
import CalendarIcon from "@/components/CalendarIcon";
import Card from "@/components/Card";
import ClockIcon from "@/components/ClockIcon";
import PinIcon from "@/components/PinIcon";
import VideoIcon from "@/components/VideoIcon";
import { useAtom } from "jotai";
import Link from "next/link";
import "./user-info.css";

export default function UserInfo() {
  const [meetingAtom] = useAtom(MeetingAtom);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card
        className={
          "main-card m-auto w-full xl:w-[1200px] transition-all duration-200  "
        }
      >
        <div className="p-11 xl:border-r min-w-[400px] font-medium text-[#535353]">
          <Link href={"/"}>
            <ArrowBackIcon className="cursor-pointer mb-7" />
          </Link>
          <p className="text-[16px] leading-none font-semibold">John Doe</p>
          <h1 className="text-[27px] font-extrabold text-black mb-7">
            Appointment Details
          </h1>
          <div className="appointment-details">
            <div className="flex">
              <VideoIcon />
              <p>
                Web conferencing details
                <br /> provided upon confirmation.
              </p>
            </div>
            <div className="flex">
              <ClockIcon />
              30 min
            </div>
            <div className="flex">
              <PinIcon />
              Singapure
            </div>
            <div className="flex">
              <CalendarIcon />
              16:00 - 16:45, Thursday,
              <br /> February 22, 2024
            </div>
            <p className="mt-2 leading-[1.2] font-light">
              Please share your phone number
              <br /> for emergency cases.
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
}
