import { LeadingBlue } from "../icons";

export default function AddCategory() {
  return (
    <div>
      <button
        className="flex items-center gap-2 text-[#1F2937] text-base not-italic font-normal"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <LeadingBlue width={20} height={20} /> Add Category
      </button>
      <dialog id="my_modal_2" className="modal  backdrop-blur-sm ">
        <div className="modal-box max-w-[494px]  bg-[#FFFFFF] p-0 ">
          <form method="dialog ">
            <button className="btn btn-ghost text-[#0F172A] w-6 h-6 absolute right-2 top-2 pt-2">
              ✕
            </button>
          </form>
          <h3 className="font-semibold not-italic text-xl  p-4">
            Add Category
          </h3>

          <div className="flex justify-center  border-t  border-[#E2E8F0] pt-3 px-6">
            <div className="flex gap-4 w-[494px] py-3">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn ">
                  Click
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                </ul>
              </div>
              <div>
                <select className="select select-bordered w-[350px] ">
                  <option disabled selected>
                    name
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-4 pb-7 flex justify-center">
            <button className="bg-[#16A34A] h-10 rounded-3xl w-full text-[#F9FAFB] font-normal not-italic text-base">
              Add Category
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
