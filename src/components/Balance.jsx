import { Geld, GeldText, Coin } from "./icons";

export const Balance = ({ setShowLoad }) => {
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
      <div className="flex flex-col items-center ">
        <div className="bg-[blue] p-[8px] rounded-[50%] mb-[16px]">
          <Coin width={32} height={32} />
        </div>
        <p className="text-2xl font-medium mb-[24px]">
          Set up your cash Balance
        </p>
        <label className="input input-bordered flex items-center w-[384px] h-[48px] mb-[12px] bg-[#F3F4F6]">
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <p className="w-96 text-[#475569] text-xs font-normal leading-none mb-[32px]">
          How much cash do you have in your wallet?
        </p>
        <button
          onClick={() => {
            setShowLoad("Finish");
          }}
          className="w-[384px] h-[48px] bg-[#0166FF] rounded-[20px]"
        >
          <p className="text-xl font-normal text-[#fff]">Confirm</p>
        </button>
      </div>
    </div>
  );
};
