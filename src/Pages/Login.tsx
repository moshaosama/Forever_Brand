import { Link } from "react-router";
import TitleContent from "../Components/Atoms/TitleContent/TitleContent";
import LoginForm from "../Components/Molecules/LoginFrom/LoginForm";
import Style from "../Components/Molecules/LoginFrom/LoginFrom.module.css";

const Login = () => {
  const { Text } = Style;
  return (
    <div className="my-44">
      <TitleContent LeftTitle="" RightTitle="Login" Active={false} />
      <LoginForm
        TextDesc={
          <Link to={"/signup"}>
            <h1 className={Text}>Create account</h1>
          </Link>
        }
      />
    </div>
  );
};

export default Login;
