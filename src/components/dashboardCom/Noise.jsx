import { GeldWhite, GeldWhiteText, Wireless, Shape } from "../icons";

export const Noise = () => {
  return (
    <div className="mt-10 w-[384px] h-[208px] bg-[#0166FF] relative rounded-[20px] s">
      <div className="flex gap-2 items-center absolute top-[30px] left-[30px]">
        <GeldWhite width={20} height={20} />
        <GeldWhiteText width={42} height={15} />
      </div>
      <div
        className="inline-flex flex-col absolute left-[30px] top-[125px]
      items-start "
      >
        <p className="text-[16px] text-[#FFF] opacity-[0.5]">Cash</p>
        <p className="text-[24px] text-[#FFF]">10,000,00</p>
      </div>
      <div className=" left-[160px] absolute top-[12px]">
        <Shape width={385} height={220} />
      </div>
      <div className=" left-[320px] top-[148px] absolute">
        <Wireless width={40} height={40} />
      </div>
    </div>
  );
};
