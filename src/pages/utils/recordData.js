import { HomeBlue, Home, ForkKnife, AddCate } from "@/components/icons";

export const recordData = [
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#0166FF] flex justify-center items-center">
        <Home width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours 'ago",
    money: <div className="text-[#EAB308] ">- 1000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Restaurant, fast-food",
    hours: "3 hours ago",
    money: <div className="text-[#84CC16]">- 1000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Lending & Renting",
    hours: "2 hours ago",
    money: <div className="text-[#F54949]">- 2000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Bar, cafe",
    hours: "4 hours ago",
    money: <div className="text-[#EAB308]">- 1000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#F54949]">- 2000</div>,
  },
];

export const recordDataBotom = [
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#EAB308]">- 1000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#F54949]">- 2000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#84CC16]">- 1000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#EAB308]">- 3000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#84CC16]">- 2000</div>,
  },
  {
    input: <input type="checkbox" defaultChecked className="checkbox" />,
    homeLogo: (
      <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
        <ForkKnife width={20} height={20} />
      </div>
    ),
    categories: "Food & Drinks",
    hours: "1 hours ago",
    money: <div className="text-[#84CC16]">- 5000</div>,
  },
];

export const category = [
  {
    cateName: " Add Category",
    logo: <AddCate width={20} height={20} />,
  },
  {
    cateName: " Home",
    logo: <HomeBlue width={20} height={20} />,
  },
  {
    cateName: " Gift",
    logo: <img src="/Gift.svg" alt="" />,
  },
  {
    cateName: "Food",
    logo: <img src="/ForkKnife.svg" alt="" />,
  },
  {
    cateName: " Drinks",
    logo: <img src="/Wine.svg" alt="" />,
  },
  {
    cateName: " Taxi",
    logo: <img src="/Taxi.svg" alt="" />,
  },
  {
    cateName: " Shopping",
    logo: <img src="/TShirt.svg" alt="" />,
  },

  // { cateName: "Home" },
  // { cateName: "Gift" },
  // { cateName: "Food " },
  // { cateName: "Drinks" },
  // { cateName: "Taxi" },
  // { cateName: "Shopping" },
];
