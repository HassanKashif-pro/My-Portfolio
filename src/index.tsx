import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx"; // Ensure the path to App is correct
import "./index.css"; // Ensure the path to the CSS file is correct

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
