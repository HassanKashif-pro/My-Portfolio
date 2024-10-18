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
