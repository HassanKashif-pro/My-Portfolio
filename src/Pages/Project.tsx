import { Content } from "antd/es/layout/layout";
import React from "react";
import App from "../Components/Carousel.tsx";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // For smooth scrolling
  });
};

function Project() {
  return (
    <Content>
      <Content className="Content-project">
        <App />
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
              <button
                style={{
                  position: "relative",
                  right: "12rem",
                  top: "12rem",
                  transform: "rotate(180deg)",
                  border: "none",
                  fontSize: "20px",
                  fontWeight: "700",
                  backgroundColor: "transparent",
                }}
                onClick={scrollToTop}
              >
                <div
                  style={{
                    rotate: "180deg",
                    color: "rgb(39, 39, 42)",
                  }}
                >
                  TOP
                </div>
                <img src="/arrow.png" />
              </button>
            </Content>
          </Content>
        </Content>
      </Content>
    </Content>
  );
}

export default Project;
