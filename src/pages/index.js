import Login from "./login";

import index from "../components/index";
import { SignUp } from "./signUp";
import SignUpSteps from "./signUpSteps";

export default function Home() {
  return (
    <>
      <Login />;
      <SignUp />
      <SignUpSteps />
    </>
  );
}
