import { Geld, GeldText, Money } from "./icons";

export const Currency = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center gap-[141px] pt-[40px]">
      <div className="flex flex-col items-center gap-[48px]">
        <div className=" flex gap-[11px] ">
          <Geld width={28} height={28} />
          <GeldText width={56} height={20} />
        </div>
        <div>
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary"> Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <div className="bg-[blue] p-[8px] rounded-[50%] ">
          <Money width={32} height={32} />
        </div>
        <p className="text-2xl font-medium">Select base currency</p>
      </div>
    </div>
  );
};
