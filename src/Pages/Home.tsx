import { Content, Footer, Header } from "antd/es/layout/layout";
import "../styles/Intro.css";
import "../styles/About.css";
import "../styles/Projects.css";
import { Button, Image, Layout, Switch } from "antd";
import React, { useEffect, useState } from "react";
import Link from "antd/es/typography/Link";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import { LinkedinOutlined } from "@ant-design/icons";
import About from "./About.tsx";
import Project from "./Project.tsx";

function Home() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    const sections = document.querySelectorAll("#home, #about, #project"); // Get all section elements
    const options = {
      root: null, // Observe relative to the viewport
      threshold: 0.6, // 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section); // Start observing each section
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Clean up observers on unmount
      });
    };
  }, []);
  const getMenuHeadingColor = () => {
    switch (activeSection) {
      case "home":
        return "#f87171";
      case "about":
        return "yellow";
      case "project":
        return "#0ea5e9";
      default:
        return "black";
    }
  };
  const homeClick = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const aboutClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const projectsClick = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    document.body.className = "dark";
  }, []);
  const toggleTheme = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setIsChecked(checked);
    document.body.className = newTheme; // Apply global theme class based on toggle
  };

  const menuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuClose = () => {
    setIsMenuOpen(false); // Use the same state variable to close the menu
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
              checked={isChecked} // Bind to the `isChecked` state
              style={{ zIndex: 2 }} // Ensure the switch is on top
            />
          </div>
        </div>
      </Header>
      {/* MENU BUTTON HERE */}
      <Content className="Content">
        <div>
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
              src={process.env.PUBLIC_URL + "/menu.png"}
              alt="Menu icon"
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

          {/* Sidebar */}
          <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
            <button onClick={menuClose} className="close-btn">
              <img
                src={process.env.PUBLIC_URL + "/close.png"}
                alt="Close menu"
                style={{ alignItems: "center", justifyContent: "center" }}
              />
            </button>
            <div className="Menu-content">
              <div style={{ fontSize: "75px", fontWeight: "700" }}>
                <div
                  style={{
                    color: getMenuHeadingColor(),
                    display: "inline-flex",
                  }}
                >
                  M
                </div>
                ENU
              </div>
              <nav style={{ fontSize: "0", fontWeight: "700" }}>
                <ul className="menu-ul">
                  <li>
                    <button className="home-nav" onClick={homeClick}>
                      <div className="nav-item">
                        HOME<span className="nav-dot">.</span>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="about-nav" onClick={aboutClick}>
                      <div className="nav-item">
                        ABOUT<span className="nav-dot">.</span>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="projects-nav" onClick={projectsClick}>
                      <div className="nav-item">
                        PROJECTS<span className="nav-dot">.</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </nav>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                  paddingBottom: "25px",
                }}
              >
                <div
                  style={{
                    color: getMenuHeadingColor(),
                    display: "inline-flex",
                  }}
                >
                  C
                </div>
                ONTACT
              </div>
              <div style={{ fontSize: "20px" }}>Muhammad Hassan Kashif</div>
              <div style={{ fontSize: "20px" }}>
                Hassan.kashif.pro@Gmail.com
              </div>{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HassanKashif-pro"
                className="Social-links-menu"
              >
                <GithubOutlined className="github-social" style={{}} />
                <Link href="https://www.linkedin.com/in/hassan-kashif-072628334/">
                  <LinkedinOutlined className="linkedIn-social" style={{}} />
                </Link>
              </Link>
            </div>
          </div>
        </div>
        <Content
          style={{
            paddingLeft: "60px",
            position: "relative",
          }}
          id="home"
        >
          <Content className="animated-text">
            <div className="Hello-1">HE</div>
            <div className="Hello-2">LLO</div>
            <div className="Hello-dot">.</div>
          </Content>
          <Content className="Intro-section" style={{ background: "#f87171" }}>
            <div style={{ top: "50%", position: "relative", left: "45%" }}>
              <img src={process.env.PUBLIC_URL + "/arrow.png"} alt="Arrow" />
            </div>
          </Content>
          <Content className="Social-links">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/HassanKashif-pro"
              className="Social-links"
            >
              <GithubOutlined />
              <Link href="https://www.linkedin.com/in/hassan-kashif-072628334">
                <LinkedinOutlined />
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
