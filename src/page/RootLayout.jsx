import React from "react";
import Hearder from "../compoents/Hearder";
import { Outlet } from "react-router-dom";
import Footer from "@compoents/Footer";
import "../compoents/rootlayout/rootlayout.scss"
const RootLayout = () => {
  return (
    <div>
      <div className="container">
        <Hearder /> {/*Các compont chung */}
        <div className="hiddenclass"></div>
      </div>
      <div className="container p-[60px]">
      <Outlet /> {/*các component ở giữa */}
      </div>
      <div className="container">
        <Footer /> {/*Các compont chung */}
      </div>
    </div>
  );
};

export default RootLayout;
