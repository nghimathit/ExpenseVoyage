import Footer from "@compoents/Footer";
import HearderAdmin from "@compoents/HearderAdmin";
import React from "react";
import { Outlet, useLocation } from "react-router-dom"; 
const RootLayoutAdmin = () => {

  return (
    <div>
    <div className="container m-0 p-0">
      <HearderAdmin /> {/* Các component chung */}
    </div>
    <div className="container">
      <Outlet /> {/* Các component ở giữa */}
    </div>
    
  </div>
  );
};

export default RootLayoutAdmin;
