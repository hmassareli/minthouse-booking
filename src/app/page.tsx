"use client";
import { dateAtom, durationAtom, locationAtom } from "@/atoms";
import Card from "@/components/Card";
import { IconComponent } from "@/components/IconComponent";
import InputSelect from "@/components/InputSelect";
import { MenuItem } from "@mui/material";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { useState } from "react";
import BasicDateCalendar from "./../components/DatePicker";

export default function Home() {
  const [selectedDate, setSelectedDate] = useAtom(dateAtom);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [location, setLocation] = useAtom(locationAtom);
  const [duration, setDuration] = useAtom(durationAtom);

  const handleChangeCalendar = (newValue: Date | null) => {
    setSelectedDate(dayjs(newValue).format("dddd, MMMM DD"));
    if (newValue) {
      setIsDaySelected(true);
    }
  };

  return (
    <main className=" flex min-h-screen flex-col items-center justify-center">
      <Card className="main-card">
        <div
          className={
            (isDaySelected ? "hide-on-mobile " : "") +
            "left-container p-7 px-[30px] min-w-[400px] "
          }
        >
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
              <MenuItem value="singapore">Singapore</MenuItem>
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
          <div className="flex mt-4 gap-4 !w-full !flex-row justify-center md:justify-start items-center">
            <IconComponent
              className={
                "cursor-pointer md:hidden rotate-90 justify-self-start " +
                (isDaySelected ? "" : "hidden")
              }
              onClick={() => {
                setIsDaySelected(false);
              }}
            />
            <h1
              className={
                "text-[21.5px] ml-[-4px] font-extrabold md:leading-none"
              }
            >
              Pick a date and time
            </h1>
          </div>

          <div
            className={
              (isDaySelected ? "w-[745px]" : "w-[450px]") +
              " flex justify-between mt-4 transition-all ease-out duration-200"
            }
          >
            {" "}
            <div className={isDaySelected ? "hide-on-mobile" : ""}>
              <BasicDateCalendar
                onChange={handleChangeCalendar}
                disabledDays={[dayjs().subtract(1, "day").toDate()]}
              />
            </div>
            <div
              className={
                (isDaySelected ? "w-[300px] px-4" : "!w-0 !h-0 p-0") +
                " overflow-hidden py-4 transition-all ease-out duration-200"
              }
            >
              <p
                className={
                  "day-heading mb-[1.2rem] pl-[1px] w-full text-[17.5px] text-nowrap mt-[3px]"
                }
              >
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
      </Card>
    </main>
  );
}
