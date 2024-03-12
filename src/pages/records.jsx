import { Layout } from "@/components";
import ComRecords from "@/components/recordsCom/ComRecords";
import ComRecordsRight from "@/components/recordsCom/ComRecordsRight";

export const Records = () => {
  return (
    <div className="flex">
      <ComRecords />
      <ComRecordsRight />
    </div>
  );
};
export default Records;
Records.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
