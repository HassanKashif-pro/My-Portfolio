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
          <img src={process.env.PUBLIC_URL + "/arrow.png"} alt="Arrow" />
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
          Fullstack <span style={{ color: "#FACC15" }}>|</span> Developer{" "}
          <span style={{ color: "#FACC15" }}>|</span> Web App
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
          <span style={{ color: "#FACC15" }}>|</span> TYPE SCRIPT
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
            src={process.env.PUBLIC_URL + "/triangle.png"}
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
                src={process.env.PUBLIC_URL + "/triangle.png"}
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
              <div style={{ background: "#fffbe6", borderRadius: "14px", padding: "28px 32px", minWidth: "260px", boxShadow: "0 2px 12px #facc1533", textAlign: "center" }}>
                <div style={{ fontSize: "38px", marginBottom: "10px" }}>🏆</div>
                <div style={{ fontSize: "22px", fontWeight: 700, color: "#FACC15", marginBottom: "8px" }}>Fullstack Developer</div>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#222", marginBottom: "16px" }}>
                  Ship fast. Ship clean. UI/UX that users love.<br />
                  Under 3 years of experience and 10+ "successful" projects
                </div>
                <div style={{ fontSize: "14px", color: "#444", marginBottom: "4px" }}>
                Why hire me? Because your clients deserves better than a Vibecoded Slop.<br />
🧠 I write code that works harder than most interns.<br />
📈 I turn bugs into features and clicks into paying customers.
                </div>
              </div>
            </div>
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
