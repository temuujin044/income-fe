import { Geld, GeldText } from "./icons";

export const Currency = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex gap-[11px] ">
        <Geld width={28} height={28} />
        <GeldText width={56} height={20} />
      </div>
      <div>
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
    </div>
  );
};
