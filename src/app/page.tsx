"use client";
import BasicDateCalendar from "@/components/DatePicker";
import InputSelect from "@/components/InputSelect";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="bg-white rounded-lg w-full min-h-[500px] max-w-[1200px] flex">
        <div className="p-6 min-w-[300px]">
          <h1 className="text-2xl font-extrabold mb-8">Book a Court</h1>
          <div className="mb-8">
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
        <div className="border-0 border-l-2 p-6 w-full">
          <h1 className="text-1 font-extrabold leading-8	">
            Pick a date and time
          </h1>
          <BasicDateCalendar disabledDays={[new Date("2023-02-09")]} />
        </div>
      </div>
    </main>
  );
}
