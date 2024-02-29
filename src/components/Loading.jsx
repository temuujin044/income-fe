import { Geld } from "./icons";

export const Loading = () => {
  return (
    <div className="bg-[#fff] w-[100vw ] h-[100vh] flex flex-col ">
      <div className="flex flex-col align-center justify-center">
        <div>
          <Geld width={44} height={44} />
          <p className="w-[90px] h-[31px]">Geld</p>
        </div>
        <div className=" flex flex-col">
          <span className="loading loading-spinner loading-lg"></span>
          <p>Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
};
