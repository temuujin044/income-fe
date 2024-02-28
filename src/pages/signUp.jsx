import { Geld } from "@/components/icons";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className="w-[100vw]  bg-[#0166FF]">
      <div className="bg-[#fff] w-[50%] h-[100vh] inline-flex  flex-col justify-center items-center gap-[40px] ">
        <div className=" flex gap-[9.5px]  text-[#000]">
          <Geld width={24} height={24} />
          <p className="w-[48px] h-[17px] font-semibold">Geld</p>
        </div>
        <div className=" text-center">
          <p className="pb-[8px] text-2xl font-semibold text-[#0F172A]">
            Create Geld account
          </p>
          <p className="text-base font-normal text-[#334155]">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className="flex flex-col gap-[16px] w-[384px] ">
          <label className="input input-bordered flex items-center bg-[#F3F4F6]">
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center bg-[#F3F4F6]">
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center bg-[#F3F4F6]">
            <input type="text" className="grow" placeholder="Password" />
          </label>
          <label className="input input-bordered flex items-center bg-[#F3F4F6]">
            <input type="text" className="grow" placeholder="Re-password" />
          </label>
          <button className="w-[384px] h-[48px] bg-[#0166FF] br-[20px] rounded-[20px]">
            <p className="text-[#fff]">Sign up</p>
          </button>
        </div>
        <div className="flex gap-[12px]">
          <p className="text-[#0F172A] text-base font-normal">
            Already have account?
          </p>
          <Link href="/login">
            <button>
              <p className="text-[#0166FF] text-base font-normal">Log in</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
