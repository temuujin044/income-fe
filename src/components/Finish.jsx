import { Geld, GeldText, Good } from "./icons";
import { useRouter } from "next/router";

export const Finish = () => {
  const router = useRouter();

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
          <Good width={32} height={32} />
        </div>
        <p className="text-2xl text-[#0F172A] font-semibold mb-[24px]">
          Good job!
        </p>

        <p className="w-96 text-[#475569] text-base text-center font-normal  mb-[32px]">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <button
          onClick={() => router.push("/dashBoard")}
          className="w-[384px] h-[48px] bg-[#0166FF] rounded-[20px]"
        >
          <p className="text-xl font-normal text-[#fff]">Go to Dashboard</p>
        </button>
      </div>
    </div>
  );
};
