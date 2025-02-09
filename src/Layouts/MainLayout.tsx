import { Outlet } from "react-router";
import Header from "../Components/Common/Header/Header";
import Footer from "../Components/Common/Footer/Footer";
import CopyRight from "../Components/Common/CopyRight/CopyRight";

const MainLayout = () => {
  const path = window.location.pathname;
  return (
    <>
      {path !== "/login" ? <Header /> : null}
      <Outlet />
      {path !== "/login" ? <Footer /> : null}
      {path !== "/login" ? <CopyRight /> : null}
    </>
  );
};

export default MainLayout;
