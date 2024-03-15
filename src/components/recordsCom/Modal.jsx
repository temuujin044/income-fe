import { Input } from "./Input";
import { Option, Option2, Option3, Option4 } from "./Option";
import React, { useState } from "react";

export default function Modal(props) {
  const { handleClose } = props;
  const [color, setColor] = useState("blue");
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full inset-0 bg-black/30 h-[1250px] flex items-center justify-center z-10 absolute backdrop-blur-sm bg-opacity-50 transition-opacity duration-225 ease-out pb-48">
      <div className=" max-w-[792px] p-1 bg-[#FFFFFF] max-h-[580px]  rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold not-italic text-xl p-5">Add Record</h3>
          <button
            className="btn  btn-ghost text-[#0F172A] w-6 h-6 text-center"
            onClick={() => handleClose()}
          >
            ✕
          </button>
        </div>
        <div className="border-t border-[#E2E8F0] flex justify-center ">
          <div className="py-5 px-6 w-[396px] gap-4 flex flex-col">
            <div className="flex bg-[#F3F4F6] rounded-3xl">
              <button
                className={` rounded-3xl  w-[172px] h-[40px] ${
                  color == "blue"
                    ? "bg-[#0166FF] text-[#F9FAFB] "
                    : "bg-[#F3F4F6]  text-[#1F2937]"
                }`}
                onClick={() => {
                  setColor("blue");
                }}
              >
                Expense
              </button>
              <button
                className={` rounded-3xl w-[172px] h-[40px] ${
                  color == "green"
                    ? "bg-[#16A34A] text-[#F9FAFB]"
                    : "bg-[#F3F4F6] text-[#1F2937]"
                }`}
                onClick={() => {
                  setColor("green");
                }}
              >
                Income
              </button>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="bg-[#F3F4F6] rounded-2xl w-full px-2 flex flex-col justify-center h-[76px]">
                <p className="text-base font-normal not-italic px-6 ">Amount</p>
                <Input />
              </div>

              <div className="">
                <p className="text-base not-italic font-normal p-1 ">
                  Category
                </p>
                <div className="realtive ">
                  <Option />
                </div>
              </div>
              <div className="flex justify-between pt-12">
                <div className="w-[168px]">
                  <p className="text-base not-italic font-normal p-1">Date</p>
                  <Option2 />
                </div>
                <div className="w-[168px]">
                  <p className="text-base not-italic font-normal p-1">Time</p>
                  <Option3 />
                </div>
              </div>
              <button
                onClick={() => {
                  setColor("blue");
                }}
                className={`btn h-8  rounded-3xl ${
                  color == "blue"
                    ? "bg-[#0166FF] text-[#FFFFFF] "
                    : "bg-[#16A34A] text-[#F9FAFB]"
                }`}
              >
                Add Record
              </button>
            </div>
          </div>
          <div className="pt- pb-6 px-6 w-[396px] flex flex-col gap-8">
            <div>
              <p className="text-base not-italic font-normal p-1">Payee</p>
              <Option4 />
            </div>
            <div className="">
              <p>Note</p>
              <textarea
                placeholder="Write here"
                className="bg-[#F3F4F6] textarea textarea-bordered border-none textarea-lg w-full min-h-[280px] max-w-xs"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
