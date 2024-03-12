import { Currency, Balance, Finish } from "@/components";
import { Geld } from "@/components/icons";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUpSteps() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <div className="w-[30%] my-auto">
        <div className="mb-[100px]">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Geld width={28} height={28} />
            <p className="text-[30px] text-black font-medium">Geld</p>
          </div>
          <div className="flex justify-center">
            <ul className="steps gap-8">
              <li className="step step-primary">Currency</li>
              <li className="step">Balance</li>
              <li className="step">Finish</li>
            </ul>
          </div>
        </div>
        <div>
          <Currency func={nextStep} step={step} />
          <Balance func={nextStep} step={step} />
          <Finish func={() => router.push("/")} step={step} />
        </div>
      </div>
    </div>
  );
}
