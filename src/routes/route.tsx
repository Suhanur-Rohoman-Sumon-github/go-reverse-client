import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/ui/home/Home";
import About from "../page/ui/about/About";
import Contact from "../page/ui/contact/Contact";
import Login from "../page/ui/login/Login";
import Register from "../page/ui/login/Register";
import Error from "../page/ui/error/Error";
import DashBoardLayout from "../layouts/DashBoardLayout";
import CreateRoom from "../page/Dashboard/admin/CreateRoom";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,

    children: [
      {
        path: "create-room",
        element: <CreateRoom />,
      },
    ],
  },
]);

export default router;
