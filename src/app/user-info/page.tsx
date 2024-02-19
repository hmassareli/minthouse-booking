"use client";
import { MeetingAtom } from "@/atoms";
import ArrowBackIcon from "@/components/ArrowBackIcon";
import CalendarIcon from "@/components/CalendarIcon";
import Card from "@/components/Card";
import ClockIcon from "@/components/ClockIcon";
import PinIcon from "@/components/PinIcon";
import VideoIcon from "@/components/VideoIcon";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { MuiTelInput } from "mui-tel-input";
import Link from "next/link";
import { useState } from "react";
import "./user-info.css";
export default function UserInfo() {
  const [meeting] = useAtom(MeetingAtom);
  const [phone, setPhone] = useState("");

  const formattedDate = `${meeting.time} - ${dayjs(meeting.time, "HH:mma")
    .add(+meeting.duration, "m")
    .format("HH:mma")}
              , ${dayjs(meeting.date).format("dddd, MMMM DD, YYYY")}`;
  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card
        className={
          "main-card m-auto w-full xl:w-[1200px] transition-all duration-200  "
        }
      >
        <div className="px-11 mx-auto py-8 xl:border-r w-full sm:w-[500px] xl:w-[400px] font-medium text-[#535353]">
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
              <p className="flex-1">
                Web conferencing details provided upon confirmation.
              </p>
            </div>
            <div className="flex">
              <ClockIcon />
              <p className="flex-1">{meeting.duration} min</p>
            </div>
            <div className="flex capitalize">
              <PinIcon />
              <p className="flex-1">{meeting.location}</p>
            </div>
            <div className="flex">
              <CalendarIcon />
              <p className="flex-1">{formattedDate}</p>
            </div>
            <p className="mt-2 leading-[1.2] text-base font-light">
              Please share your phone number for emergency cases.
            </p>
          </div>
        </div>
        <div className="right-side w-fit flex flex-col items-center xl:items-start px-11 py-8 xl:w-full">
          <h1 className="text-[22px] font-semibold text-black mb-4">
            Enter Details
          </h1>
          <label className="w-full sm:w-[400px] mb-5">
            <p>Name * </p>
            <input className="w-full" name="name" type="text" />
          </label>
          <label className="w-full sm:w-[400px] mb-5">
            <p>Email * </p>
            <input className="w-full " name="email" type="text" />
          </label>
          <label className="w-full sm:w-[400px] mb-5">
            <p>Phone number *</p>
            <MuiTelInput
              className="tel-input w-full rounded-lg "
              defaultCountry="SG"
              value={phone}
              onChange={handleChange}
            />
          </label>
          <label className="w-full sm:w-[400px] mb-5">
            <p>Please share anything that will help prepare for our meeting.</p>
            <textarea
              className="w-full rounded-lg "
              name=""
              id=""
              cols={55}
              rows={5}
            ></textarea>
          </label>
          <button className="px-5 py-3 mr-auto bg-green bg-[#D7E164 text-white text-lg hover:bg-[#b7c050] font-bold rounded-full">
            Schedule Event
          </button>
        </div>
      </Card>
    </main>
  );
}
