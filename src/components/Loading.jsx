import { Geld, GeldText } from "./icons";

export const Loading = () => {
  return (
    <div className="bg-[#fff] w-[100vw ] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center  gap-[48px] w-[173px]">
        <div className="flex items-center gap-[17px]">
          <Geld width={44} height={43} />
          <GeldText width={90} height={31} />
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <span className="loading loading-spinner text-info"></span>
          <p className="text-[#0F172A] text-base font-semibold">
            Түр хүлээнэ үү...
          </p>
        </div>
      </div>
    </div>
  );
};
