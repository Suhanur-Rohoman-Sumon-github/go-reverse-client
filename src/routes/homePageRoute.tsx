import Home from "../page/ui/home/Home";
import About from "../page/ui/about/About";
import Contact from "../page/ui/contact/Contact";
import RoomPage from "../page/ui/rooms/Room";
import SingleRoom from "../page/ui/rooms/SingleRoom";
import Checkout from "../page/ui/checkout/Checkout";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

export const homeRoutes = [
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
    element: <RoomPage />,
  },
  {
    path: "/rooms/:roomId",
    element: (
      <ProtectedRoute>
        <SingleRoom />
      </ProtectedRoute>
    ),
  },
  {
    path: "checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
];
