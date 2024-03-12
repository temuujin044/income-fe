import { Geld, GeldText, Money } from "./icons";

export const Currency = ({ setShowLoad }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center  pt-[40px]">
      <div className="flex items-center pb-[48px] gap-[12px]">
        <Geld width={28} height={28} />
        <GeldText width={56} height={20} />
      </div>
      <div>
        <ul className="steps w-[270px] pb-[141px]">
          <li className="step step-accent ">Currency</li>
          <li className="step ">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center ">
        <div className="bg-[blue] p-[8px] rounded-[50%] mb-[16px]">
          <Money width={32} height={32} />
        </div>
        <p className="text-2xl font-medium mb-[24px]">Select base currency</p>
        <select className="select select-bordered w-96 h-16 p-4 bg-[#F3F4F6] mb-[12px]">
          <option disabled selected>
            MNT -Mongolian Tugrik
          </option>
          <option>USD - American Dollar</option>
          <option>EUR - Euro</option>
          <option>CHY - Chinese Yuan</option>
        </select>
        <p className="w-96 text-[#475569] text-xs font-normal leading-none mb-[32px]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>

        <button
          onClick={() => {
            setShowLoad("Balance");
          }}
          className="w-[384px] h-[48px] bg-[#0166FF] rounded-[20px]"
        >
          <p className="text-xl font-normal text-[#fff]">Confirm</p>
        </button>
      </div>
    </div>
  );
};
