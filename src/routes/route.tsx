import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../page/ui/login/Login";
import Register from "../page/ui/login/Register";
import Error from "../page/ui/error/Error";
import DashBoardLayout from "../layouts/DashBoardLayout";

import { adminPaths } from "./adminroute";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import { userPaths } from "./userRoute";
import { homeRoutes } from "./homePageRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: homeRoutes,
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
