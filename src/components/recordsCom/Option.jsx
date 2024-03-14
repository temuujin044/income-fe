import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Option2() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Handle calendar changes here
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
    // Handle time changes here
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
