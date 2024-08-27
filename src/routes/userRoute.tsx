import { SiSimpleanalytics } from "react-icons/si";
import AdminDashboard from "../page/Dashboard/admin/AdminDashboard";
import AllRooms from "../page/Dashboard/admin/AllRooms";
import CreateRoom from "../page/Dashboard/admin/CreateRoom";

export const userPaths = [
  {
    index: true,
    element: <AdminDashboard />,
    label: "Dashboard",
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
    label: "Dashboard",
    icon: <SiSimpleanalytics style={{ fontSize: "24px" }} />,
  },
  {
    path: "book slots",
    element: <CreateRoom />,
    label: "Create Room",
    icon: <SiSimpleanalytics style={{ fontSize: "24px" }} />,
  },
  {
    path: "all-rooms",
    element: <AllRooms />,
    label: "All Rooms",
    icon: <SiSimpleanalytics style={{ fontSize: "24px" }} />,
  },
];
