import { SiSimpleanalytics } from "react-icons/si";
import AdminDashboard from "../page/Dashboard/admin/AdminDashboard";
import AllRooms from "../page/Dashboard/admin/AllRooms";
import CreateRoom from "../page/Dashboard/admin/CreateRoom";
import { MdHouse } from "react-icons/md";
import { BsFillHouseCheckFill } from "react-icons/bs";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
    label: "Dashboard",
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
    label: "Dashboard",
    icon: <SiSimpleanalytics style={{ fontSize: "20px" }} />,
  },
  {
    path: "create-rooms",
    element: <CreateRoom />,
    label: "Create Room",
    icon: <MdHouse style={{ fontSize: "20px" }} />,
  },
  {
    path: "all-rooms",
    element: <AllRooms />,
    label: "All Rooms",
    icon: <BsFillHouseCheckFill style={{ fontSize: "20px" }} />,
  },
];
