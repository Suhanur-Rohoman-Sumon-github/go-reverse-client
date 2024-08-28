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
import Room from "../page/ui/rooms/Room";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import { userPaths } from "./userRoute";
import SingleRoom from "../page/ui/rooms/SingleRoom";

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
      {
        path: "/rooms",
        element: <Room />,
      },
      {
        path: "/rooms/:roomId",
        element: <SingleRoom />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashBoardLayout />
      </ProtectedRoute>
    ),
    children: adminPaths,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashBoardLayout />
      </ProtectedRoute>
    ),
    children: userPaths,
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
