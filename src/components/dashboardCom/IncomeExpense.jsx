import { BarChart, Donut } from "./chart.js";

export const IncomeExpense = () => {
  return (
    <div className="flex">
      <div className="flex w-[580px] h-[284px] flex-col items-start rounded-xl bg-[#FFF] relative">
        <div className="flex w-[580px] h-[284px] p-4 justify-between items-center border-b">
          <h1 className="text-[16px] text-[#0F172A] pl-4 text-">
            Income - Expense
          </h1>
        </div>
        <div className="flex jusitfy-center items-center w-[580px] h-[284px] pl-2">
          <BarChart />
        </div>
      </div>
      <div className="flex w-[580px] h-[284px] flex-col items-start rounded-xl bg-[#FFF] relative">
        <div className="flex w-[580px] h-[284px] p-4 justify-between items-center border-b">
          <h1 className="text-[16px] text-[#0F172A] pl-4 text-">
            Income - Expense
          </h1>
        </div>
        <div className="flex jusitfy-center items-center w-[580px] h-[284px] pl-2">
          <Donut />
        </div>
      </div>
    </div>
  );
};
