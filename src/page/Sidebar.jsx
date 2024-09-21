import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "@Context/ModalProvider";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [datatime, setDatatime] = useState([]);
  const { startDate, endDate } = useContext(ModalContext);


  // Hàm format ngày tháng thành "Tue 9/3"
  const formatDayMonth = (date) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = daysOfWeek[date.getDay()]; // Lấy ngày trong tuần
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
    const dayOfMonth = date.getDate(); // Lấy ngày trong tháng
    return `${day} ${month}/${dayOfMonth}`;
  };
  useEffect(() => {
    console.log()
  })
  // Hàm tính chuỗi ngày giữa startDate và endDate
  const calculateDaysBetween = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const dates = [];

    // Duyệt qua từng ngày từ startDate đến endDate
    while (startDate <= endDate) {
      dates.push(new Date(startDate)); // Thêm mỗi ngày vào mảng
      startDate.setDate(startDate.getDate() + 1); // Tăng một ngày
    }
    return dates;
  };

  return (
    <div>
      <div className="fixed z-10 h-screen w-48 border-[1px] border-solid border-r-[#cfcfcf] bg-[#fff] p-3 overflow-auto">
        <div className="cursor-pointer rounded-lg bg-[#212529] p-2 text-[18px] font-extrabold text-[#fff]">
          <FontAwesomeIcon icon={faChevronDown} />{" "}
          <span className="pl-2">OverView</span>
        </div>
        <div className="menu my-2 list-none pl-3">
          <li className="my-2">Explore</li>
          <li className="my-2">Notes</li>
          <li className="my-2">Place to visits</li>
        </div>
        <Link to={'/tour'}>
        <div className="cursor-pointer rounded-lg my-3 bg-[#212529] p-2 text-[18px] font-extrabold text-[#fff]">
          <FontAwesomeIcon icon={faChevronRight} />{" "}
          <span className="pl-2">Tour</span>
        </div>
        </Link>
        <div className="cursor-pointer rounded-lg bg-[#212529] p-2 text-[18px] font-extrabold text-[#fff]">
          <FontAwesomeIcon icon={faChevronDown} />{" "}
          <span className="pl-2">Itinerary</span>
        </div>
        <div className="menu my-2 list-none pl-3">
          {startDate && endDate && 
            calculateDaysBetween(startDate, endDate).map((date, index) => (
              <li key={index} className="my-2">
                {formatDayMonth(date)}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
