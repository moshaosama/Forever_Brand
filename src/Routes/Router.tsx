import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound";

// Lazy Load Pages
const Home = lazy(() => import("../Pages/Home"));
const Collections = lazy(() => import("../Pages/Collections"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));
const Login = lazy(() => import("../Pages/Login"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const Cart = lazy(() => import("../Pages/Cart"));
const Product = lazy(() => import("../Pages/Product"));
const Delivery = lazy(() => import("../Pages/Delivery"));
const Orders = lazy(() => import("../Pages/Orders"));
const Admin = lazy(() => import("../Pages/Admin"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <Product /> },
      { path: "collection", element: <Collections /> },
      { path: "collection/:id", element: <Product /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
      { path: "place-order", element: <Delivery /> },
      { path: "orders", element: <Orders /> },
      { path: "admin", element: <Admin /> },
    ],
  },
];

const RouterPages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Suspense>
  );
};

export default RouterPages;
