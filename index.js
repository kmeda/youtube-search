import ReactDom from "react-dom";
import React from "react";

import App from "./components/App";

const containerEl = document.getElementById("container");

ReactDom.render(
  <App/>,
  containerEl
);
