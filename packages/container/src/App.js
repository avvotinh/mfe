import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <MarketingApp />
      </React.Fragment>
    </BrowserRouter>
  );
};
