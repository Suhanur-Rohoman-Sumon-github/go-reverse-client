import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
import { sidebarItemsGenerator } from "../../../utils/sidebarItemGenaretor";
import { adminPaths } from "../../../routes/adminroute";
import { useAppSelector } from "../../../redux/hook";
import { currentUser } from "../../../redux/fetures/auth/auth.slice";
import { userPaths } from "../../../routes/userRoute";

const DashBoardSidbar = ({ collapsed }: { collapsed: boolean }) => {
  const location = useLocation();
  const user = useAppSelector(currentUser);

  const selectedKey = location.pathname.split("/").filter(Boolean).pop() || "";

  let sidebarItem;
  switch (user!.role) {
    case "admin":
      sidebarItem = sidebarItemsGenerator(adminPaths, collapsed).map(
        (item) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
          style: {
            backgroundColor: selectedKey === item.path ? "#4cbfb0" : undefined,
            color: selectedKey === item.path ? "white" : undefined,
            display: "flex",
            alignItems: "center",
            margin: "16px 0",
          },
        })
      );
      break;
    case "user":
      sidebarItem = sidebarItemsGenerator(userPaths, collapsed).map((item) => ({
        key: item.key,
        icon: item.icon,
        label: item.label,
        style: {
          backgroundColor: selectedKey === item.key ? "#4cbfb0" : "",
          color: selectedKey === item.key ? "white" : "",
          display: "flex",
          alignItems: "center",
          margin: "16px 0",
        },
      }));
      break;
    default:
      break;
  }

  return (
    <Sider
      style={{ backgroundColor: "#fcfcfc" }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical">
        <Link to={"/"}>
          <img src={logo} className="h-full w-full" alt="Logo" />
        </Link>
      </div>

      <Menu
        style={{
          fontSize: "larger",
          backgroundColor: "#fcfcfc",
        }}
        mode="inline"
        selectedKeys={[selectedKey]}
        items={sidebarItem}
      />
    </Sider>
  );
};

export default DashBoardSidbar;
