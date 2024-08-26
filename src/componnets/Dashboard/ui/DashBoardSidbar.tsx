import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { BsHouses, BsHouseUpFill } from "react-icons/bs";
import logo from "../../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
import { SiSimpleanalytics } from "react-icons/si";
import { Button, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
const DashBoardSidbar = ({ collapsed }: { collapsed: boolean }) => {
  const [selectedKey, setSelectedKey] = useState<string>("1");

  const items = [
    {
      key: "1",
      icon: <BsHouseUpFill style={{ fontSize: "24px" }} />,
      label: "Create Room",
    },
    {
      key: "2",
      icon: <BsHouses style={{ fontSize: "24px" }} />,
      label: "Rooms Details",
    },
  ];

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
      <div>
        <Button
          className="w-full mb-4"
          icon={<SiSimpleanalytics />}
          style={{
            display: "flex",
            marginLeft: collapsed ? "24px" : "0px",
            alignItems: "center",
            backgroundColor: "#4cbfb0",
            color: "white",
            border: "none",
          }}
        >
          {!collapsed && "Dashboard"}
        </Button>
      </div>
      <Menu
        style={{
          fontSize: "larger",
          backgroundColor: "#fcfcfc",
        }}
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        items={items.map((item) => ({
          key: item.key,
          icon: collapsed ? (
            <Tooltip placement="right" title={item.label}>
              {item.icon}
            </Tooltip>
          ) : (
            item.icon
          ),
          label: !collapsed ? item.label : undefined,
          style: {
            backgroundColor: selectedKey === item.key ? "#4cbfb0" : undefined,
            color: selectedKey === item.key ? "white" : undefined,
            display: "flex",
            alignItems: "center",
            margin: " 16px 0",
          },
        }))}
      />
    </Sider>
  );
};

export default DashBoardSidbar;
