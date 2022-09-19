import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import CreateDriverModal from "./components/CreateDriverModal";
import DriversList from "./components/DriversList";
import "./App.scss";

const { Header, Content, Footer } = Layout;

const App = () => {
  const navs = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: "Motoristas",
    },
  ];

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header
        className="header"
        style={{
          background: "#fff",
          padding: "0px 5vw",
        }}
      >
        <div className="logo">
          <img
            src="https://www.truckpad.com.br/wp-content/uploads/2019/11/016f3cfa-truckpad-logo.svg"
            alt="truckpad-logo"
          />
        </div>
        <Menu
          className="menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navs}
        />
      </Header>
      <Content
        className="content"
        style={{
          margin: "24px 16px 0",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          <h3>Motoristas</h3>
          <DriversList />
          <CreateDriverModal>Novo motorista</CreateDriverModal>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Case Frontend React TruckPad - Luiz Antonio Motta
      </Footer>
    </Layout>
  );
};

export default App;
