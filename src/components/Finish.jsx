import { Geld, GeldText, Good } from "./icons";
import { useRouter } from "next/router";

export const Finish = ({ func, step }) => {
  const router = useRouter();

  return (
    <div
      className={
        step == 3
          ? "w-[100vw] h-[100vh] flex flex-col items-center gap-[141px] pt-[40px]"
          : "hidden"
      }
    >
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
          <p onClick={func} className="text-xl font-normal text-[#fff]">
            Go to Dashboard
          </p>
        </button>
      </div>
    </div>
  );
};
