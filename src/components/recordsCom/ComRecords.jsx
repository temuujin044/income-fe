import { Leading, Eye, LeadingBlue } from "../icons";
import { Type, Category } from "@/pages/utils/recordsComData";
import AddCategory from "./AddCategory";
import Modal from "./Modal";
// import { RangeSlider } from "./Slider";

export default function ComRecords() {
  return (
    <div className=" w-[282px]  bg-[#FFFFFF] px-2 py-6 flex flex-col gap-8 items-start  rounded-xl">
      <div>
        <div className="w-[250px] h-[88px] flex flex-col gap-6">
          <h1 className=" text-[#000000] text-2xl font-semibold not-italic">
            Records
          </h1>

          <button
            className="flex h-[32px] items-center  justify-center gap-[5px] bg-[#0166FF] rounded-3xl text-[#FFFFFF] "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <Leading width={20} height={20} /> Add
          </button>
          <Modal />
        </div>
      </div>
      <div className="bg-[#F3F4F6] w-[250px] h-8 p-4 rounded-lg border border-gray-300 justify-start items-center inline-flex">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F3F4F6] w-[300px] h-8 text-neutral-700 text-base font-normal "
        />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-[#1F2937] text-base not-italic font-semibold">
          Types
        </h1>
        {Type.map((e) => (
          <div>
            <div className="text-center ">
              <label className=" cursor-pointer flex gap-2 items-center">
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller w-4 h-4"
                  value="retro"
                />
                <p className="text-[#1F2937] text-base not-italic font-normal">
                  {e.typeName}
                </p>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[250px] gap-1 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-[#1F2937] text-base not-italic font-semibold">
            Category
          </h1>
          <button className="text-[#1F2937] rounded-3xl">Clear</button>
        </div>
        {Category.map((e) => {
          return (
            <div>
              <div className="flex items-center justify-between">
                <div className="flex text-center items-center gap-2">
                  <Eye width={20} height={20} />
                  <p className="text-[#1F2937] text-base not-italic font-normal">
                    {e.cateName}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <AddCategory />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1F2937] text-base not-italic font-semibold">
          Amount Range
        </h1>

        {/* <RangeSlider /> */}
      </div>
    </div>
  );
}
