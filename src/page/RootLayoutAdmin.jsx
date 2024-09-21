
import HearderAdmin from "@compoents/HearderAdmin";
import SidebarAdmin from "@compoents/SidebarAdmin ";
import React from "react";
import { Outlet,  } from "react-router-dom"; 
import "../compoents/rootlayout/rootlayoutadmin.scss";
const RootLayoutAdmin = () => {

  return (
    <div>
    <div className="container m-0 p-0">
      <HearderAdmin /> {/* Các component chung */}
      
      <SidebarAdmin />

     
    </div>
    <div className="display">
      <Outlet /> {/* Các component ở giữa */}
    </div>
    
  </div>
  );
};

export default RootLayoutAdmin;
