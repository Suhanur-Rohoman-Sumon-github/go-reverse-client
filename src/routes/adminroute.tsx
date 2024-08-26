import { SiSimpleanalytics } from "react-icons/si";
import AdminDashboard from "../page/Dashboard/admin/AdminDashboard";
import AllRooms from "../page/Dashboard/admin/AllRooms";
import CreateRoom from "../page/Dashboard/admin/CreateRoom";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { Tooltip } from "antd";

// Corrected type name to TSidebarItem
type TSidebarItem = {
  key: string;
  label: ReactNode;
  icon: ReactNode;
};

// Defining the admin paths
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
    icon: <SiSimpleanalytics style={{ fontSize: "24px" }} />,
  },
  {
    path: "create-rooms",
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

// Corrected reduce function with tooltip and conditional rendering logic
export const adminSidebar = (collapsed: boolean) =>
  adminPaths.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.icon && item.label) {
      acc.push({
        key: item.path,
        icon: collapsed ? (
          <Tooltip placement="right" title={item.label}>
            {item.icon}
          </Tooltip>
        ) : (
          item.icon
        ),
        label: !collapsed ? (
          <NavLink to={`${item.path}`}>{item.label}</NavLink>
        ) : undefined,
      });
    }
    return acc;
  }, []);

export default adminSidebar;
