import { Balance, Currency, Finish, Loading } from "@/components";

import { useState } from "react";

export const SignUpSteps = () => {
  const [showLoad, setShowLoad] = useState("SignUpSteps");

  return (
    <div>
      <div className={`${showLoad == "SignUpSteps" ? "block" : "hidden"}`}>
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
};

export default SignUpSteps;
