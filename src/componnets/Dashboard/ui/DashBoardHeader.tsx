import { Avatar, Breadcrumb, Button, Dropdown, Menu, Tooltip } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { FaMessage, FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
type DashBoardHeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const DashBoardHeader = ({ collapsed, setCollapsed }: DashBoardHeaderProps) => {
  const { pathname } = useLocation();
  const generateBreadcrumbItems = () => {
    const pathnames = pathname.split("/").filter((x) => x);
    return [
      ...pathnames.map((value, index) => {
        const url = `/${pathnames.slice(0, index + 1).join("/")}`;
        return { title: value, path: url };
      }),
    ];
  };

  const breadcrumbItems = generateBreadcrumbItems();
  const menuItems = (
    <Menu>
      <Menu.Item key="profile">
        <Button type="text">Profile</Button>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button type="text">Logout</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header style={{ padding: "0 16px", backgroundColor: "#fcfcfc" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 84,
              height: 84,
              color: "#4cbfb0",
            }}
          />
          <div className="hidden md:block">
            <Breadcrumb>
              {breadcrumbItems.map((breadcrumb, index) => (
                <Breadcrumb.Item key={index}>
                  <Link to={breadcrumb.path}>
                    <p className="text-[#4cbfb0]">{breadcrumb.title}</p>
                  </Link>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
        </div>

        {/* Right side of the header */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FaMessage
            style={{ fontSize: "30px", cursor: "pointer", color: "#4cbfb0" }}
          />
          <IoIosNotifications
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: "#4cbfb0",
            }}
          />
          <div>
            <Tooltip placement="right" title="John Doe">
              <Dropdown
                overlay={menuItems}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Avatar
                  size={40}
                  icon={<FaUser />}
                  style={{ cursor: "pointer" }}
                />
              </Dropdown>
            </Tooltip>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DashBoardHeader;
