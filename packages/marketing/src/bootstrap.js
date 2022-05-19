import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV) {
  const devRoot = document.querySelector("#marketing-root");

  devRoot && mount(devRoot);
}

export { mount };
