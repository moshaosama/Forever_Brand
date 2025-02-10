import { ReactElement } from "react";
import InputForm from "../../Atoms/Form/inputForm";
import Style from "../../Molecules/LoginFrom/LoginFrom.module.css";

interface SignUpFormProps {
  TextDesc: ReactElement;
}

const SignupForm = ({ TextDesc }: SignUpFormProps) => {
  const { Text, TextContainer, Btn } = Style;
  return (
    <>
      <form action="" className="flex flex-col items-center gap-5 my-5">
        <InputForm Type="text" Label="Name" Name="Name" onChange={() => {}} />
        <InputForm Type="text" Label="Email" Name="Email" onChange={() => {}} />
        <InputForm
          Type="password"
          Label="Password"
          Name="Password"
          onChange={() => {}}
        />

        <div className={`${TextContainer} w-96 max-sm:w-80 font-semibold`}>
          <h1 className={Text}>Forget Your Password?</h1>
          {TextDesc}
        </div>

        <button className={`${Btn} w-32 my-4  transition-all duration-300 `}>
          Sign in
        </button>
      </form>
    </>
  );
};

export default SignupForm;
