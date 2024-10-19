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

const App: React.FC = () => {
  const images = ["/banking.jpg", "/todo.jpg", "/AiChatbot.jpg"];
  const projects = ["Banking App", "Todo App", "AI Chatbot"];

  return (
    <Content>
      <div>
        <Carousel
          arrows
          autoplay
          infinite={true}
          dotPosition="bottom"
          className="carouselBox"
        >
          {images.map((image, index) => (
            <div key={index}>
              <div style={contentStyle}>
                <img
                  src={image} // Dynamically assign the src from the array
                  style={{
                    height: "100%",
                    width: "100%",
                    opacity: "0.6",
                    objectFit: "cover", // Ensures the image fills the space without stretching
                  }}
                  alt={`Slide ${index + 1}`}
                />
                <a
                  href="https://github.com/HassanKashif-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button style={{ position: "absolute", cursor: "pointer" }}>
                    <div
                      style={{
                        bottom: "70%",
                        color: "#fff",
                        position: "absolute",
                        display: "inline-flex", // Align items in a row
                        alignItems: "center", // Vertically center the text and image
                        fontSize: "20px",
                        fontWeight: "600",
                        opacity: "0.4",
                        zIndex: "1000",
                      }}
                    >
                      Repo
                      <img
                        src="/open.png"
                        style={{ marginLeft: "8px" }}
                        alt="Open Icon"
                      />
                    </div>
                  </button>
                </a>
                <div className="overlay">
                  <div className="number-badge">{`0${index + 1}`}</div>
                  <div className="carousel-title">{projects[index]}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <br />
      </div>
    </Content>
  );
};

export default App;
