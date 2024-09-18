import React from "react";
import Hearder from "../compoents/Hearder";
import { Outlet } from "react-router-dom";
import Footer from "@compoents/Footer";
import "../compoents/rootlayout/rootlayout.scss"
const RootLayout = () => {
  return (
    <div>
      <div className="w-full">
        <Hearder /> {/*Các compont chung */}
        <div className="hiddenclass"></div>
      </div>
      <Outlet /> {/*các component ở giữa */}
      <div className="w-full">
        <Footer /> {/*Các compont chung */}
      </div>
    </div>
  );
};

export default RootLayout;
