import { Content, Footer, Header } from "antd/es/layout/layout";
import "../styles/Intro.css";
import "../styles/About.css";
import "../styles/Projects.css";
import { Button, Image, Layout, Switch } from "antd";
import React, { useState } from "react";
import Link from "antd/es/typography/Link";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import { LinkedinOutlined } from "@ant-design/icons";
import About from "./About.tsx";
import Project from "./Project.tsx";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    document.body.className = checked ? "dark" : "light"; // Apply global theme class
  };

  const menuOpen = () => {};

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
      <Content className="Content">
        <button
          className="Menu-animated"
          onClick={menuOpen}
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
        {/* THIS IS THE ABOUT SECTION */}
        <About />
        {/* THIS IS THE PROJECT SECTION */}
        <Project />
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
          zIndex: "1000",
        }}
      >
        @2024 MHK
      </Footer>
    </Layout>
  );
}

export default Home;
