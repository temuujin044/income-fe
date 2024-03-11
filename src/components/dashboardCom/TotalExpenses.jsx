import { Arrow, Doth } from "../icons";

export const TotalExpenses = () => {
  return (
    <div className="flex w-[384px] flex-col items-start justify-center rounded-xl bg-[#FFFFFF] h-[208px] mt-10  ">
      <div className="flex items-center gap-2 p-4 h-[56px]  w-[384px] border-b">
        <Doth />
        <p className="text-[#0F172A]  text-[16px] ">Total Expenses</p>
      </div>

      <div className="flex flex-col items-start gap-5 pl-[20px] pr-[24px] py-[24px]">
        <div className="flex h-[64px] flex-col items-start ">
          <div className="flex items-start gap-1">
            <p className="text-[36px] text-black">-1,200,000</p>
            <p className="text-[36px] text-black">₮</p>
          </div>
          <p className="text-[#64748B] text-[18px]">Your Income Amount</p>
        </div>
        <div className="flex items-center gap-2">
          <Arrow />
          <p className="text-[18px] text-[#000000]">32% from last month</p>
        </div>
      </div>
    </div>
  );
};
