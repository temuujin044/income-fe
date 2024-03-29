import { Geld } from "@/components/icons";
import Link from "next/link";
export default function Login() {
  return (
    <div className="w-[100vw]  bg-[#0166FF]">
      <div className="bg-[#fff] w-[50%] h-[100vh] inline-flex  flex-col justify-center items-center gap-[40px] ">
        <div className=" flex gap-[9.5px]  text-[#000]">
          <Geld width={24} height={24} />
          <p className="w-[48px] h-[17px] font-semibold">Geld</p>
        </div>
        <div className=" text-center">
          <p className="pb-[8px] text-2xl font-semibold text-[#0F172A]">
            Welcome Back
          </p>
          <p className="text-base font-normal text-[#334155]">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-[16px] w-[384px] ">
          <label className="input input-bordered flex items-center bg-[#F3F4F6]">
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center bg-[#F3F4F6]">
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <button className="w-[384px] h-[48px] bg-[#0166FF] br-[20px] rounded-[20px]">
            <p className="text-[#fff]">Log in</p>
          </button>
        </div>
        <div className="flex gap-[12px]">
          <p className="text-[#0F172A] text-base font-normal">
            Don’t have account?
          </p>
          <Link href="/signUp">
            <button>
              <p className="text-[#0166FF] text-base font-normal">Sign up </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
