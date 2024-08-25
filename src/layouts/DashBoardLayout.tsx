import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),

  label: `nav ${index + 1}`,
}));

const DashBoardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div style={{ border: "2px solid red" }}>
      <Layout>
        <Sider
          style={{ background: "red" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <h1>hi</h1>
        </Sider>
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              backgroundColor: "red",
            }}
          >
            <div className="demo-logo" />
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "red",
                borderRadius: borderRadiusLG,
              }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashBoardLayout;
