import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
function About() {
  const [isOpen, setIsOpen] = useState(false);

  const moreOpen = () => {
    setIsOpen(!isOpen);
  };

  const moreClose = () => {
    setIsOpen(false);
  };

  return (
    <Content
      id="about"
      className={"main-section"}
      style={{
        paddingTop: "90px",
        paddingLeft: "60px",
        position: "relative",
        transition: "opacity 0.5s ease",
      }}
    >
      <Content
        className={`About-section ${isOpen ? "low-opacity" : ""}`}
        style={{ background: "#FACC15" }}
      >
        <Content>
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
        <div style={{ top: "88%", left: "85%", position: "relative" }}>
          <img src="/arrow.png" alt="Arrow" />
        </div>
      </Content>

      <Content className="about-info" style={{ background: "transparent" }}>
        <p style={{ fontSize: "30px", fontWeight: "700" }}>
          HI<span style={{ color: "#FACC15" }}>,</span> I AM
        </p>
        <div
          style={{ fontSize: "50px", fontWeight: "700", marginBottom: "10px" }}
        >
          Muhammad Hassan Kashif
        </div>
        <div
          style={{ fontSize: "20px", fontWeight: "500", letterSpacing: "3px" }}
        >
          Frontend <span style={{ color: "#FACC15" }}>|</span> Responsive{" "}
          <span style={{ color: "#FACC15" }}>|</span> Interactive Design
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "500",
            letterSpacing: "3px",
            marginTop: "20px",
          }}
        >
          HTML <span style={{ color: "#FACC15" }}>|</span> CSS{" "}
          <span style={{ color: "#FACC15" }}>|</span> JAVA SCRIPT
        </div>
      </Content>

      <div>
        <button
          className="More-animated"
          onClick={moreOpen}
          style={{
            background: "transparent",
            color: "#fff",
            border: "none",
            position: "absolute",
          }}
        >
          <img
            src="/triangle.png"
            alt="More"
            style={{
              width: 40,
              height: 40,
              position: "absolute",
              top: "34px",
              left: "25px",
              transform: "rotate(360deg)",
            }}
          />
          MORE
        </button>

        {/* Sidebar for more information */}
        <div
          className={`More-section ${isOpen ? "active" : ""}`}
          style={{ opacity: isOpen ? 1 : 1 }}
        >
          {/* Close button, only visible when the menu is open */}
          {isOpen && (
            <button
              className="more-close-btn"
              onClick={moreClose}
              style={{
                background: "transparent",
                color: "#fff",
                border: "none",
                position: "absolute",
              }}
            >
              <img
                src="/triangle.png"
                alt="More"
                style={{
                  width: 50,
                  height: 50,
                  position: "relative",
                  top: "55px",
                  left: "60px",
                  transform: "rotate(360deg)",
                }}
              />
              BACK
            </button>
          )}
          <div className="info-block">
            <div style={{ display: "inline-flex", fontSize: "35px" }}>
              HELLOW<span style={{ color: "#FACC15" }}>,</span>WORLD
              <span style={{ color: "#FACC15" }}>!</span>
            </div>
            <p className="description-block">
              As an enthusiastic web developer with a passion for coding and
              problem-solving, I have honed my skills through rigorous online
              courses such as Harvard's CS50x and The Odin Project. Though I am
              at the beginning of my professional journey, these comprehensive
              programs have equipped me with a solid foundation in HTML, CSS,
              JavaScript, and various modern web development frameworks. My
              portfolio reflects a commitment to continuous learning and
              showcases the practical projects I have completed, highlighting my
              ability to bring creative, interactive and responsive web
              solutions to life!
              <br />
              <br />
              Here are the tech stacks I have used in various projects:
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap" /* Wrap to next line if needed */,
                  gap: "10px",
                  paddingTop: "20px",
                }}
              >
                <img
                  src={process.env.REACT_APP_HTML5_BADGE}
                  alt="HTML5 Badge"
                />
                <img src={process.env.REACT_APP_CSS3_BADGE} alt="CSS3 Badge" />
                <img
                  src={process.env.REACT_APP_JAVASCRIPT_BADGE}
                  alt="JavaScript Badge"
                />
                <img
                  src={process.env.REACT_APP_TYPESCRIPT_BADGE}
                  alt="TypeScript Badge"
                />
                <img src={process.env.REACT_APP_C_BADGE} alt="C Badge" />
                <img
                  src={process.env.REACT_APP_PYTHON_BADGE}
                  alt="Python Badge"
                />
                <img
                  src={process.env.REACT_APP_REACT_BADGE}
                  alt="React Badge"
                />

                <img
                  src={process.env.REACT_APP_TAILWIND_BADGE}
                  alt="Tailwind CSS Badge"
                />
                <img
                  src={process.env.REACT_APP_BOOTSTRAP_BADGE}
                  alt="Bootstrap Badge"
                />

                <img
                  src={process.env.REACT_APP_PRETTIER_BADGE}
                  alt="Prettier Badge"
                />
                <img
                  src={process.env.REACT_APP_VSCODE_BADGE}
                  alt="Visual Studio Code Badge"
                />
                <img src={process.env.REACT_APP_GIT_BADGE} alt="Git Badge" />
              </div>
            </p>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default About;
