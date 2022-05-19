import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV) {
  const devRoot = document.querySelector("#marketing-root");

  devRoot && mount(devRoot);
}

export { mount };
