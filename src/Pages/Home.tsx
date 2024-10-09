import { Content, Footer, Header } from "antd/es/layout/layout";
import "../styles/Home.css";
import { Layout, Switch } from "antd";
import React, { useState } from "react";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    document.body.className = checked ? "dark" : "light"; // Add class to body for styling
  };
  return (
    <Layout style={{ minHeight:"100vh"}}>
      <Header className="header"         style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1, // Ensure it's on top
          background: '#001529', // Ant Design default header background
          padding: '0 20px', // Adjust padding for content inside header
          color: '#fff',
        }}>
        <div style={{ color: 'white', float: 'left', marginRight: '20px' }}>
          MHK
        </div>
        <div className="box" style={{ float: 'right' }}>
          <div className={`app ${theme}`}>
            {/* Switch for Theme Toggle */}
            <Switch 
              onChange={toggleTheme} 
              className="custom-switch" 
              checked={theme === 'dark'} 
              style={{ zIndex: 2 }} // Ensure the switch is on top
            />
          </div>
        </div>
      </Header>
        <Content className="Content" >
        <div style={{ padding: 24}}>
          RIGHT
        </div>
        <div style={{ padding: 24}}>
          RIGHT
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        @2024 MHK
      </Footer>
    </Layout>
  );
}

export default Home;
