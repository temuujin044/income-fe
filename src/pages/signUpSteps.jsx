import { Currency, Balance, Finish } from "@/components";
import { useState } from "react";

export default function SignUpSteps() {
  const [showLoad, setShowLoad] = useState("Currency");

  return (
    <div>
      <div className={`${showLoad == "Currency" ? "block" : "hidden"}`}>
        <Currency showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "Balance" ? "block" : "hidden"}`}>
        <Balance showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "Finish" ? "block" : "hidden"}`}>
        <Finish />
      </div>
    </div>
  );
}
