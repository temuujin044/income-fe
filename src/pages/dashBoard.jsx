import { Layout } from "@/components";
import {
  Noise,
  YourIncome,
  TotalExpenses,
  IncomeExpense,
  IncomeExpDonut,
} from "@/components/dashboardCom";
import LastRecords from "@/components/dashboardCom/LastRecords";

export const DashBoard = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-[20px] bg-[#F3F4F6] h-[100vh] w-[100vw]">
      <div className="flex gap-[20px]">
        <Noise />
        <YourIncome />
        <TotalExpenses />
      </div>
      <div className="flex gap-[24px]">
        <IncomeExpense />
        <IncomeExpDonut />
      </div>
      <div className="">
        <LastRecords />
      </div>
    </div>
  );
};
export default DashBoard;
DashBoard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
