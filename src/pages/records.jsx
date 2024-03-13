import { Layout } from "@/components";
import ComRecords from "@/components/recordsCom/ComRecords";
import ComRecordsRight from "@/components/recordsCom/ComRecordsRight";

export const Records = () => {
  return (
    <div className="flex items-center justify-center bg-[#F3F4F6] h-[100vh]">
      <ComRecords />
      <ComRecordsRight />
    </div>
  );
};
export default Records;
Records.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
