import React from "react";
import { Layout, Menu, PageHeader,Button } from "antd";
import FormRegister from "../components/FormRegister";
import SubMenu from "../components/SubMenu";
import DashBoard from "../components/DashBoard";
import FormMemorize from "../components/FormMemorize";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = props => {
  const { history } = props;
  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <SubMenu history={history}></SubMenu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, background: "white" }}
        >
          <PageHeader
            className="site-page-header"
            // onBack={() => null}
            title="Your are"
            subTitle="Admin"
            extra={[
              <Button key="1" type="danger">
                Logout
              </Button>,
            ]}
          />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          {props.children}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          ></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
