import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world w"
);
ReactDOM.render(element, document.getElementById("root"));
reportWebVitals();
