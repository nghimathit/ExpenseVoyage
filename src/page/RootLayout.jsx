import React from "react";
import Hearder from "../compoents/Hearder";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "@compoents/Footer";
import "../compoents/rootlayout/rootlayout.scss";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div>
      <div className="container m-0 p-0">
        <Hearder /> {/* Các component chung */}
        <div className="hiddenclass"></div>
        {location.pathname.startsWith("/tour") || location.pathname.startsWith("/overview") ? <Sidebar /> : null}
        </div>
      <div className="container">
        <Outlet /> {/* Các component ở giữa */}
      </div>
      <div className="m-0 p-0">
        <Footer /> {/*Các compont chung */}
      </div>
    </div>
  );
};

export default RootLayout;
