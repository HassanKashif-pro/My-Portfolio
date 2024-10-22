import React from "react";
import { Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";

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
  const cardType = [
    <img
      src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      alt="TypeScript Badge"
    />,
    <img
      src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
      alt="React Badge"
    />,
    <img
      src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
      alt="Tailwind CSS Badge"
    />,
    <img
      src="https://img.shields.io/badge/JavaScript-FFFF00?style=for-the-badge&logo=javascript&logoColor=black"
      alt="JavaScript Badge"
    />,
    <img
      src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
      alt="Next.js Badge"
    />,
    <img
      src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
      alt="Node.js Badge"
    />,
  ];

  const slides = [
    [0, 1, 4],
    [1, 3, 5],
    [1, 3, 5],
  ];

  const displaySlide = (slideIndex) => {
    return slides[slideIndex].map((index) => cardType[index]);
  };

  const cardType_1 = displaySlide(0);
  const cardType_2 = displaySlide(1);
  const cardType_3 = displaySlide(2);
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
                  <div className="card-Type">
                    {cardType_1.map((badge, index) => (
                      <div key={index}>{badge}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="project-end">
          More on&nbsp;
          <a
            href="https://github.com/HassanKashif-pro"
            style={{
              textDecoration: "none",
              color: "white",
              textDecorationLine: "underline",
            }}
          >
            GitHub
          </a>
          &nbsp;
          <GithubOutlined />
        </div>
        <br />
      </div>
    </Content>
  );
};

export default App;
