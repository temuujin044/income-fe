import { Geld, Leading } from "./icons";
import { useRouter } from "next/router";
import Link from "next/link";
// import { ExpenseModal } from "./ExpenseModal";
// import { GraphHelpers } from "next/dist/compiled/webpack/webpack";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="w-[1440px] m-auto flex justify-between items-center  bg-[#fff] px-[120px] py-4 ">
      <div>
        <div class="navbar ">
          <div class="flex-none">
            <div className="text-">
              <Geld width={28} height={28} />
            </div>
            <Link href="/dashBoard">
              <p class="btn btn-ghost text-base ">Dashboard</p>
            </Link>
          </div>
          <div class="flex-1">
            <Link href="/record">
              <p class="btn btn-ghost text-base">Record</p>
            </Link>
          </div>
        </div>
      </div>

      <div class="avatar flex gap-5 justify-center items-center">
        <button
          className="h-[32px] flex w-[115px] rounded-3xl  justify-center gap-1 items-center bg-[#0166FF] border-none text-[white]"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <Leading width={20} height={20} />
          Record
        </button>
        {/* <dialog id="my_modal_2" className="modal">
          <div className=" ">
            <ExpenseModal />
          </div>
          <form method="dialog" className="modal-backdrop w-full">
            <button>close</button>
          </form>
        </dialog> */}
        <div className="avatar">
          <div className="w-[40px] h-[40px] rounded-[50%]">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
