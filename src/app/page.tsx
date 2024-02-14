"use client";
import BasicDateCalendar from "@/components/DatePicker";
import InputSelect from "@/components/InputSelect";
import { MenuItem } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [location, setLocation] = useState<string>("singapure");
  const [duration, setDuration] = useState<string>("30");

  const handleChangeCalendar = (newValue: Date | null) => {
    setSelectedDate(dayjs(newValue).format("dddd, MMMM DD"));
    if (newValue) {
      setIsDaySelected(true);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="card bg-white rounded-lg w-auto min-h-[750px] max-w-[1680px] flex">
        <div className="p-7 px-[30px] min-w-[400px] ">
          <h1 className="text-[27px] mt-0 font-extrabold mb-10 leading-none ">
            Book a Court
          </h1>
          <div className="mb-4">
            <h2 className="mb-[5px] text-[1.2rem]">Location</h2>
            <InputSelect
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <MenuItem value="singapure">Singapore</MenuItem>
              <MenuItem value="brazil">Brazil</MenuItem>
            </InputSelect>
          </div>
          <div>
            <h2 className="mb-1 text-[1.2rem]">Duration</h2>
            <InputSelect
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            >
              <MenuItem value="30">30 min</MenuItem>
              <MenuItem value="60">60 min</MenuItem>
            </InputSelect>
          </div>
        </div>
        <div className="right-container border-0 border-l p-5 pl-8 w-auto flex flex-col">
          <h1 className="text-[21.5px] ml-[-4px] mt-4 font-extrabold leading-none	">
            Pick a date and time
          </h1>
          <div
            className={
              (isDaySelected ? "w-[745px]" : "w-[450px]") +
              " flex justify-between mt-4 transition-all ease-out duration-200"
            }
          >
            <BasicDateCalendar
              onChange={handleChangeCalendar}
              disabledDays={[new Date("2023-02-09")]}
            />
            <div
              className={
                (isDaySelected ? "w-[300px] px-4" : "!w-0 p-0") +
                " overflow-hidden py-4 transition-all ease-out duration-200"
              }
            >
              <p className="mb-[1.2rem] pl-[1px] w-full text-[17.5px] text-nowrap mt-[3px]">
                {selectedDate}
              </p>

              {[
                "12:00pm",
                "12:30pm",
                "1:00pm",
                "1:30pm",
                "2:00pm",
                "2:30pm",
              ].map((time) => (
                <div
                  className="flex items-center justify-center text-nowrap w-full min-w-[259px] text-center border cursor-pointer hover:border-[#b7c050] h-16 hover:border-2 box-border hover:text-[#b7c050] border-green mb-4 rounded-md font-medium text-green"
                  key={time}
                  onClick={() => console.log(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
