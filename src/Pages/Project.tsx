import { Content } from "antd/es/layout/layout";
import React from "react";
import App from "../TS/Carousel.tsx";

function Project() {
  return (
    <Content>
      <Content className="Content-project">
        <Content
          className="carouselBox"
          style={{ padding: 0, paddingLeft: "0" }}
        >
          <App />
        </Content>
        <Content style={{ paddingRight: "60px", paddingLeft: "60px" }}>
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
              <div
                style={{
                  position: "relative",
                  right: "12rem",
                  top: "12rem",
                  transform: "rotate(180deg)",
                }}
              >
                <img src="/arrow.png" />
              </div>
            </Content>
          </Content>
        </Content>
      </Content>
    </Content>
  );
}

export default Project;
