import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Because this is index.js which is the entry point to the app we need to use ReactDom to render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
