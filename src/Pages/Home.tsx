import { Content, Footer, Header } from "antd/es/layout/layout";
import "../styles/Home.css";
import { Layout, Switch } from "antd";
import React, { useState } from "react";
import Link from "antd/es/typography/Link";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import { LinkedinOutlined } from "@ant-design/icons";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    document.body.className = checked ? "dark" : "light"; // Apply global theme class
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1, // Ensure it's on top
          padding: "0 20px", // Adjust padding for content inside header
          color: "#fff",
        }}
      >
        <div style={{ color: "white", float: "left", marginRight: "20px" }}>
          MHK
        </div>
        <div className="box" style={{ float: "right" }}>
          <div className={`app ${theme}`}>
            {/* Switch for Theme Toggle */}
            <Switch
              onChange={toggleTheme}
              className="custom-switch"
              checked={theme === "dark"}
              style={{ zIndex: 2 }} // Ensure the switch is on top
            />
          </div>
        </div>
      </Header>

      {/* THAT RED BOX AT THE LEFT */}
      <Content className="Content">
        <Content
          className="Menu-animated"
          style={{ background: "transparent", color: "#fff" }}
        >
          MENU
        </Content>
        <Content style={{ paddingLeft: "60px", position: "relative" }}>
          <Content>
            <div className="Hello-1">HE</div>
            <div className="Hello-2">LLO</div>
            <div className="Hello-dot">.</div>
          </Content>
          <Content className="Intro-section" style={{ background: "#f87171" }}>
            <div className="scroll-down">← Scroll</div>
          </Content>
          <Content className="Social-links">
            <Link
              href="https://github.com/HassanKashif-pro"
              className="Social-links"
            >
              <GithubOutlined className="github-social" />
              <Link href="/pathwayhereforLinkedIn">
                <LinkedinOutlined className="linkedIn-social" />
              </Link>
            </Link>
          </Content>
        </Content>
      </Content>

      <Footer style={{ textAlign: "center" }}>@2024 MHK</Footer>
    </Layout>
  );
}

export default Home;
