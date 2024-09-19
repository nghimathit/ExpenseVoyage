import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Sidebar(props) {
  return (
    <div>
      <div className="fixed h-screen w-48 border-[1px] border-solid border-r-[#cfcfcf] bg-[#fff] p-3 z-10">
        <div className="cursor-pointer rounded-lg bg-[#212529] p-2 text-[18px] font-extrabold text-[#fff]">
          <FontAwesomeIcon icon={faChevronDown} />{" "}
          <span className="pl-2">OverView</span>
        </div>
        <div className="menu my-2 list-none pl-3">
          <li className="my-2">Explore</li>
          <li className="my-2">Notes</li>
          <li className="my-2">Place to visits</li>
        </div>
        <div className="cursor-pointer rounded-lg bg-[#212529] p-2 text-[18px] font-extrabold text-[#fff]">
          <FontAwesomeIcon icon={faChevronDown} />{" "}
          <span className="pl-2">Itinerary</span>
        </div>
        <div className="menu my-2 list-none pl-3">
          <li className="my-2">Tue 9/3</li>
          <li className="my-2">Wed 9/4</li>
          <li className="my-2">Thu 9/5</li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
