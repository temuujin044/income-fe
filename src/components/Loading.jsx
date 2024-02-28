import { Geld } from "./icons";

export const Loading = () => {
  return (
    <div>
      <div>
        <Geld />
        <p className="w-[90px] h-[31px]">Geld</p>
      </div>
      <div className=" flex flex-col">
        <span className="loading loading-spinner loading-lg"></span>
        <p>Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
};
