import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/ui/home/Home";
import About from "../page/ui/about/About";
import Contact from "../page/ui/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
]);

export default router;
