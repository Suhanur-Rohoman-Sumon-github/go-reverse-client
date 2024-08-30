import { SiSimpleanalytics } from "react-icons/si";
import UserDashBoard from "../page/Dashboard/user/UserDashBoard";
import MyBookings from "../page/Dashboard/user/MyBookings";
import { BiSolidBookContent } from "react-icons/bi";

export const userPaths = [
  {
    index: true,
    element: <UserDashBoard />,
    label: "Dashboard",
  },
  {
    path: "dashboard",
    element: <UserDashBoard />,
    label: "Dashboard",
    icon: <SiSimpleanalytics style={{ fontSize: "24px" }} />,
  },
  {
    path: "my-booking",
    element: <MyBookings />,
    label: "my bookings",
    icon: <BiSolidBookContent style={{ fontSize: "24px" }} />,
  },
];
