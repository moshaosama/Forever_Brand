import { Link } from "react-router-dom";
import TitleContent from "../Components/Atoms/TitleContent/TitleContent";
import SignupForm from "../Components/Molecules/SignupForm/SignupForm";
import Style from "../Components/Molecules/LoginFrom/LoginFrom.module.css";

const SignUp = () => {
  const { Text } = Style;
  return (
    <>
      <div className="my-44">
        <TitleContent LeftTitle="" RightTitle="Sign Up" Active={false} />
        <SignupForm
          TextDesc={
            <Link to={"/login"}>
              <h1 className={Text}>Login Here</h1>
            </Link>
          }
        />
      </div>
    </>
  );
};

export default SignUp;
