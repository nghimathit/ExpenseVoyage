import React from "react";
import Hearder from "../compoents/Hearder";
import { Outlet } from "react-router-dom";
import Footer from "@compoents/Footer";
import "../compoents/rootlayout/rootlayout.scss";
import Sidebar from "./Sidebar";
const RootLayout = () => {
  return (
    <div>
      <div className="container m-0 p-0">
        <Hearder /> {/*Các compont chung */}
        <div className="hiddenclass"></div>
        <Sidebar />
      </div>
      <div className="container p-[60px]">
        <Outlet /> {/*các component ở giữa */}
      </div>
      <div className="container m-0 p-0">
        <Footer /> {/*Các compont chung */}
      </div>
    </div>
  );
};

export default RootLayout;
