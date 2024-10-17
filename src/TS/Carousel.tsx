import React from "react";
import { Carousel } from "antd";
import { Content } from "antd/es/layout/layout";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "360px",
  color: "#fff",
  lineHeight: "360px",
  borderRadius: "100px",
  textAlign: "center",
  position: "relative", // To position overlays on top of the images
};

const App: React.FC = () => (
  <Content style={{ borderColor: "-moz-initial" }}>
    <div>
      <Carousel
        arrows
        autoplay
        infinite={true}
        dotPosition="bottom"
        className="carouselBox"
      >
        {["01", "02", "03"].map((number, index) => (
          <div key={index}>
            <div style={contentStyle}>
              <img
                src={`/banking.jpg`}
                style={{
                  height: "100%",
                  width: "100%",
                  opacity: "0.2",
                }}
                alt={`Slide ${index + 1}`}
              />
              <div className="overlay">
                <div className="number-badge">{number}</div>
                <div className="carousel-title">Project No. {index + 1}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <br />
    </div>
  </Content>
);

export default App;
