import { Input } from "./Input";
import { Option2, Option3, Option4 } from "./Option";
import React, { useState } from "react";
import { category, recordData } from "@/pages/utils/recordData";

// export function Option() {
//   const [valueD, setValueD] = useState("Find or choose category");
//   const [valueIcon, setValueIcon] = useState("Find or choose category");
//   const [display, setDisplay] = useState("display");
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const handleGetValueD = (valueD) => {
//     setValueD(valueD);
//     setDropdownVisible(false);
//     console.log(dropdownVisible);
//   };
// }

export default function Modal() {
  const [valueD, setValueD] = useState("Find or choose category");
  const [valueIcon, setValueIcon] = useState("Find or choose category");
  const [display, setDisplay] = useState("display");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleGetValueD = (valueD) => {
    setValueD(valueD);
    setDropdownVisible(false);
    console.log(dropdownVisible);
  };
  const [color, setColor] = useState("blue");
  return (
    <dialog id="my_modal_3" className="modal  backdrop-blur-sm  relative z-1">
      <div className="modal-box max-w-[792px] p-1 bg-[#FFFFFF] max-h-[580px] overflow-hidden ">
        <form method="dialog">
          <button className="btn pt-2 btn-ghost text-[#0F172A] w-6 h-6 absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-semibold not-italic text-xl p-5">Add Record</h3>
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
              <div className="bg-[#F3F4F6] rounded-2xl  flex flex-col justify-center h-[76px]">
                <p className="text-base font-normal not-italic px-6 ">Amount</p>
                <Input />
              </div>

              <div className="">
                <p className="text-base not-italic font-normal p-1 ">
                  Category
                </p>
                <div className="w-full  absolute-y text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB] overflow-auto-y   ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn selected max-w-full w-full bg-[#F9FAFB] border-none text-center flex justify-start text-[#94A3B8] "
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                  >
                    <option className="text-[#94A3B8]">{valueD}</option>
                  </div>
                  <ul
                    tabIndex={0}
                    className={`dropdown-content  z-[1] menu p-0 rounded-box bg-[#FFFFFF] max-w-full w-full shadow-2xl  ${
                      dropdownVisible ? "block" : "hidden"
                    }`}
                  >
                    <li
                      className=" z-1 overflow-x-scroll flex "
                      style={{ minHeight: "180px" }}
                    >
                      {category.map((e) => {
                        return (
                          <a
                            className="flex  text-[#000000]"
                            onClick={() => {
                              handleGetValueD(`${e.cateName}`);
                            }}
                          >
                            <div className="flex items-center gap-2 py-2 px-2 ">
                              <p className="">{e.logo}</p>
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
              </div>
              <div className="flex justify-between">
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
            <div className="overflow-y-scroll">
              <p className="text-base not-italic font-normal p-1 ">Payee</p>
              <Option4 />
            </div>
            <div>
              <p>Note</p>
              <textarea
                placeholder="Write here"
                className="overflow-y-scroll textarea textarea-bordered textarea-lg w-full min-h-[280px] max-w-xs"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
