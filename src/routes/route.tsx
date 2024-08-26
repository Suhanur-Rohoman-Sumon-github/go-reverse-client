import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/ui/home/Home";
import About from "../page/ui/about/About";
import Contact from "../page/ui/contact/Contact";
import Login from "../page/ui/login/Login";
import Register from "../page/ui/login/Register";
import Error from "../page/ui/error/Error";
import DashBoardLayout from "../layouts/DashBoardLayout";

import { adminPaths } from "./adminroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashBoardLayout />,
    children: adminPaths,
  },
  {
    path: "/user",
    element: <DashBoardLayout />,
    children: adminPaths,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);

export default router;
