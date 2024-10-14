import { Content, Footer, Header } from "antd/es/layout/layout";
import "../styles/Home.css";
import { Button, Image, Layout, Switch } from "antd";
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
          zIndex: 1000, // Ensure it's on top
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
        <button
          className="Menu-animated"
          style={{
            background: "transparent",
            color: "#fff",
            border: "none",
          }}
        >
          <img
            src="/menu.png"
            alt="Menu"
            style={{
              width: 40,
              height: 40,
              position: "relative",
              bottom: "50px",
              left: "55px",
              transform: "rotate(-90deg)",
            }}
          />
          MENU
        </button>
        <Content
          style={{
            paddingLeft: "60px",
            position: "relative",
          }}
        >
          <Content>
            <div className="Hello-1">HE</div>
            <div className="Hello-2">LLO</div>
            <div className="Hello-dot">.</div>
          </Content>
          <Content className="Intro-section" style={{ background: "#f87171" }}>
            <div style={{ top: "50%", position: "relative", left: "45%" }}>
              <img src="/arrow.png" />
            </div>
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
        <Content
          style={{
            paddingTop: "90px",
            paddingLeft: "60px",
            position: "relative",
          }}
        >
          <Content className="About-section" style={{ background: "#FACC15" }}>
            <Content style={{}}>
              <div className="Hello-1" style={{ top: "35%", left: "20%" }}>
                AB
              </div>
              <div className="Hello-2" style={{ top: "24%", left: "19%" }}>
                OUT
              </div>
              <div
                className="Hello-dot"
                style={{ color: "#FACC15", top: "40%", left: "43%" }}
              >
                .
              </div>
            </Content>
            <div style={{ top: "45%", position: "relative" }}>
              <img src="/arrow.png" />
            </div>
          </Content>
        </Content>
        {/* THIS IS THE PROJECT SECTION */}
        <Content style={{ paddingRight: "60px" }}>
          <Content
            style={{
              paddingTop: "90px",
              paddingRight: "60px",
              position: "relative",
            }}
          >
            <Content
              className="Project-section"
              style={{ background: "#0EA5E9" }}
            >
              <Content style={{ backgroundColor: "" }}>
                <div className="Project-1">PRO</div>
                <div className="Project-2">JECTS</div>
                <div className="Project-dot" style={{ color: "#0EA5E9" }}>
                  .
                </div>
              </Content>
            </Content>
          </Content>
        </Content>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0, // Ensure it's fixed to the bottom of the page
          left: 0,
          width: "100%", // Ensure it spans the entire width of the page
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        @2024 MHK
      </Footer>
    </Layout>
  );
}

export default Home;
