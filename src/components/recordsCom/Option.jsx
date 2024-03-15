import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { category } from "@/pages/utils/recordData";

export function Option() {
  const [valueD, setValueD] = useState("Choose");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleGetValueD = (valueD) => {
    setValueD(valueD);

    setDropdownVisible(false);
  };

  return (
    <div className="dropdown w-[346px]  absolute  text-[#94A3B8] text-base font-normal not-italic bg-[#F3F4F6] rounded-xl  text-center ">
      <div
        tabIndex={0}
        role="button "
        className="rounded-2xl h-12  items-center pl-4 selected max-w-full w-full bg-[#F3F4F6] border-none text-center flex justify-start  text-[#94A3B8] "
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <option className="text-[#000000]">{valueD}</option>
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] menu p-0 rounded-box bg-[#FFFFFF] max-w-full w-full shadow-2xl   ${
          dropdownVisible ? "block" : "hidden"
        }`}
      >
        <li>
          {category.map((e) => {
            return (
              <a
                className="flex flex-col justify-center items-start text-[#000000] "
                onClick={() => {
                  handleGetValueD(` ${e.cateName}`);
                }}
              >
                <div className="flex text-center gap-2 py-2 px-2 ">
                  <p>{e.logo}</p>
                  <p className="text-[#000000] py-0.5 text-base not-italic font-normal">
                    {e.cateName}
                  </p>
                </div>
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export function Option2() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy"
      className="select select-bordered max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]"
    />
  );
}

export function Option3() {
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <DatePicker
      selected={selectedTime}
      onChange={handleTimeChange}
      showTimeSelect
      showTimeSelectOnly
      timeFormat="HH:mm"
      timeCaption="Time"
      dateFormat="h:mm aa"
      className="select select-bordered max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]"
    />
  );
}

export function Option4() {
  return (
    <input
      type="text"
      placeholder="Write here"
      className="bg-[#F3F4F6] w-[320px] h-[48px] rounded-[8px] pl-[16px] text-neutral-700 text-base font-normal"
    ></input>
  );
}
