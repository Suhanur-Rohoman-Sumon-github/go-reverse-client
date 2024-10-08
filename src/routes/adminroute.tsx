import { SiSimpleanalytics } from "react-icons/si";
import AdminDashboard from "../page/Dashboard/admin/AdminDashboard";
import AllRooms from "../page/Dashboard/admin/AllRooms";
import CreateRoom from "../page/Dashboard/admin/CreateRoom";
import { MdHouse, MdOutlineExitToApp } from "react-icons/md";
import { BsFillHouseCheckFill } from "react-icons/bs";
import CreateSlots from "../page/Dashboard/admin/CreateSlots";
import { FaCheckToSlot } from "react-icons/fa6";
import GetAllBookingSlots from "../page/Dashboard/admin/GetAllBookingSlots";
import AllPendingBookings from "../page/Dashboard/admin/AllPendingBookings";

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
  {
    path: "crete-slots",
    element: <CreateSlots />,
    label: "Create Slots",
    icon: <FaCheckToSlot style={{ fontSize: "20px" }} />,
  },
  {
    path: "get-All-Slots",
    element: <GetAllBookingSlots />,
    label: "All slots",
    icon: <FaCheckToSlot style={{ fontSize: "20px" }} />,
  },
  {
    path: "pending-bookings",
    element: <AllPendingBookings />,
    label: "All bookings",
    icon: <MdOutlineExitToApp style={{ fontSize: "20px" }} />,
  },
];
