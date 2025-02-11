import { ReactElement, useState } from "react";
import InputForm from "../../Atoms/Form/inputForm";
import Style from "../../Molecules/LoginFrom/LoginFrom.module.css";
import { inputForm } from "../../../Types/InputForm/InputForm";

import { useDispatch } from "react-redux";
import { fetchSignUp } from "../../../Store/Reducer/User/SignUpReducer";
import { AppDispatch } from "../../../Store/globalStore/store";

interface SignUpFormProps {
  TextDesc: ReactElement;
}

const SignupForm = ({ TextDesc }: SignUpFormProps) => {
  const { Text, TextContainer, Btn } = Style;
  const dispatch = useDispatch<AppDispatch>();
  const [DataInput, setDataInput] = useState({
    userName: "",
    Email: "",
    Password: "",
  });

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const InputList = [
    {
      Type: "text",
      Label: "userName",
      Name: "userName",
      onChange: () => changeEvent,
    },
    {
      Type: "text",
      Label: "Email",
      Name: "Email",
      onChange: () => changeEvent,
    },
    {
      Type: "password",
      Label: "Password",
      Name: "Password",
      onChange: () => changeEvent,
    },
  ];

  const InputRender = () => {
    return (
      <>
        {InputList.map((el: inputForm) => {
          return (
            <InputForm
              Type={el.Type}
              Label={el.Label}
              Name={el.Name}
              onChange={el.onChange}
            />
          );
        })}
      </>
    );
  };

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(fetchSignUp(DataInput));
  };

  return (
    <>
      <form action="" className="flex flex-col items-center gap-5 my-5">
        <InputRender />

        <div className={`${TextContainer} w-96 max-sm:w-80 font-semibold`}>
          <h1 className={Text}>Forget Your Password?</h1>
          {TextDesc}
        </div>

        <button
          className={`${Btn} w-32 my-4  transition-all duration-300 `}
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default SignupForm;
