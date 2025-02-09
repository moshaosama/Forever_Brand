import TitleContent from "../Components/Atoms/TitleContent/TitleContent";
import LoginForm from "../Components/Molecules/LoginFrom/LoginForm";

const Login = () => {
  return (
    <div className="my-44">
      <TitleContent LeftTitle="" RightTitle="Login" Active={false} />
      <LoginForm TextDesc="Create account" />
    </div>
  );
};

export default Login;
