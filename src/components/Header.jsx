import { Geld } from "./icons";

export const Header = () => {
  return (
    <div className="w-[100vw]">
      <div className=" w-[1440px]">
        <div className="gap-[847px]">
          <Geld />
          <p>Dashboard</p>
          <p>Records</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
