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
      className="main-section"
      style={{
        paddingTop: "90px",
        paddingLeft: "60px",
        position: "relative",
      }}
    >
      <Content className="About-section" style={{ background: "#FACC15" }}>
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
        <div className={`More-section ${isOpen ? "active" : ""}`}>
          <button
            onClick={moreClose}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            Close
          </button>
          <p>Hey, this is more information about me!</p>
          {/* Additional content here */}
        </div>
      </div>
    </Content>
  );
}

export default About;
