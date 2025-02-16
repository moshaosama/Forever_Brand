import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound";
import Product from "../Pages/Product";
import Delivery from "../Pages/Delivery";

const RouterPages = () => {
  const routerPages = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <Product />,
        },
        {
          path: "collection",
          children: [
            {
              index: true,
              element: <Collections />,
            },
            {
              path: ":id",
              element: <Product />,
            },
          ],
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "place-order",
          element: <Delivery />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerPages} />
    </>
  );
};

export default RouterPages;
