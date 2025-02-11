import React, { ReactElement, useState } from "react";
import InputForm from "../../Atoms/Form/inputForm";
import Style from "./LoginFrom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { fetchLogin } from "../../../Store/Reducer/User/LoginReducer";
import { useNavigate } from "react-router";
import { inputForm } from "../../../Types/InputForm/InputForm";
interface LoginFormProps {
  TextDesc: ReactElement;
}

const LoginForm = ({ TextDesc }: LoginFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.login);
  const Navigate = useNavigate();
  const [changeData, setChangeData] = useState({
    Email: "",
    Password: "",
  });
  const { Text, TextContainer, Btn } = Style;

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

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeData({ ...changeData, [e.target.name]: e.target.value });
  };

  const InputList = [
    {
      Type: "text",
      Label: "Email",
      Name: "Email",
      onChange: changeEvent,
    },
    {
      Type: "password",
      Label: "Password",
      Name: "Password",
      onChange: changeEvent,
    },
  ];

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      dispatch(fetchLogin(changeData));

      if (state.data && Object.keys(state.data).length > 0) {
        window.localStorage.setItem("Token", state.data.Token);
        Navigate("/");
      }
    } catch (err) {
      return err;
    }
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

export default LoginForm;
