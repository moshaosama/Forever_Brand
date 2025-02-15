import { ReactElement } from "react";
import InputForm from "../../Atoms/Form/inputForm";
import Style from "./LoginFrom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/globalStore/store";
import { fetchLogin } from "../../../Store/Reducer/User/LoginReducer";
import { useNavigate } from "react-router";
import { inputForm } from "../../../Types/InputForm/InputForm";
import { useFormik } from "formik";
import * as Yup from "yup";
interface LoginFormProps {
  TextDesc: ReactElement;
}

const LoginForm = ({ TextDesc }: LoginFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.login);
  const Navigate = useNavigate();

  const formik = useFormik({
    initialValues: { Email: "", Password: "" },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: () => {
      const changeData = {
        Email: formik.values.Email,
        Password: formik.values.Password,
      };

      dispatch(fetchLogin(changeData));

      if (state.data && Object.keys(state.data).length > 0) {
        window.localStorage.setItem("Token", state.data.Token);
        Navigate("/");
      }
    },
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
              value={el.value}
            />
          );
        })}
      </>
    );
  };

  const InputList = [
    {
      Type: "text",
      Label: "Email",
      Name: "Email",
      value: formik.values.Email,
      onChange: formik.handleChange,
    },
    {
      Type: "password",
      Label: "Password",
      Name: "Password",
      value: formik.values.Password,
      onChange: formik.handleChange,
    },
  ];

  return (
    <>
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-5 my-5"
      >
        <InputRender />
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

export default LoginForm;
