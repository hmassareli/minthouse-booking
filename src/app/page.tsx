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
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="card bg-white rounded-lg w-auto min-h-[500px] max-w-[1200px] flex">
        <div className="p-6 min-w-[300px]">
          <h1 className="text-2xl font-extrabold mb-8">Book a Court</h1>
          <div className="mb-6">
            <h2 className="mb-[4px]">Location</h2>
            <InputSelect
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <MenuItem value="singapure">Singapure</MenuItem>
              <MenuItem value="brazil">Brazil</MenuItem>
            </InputSelect>
          </div>
          <div>
            <h2 className="mb-[4px]">Duration</h2>
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
        <div className="right-container border-0 border-l p-6 w-auto flex flex-col">
          <h1 className="text-1 font-extrabold leading-8 fle	">
            Pick a date and time
          </h1>
          <div className="flex">
            <BasicDateCalendar
              onChange={handleChangeCalendar}
              disabledDays={[new Date("2023-02-09")]}
            />
            <div
              className={
                (isDaySelected ? "w-[250px] px-4" : "!w-0 p-0") +
                " overflow-hidden py-4 transition-all ease-out duration-200"
              }
            >
              <p className="mb-4 w-full text-nowrap mt-[2px]">{selectedDate}</p>

              {["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm"].map(
                (time) => (
                  <div
                    className="flex items-center justify-center text-nowrap w-full min-w-[220px] text-center border cursor-pointer hover:border-[#b7c050] h-12 hover:border-2 box-border hover:text-[#b7c050] border-green mb-4 rounded-md font-medium text-green"
                    key={time}
                    onClick={() => console.log(time)}
                  >
                    {time}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
