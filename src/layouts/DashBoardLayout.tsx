import React, { useState } from "react";
import "./dashboard.css";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import DashBoardSidbar from "../componnets/Dashboard/ui/DashBoardSidbar";
import DashBoardHeader from "../componnets/Dashboard/ui/DashBoardHeader";
const { Content } = Layout;

const DashBoardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <DashBoardSidbar collapsed={collapsed} />
      <Layout>
        <DashBoardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
