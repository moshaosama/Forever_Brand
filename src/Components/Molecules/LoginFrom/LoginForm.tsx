import React, { useState } from "react";
import InputForm from "../../Atoms/Form/inputForm";
import Style from "./LoginFrom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { fetchLogin } from "../../../Store/Reducer/User/LoginReducer";
import { useNavigate } from "react-router";
interface LoginFormProps {
  TextDesc: string;
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

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeData({ ...changeData, [e.target.name]: e.target.value });
  };

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
        <InputForm
          Type="text"
          Label="Email"
          Name="Email"
          onChange={changeEvent}
        />
        <InputForm
          Type="password"
          Label="Password"
          Name="Password"
          onChange={changeEvent}
        />
        <div className={`${TextContainer} w-96 max-sm:w-80 font-semibold`}>
          <h1 className={Text}>Forget Your Password?</h1>
          <h1 className={Text}>{TextDesc}</h1>
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
