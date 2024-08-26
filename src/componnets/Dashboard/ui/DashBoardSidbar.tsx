import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
import adminSidebar from "../../../routes/adminroute"; // Correctly import the sidebar function

const DashBoardSidbar = ({ collapsed }: { collapsed: boolean }) => {
  const [selectedKey, setSelectedKey] = useState<string>("dashboard");

  const handleMenuClick = (e: { key: string }) => {
    setSelectedKey(e.key);
  };

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
        onClick={handleMenuClick}
        items={adminSidebar(collapsed).map((item) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
          style: {
            backgroundColor: selectedKey === item.key ? "#4cbfb0" : undefined,
            color: selectedKey === item.key ? "white" : undefined,
            display: "flex",
            alignItems: "center",
            margin: "16px 0",
          },
        }))}
      />
    </Sider>
  );
};

export default DashBoardSidbar;
