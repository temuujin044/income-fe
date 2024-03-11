import { Layout } from "@/components";
import {
  Noise,
  YourIncome,
  TotalExpenses,
  IncomeExpense,
} from "@/components/dashboardCom";

export const DashBoard = () => {
  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-[20px]">
      <div className="flex gap-[20px]">
        <Noise />
        <YourIncome />
        <TotalExpenses />
      </div>
      <div>
        <IncomeExpense />
      </div>
    </div>
  );
};
export default DashBoard;
DashBoard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
