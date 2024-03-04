import { Layout } from "@/components/layout";
import Noise from "@/components/dashboardCom/Noise";

export const DashBoard = () => {
  return (
    <div>
      <Noise />
    </div>
  );
};
export default DashBoard;
DashBoard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
// import Dashboardd from "@/components/Dashboardd";
// import Layout from "@/components/layout";
// export default function Dashboard() {
//   return (
//     <div>
//       <Dashboardd />
//     </div>
//   );
// }
// Dashboard.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
