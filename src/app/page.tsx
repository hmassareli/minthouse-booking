"use client";
import BasicDateCalendar from "@/components/DatePicker";
import InputSelect from "@/components/InputSelect";
import { useState } from "react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const handleChangeCalendar = (newValue: Date | null) => {
    setSelectedDate(newValue);
    if (newValue) {
      setIsDaySelected(true);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="bg-white rounded-lg w-auto min-h-[500px] max-w-[1200px] flex">
        <div className="p-6 min-w-[300px]">
          <h1 className="text-2xl font-extrabold mb-8">Book a Court</h1>
          <div className="mb-6">
            <h2 className="mb-[4px] font-medium text-slate-600">Location</h2>
            <InputSelect value="singapure" onChange={() => {}}>
              <option value="singapure">Singapure</option>
              <option value="brazil">Brazil</option>
            </InputSelect>
          </div>
          <div>
            <h2 className="mb-[4px] font-medium text-slate-600">Duration</h2>
            <InputSelect value="30" onChange={() => {}}>
              <option value="30">30 min</option>
              <option value="60">60 min</option>
            </InputSelect>
          </div>
        </div>
        <div className="right-container border-0 border-l-2 p-6 w-auto flex flex-col">
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
                (isDaySelected ? "block" : "hidden") + " p-4 min-w-[300px]"
              }
            >
              <p className="mb-4 mt-[2px]">Saturday, January 27</p>

              {["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm"].map(
                (time) => (
                  <div
                    className="py-3 w-full text-center border-2 cursor-pointer hover:border-[#b7c050] hover:text-[#b7c050] border-green mb-4 rounded-md font-medium text-green"
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
