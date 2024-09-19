import React from "react";
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './overview.scss'
const { RangePicker } = DatePicker;

function Overview(props) {
  return (
    <div className="container pl-40">
      <div className="mb-4 w-full flex-col justify-center rounded-lg p-4 shadow-lg">
        <span className="mb-3 block w-full text-[28px] font-semibold">
          Trip to Vietnam
        </span>
        <span className="">
          <Space direction="vertical" style={{ width: "100%", height: "56px" }}>
            <RangePicker style={{ width: "100%" }} />
          </Space>
        </span>
      </div>
      <div className="h-96 w-full">
        <div className="mb-3 flex justify-between">
          <div className="text-[24px] font-medium">
            <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
            <span>Explore</span>
          </div>
          <div>
            <button className="rounded-full bg-[#f75940] px-3 py-2 font-semibold text-[#fff]">
              Browse all
            </button>
          </div>
        </div>
        <div className=" w-44 bg-gray-50 rounded-xl shadow-md">
          <div className="h-28 w-full overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1690960644830-487c569ca6fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvJTIwY2hpJTIwbWluaHxlbnwwfHwwfHx8MA%3D%3D"
              className="h-full w-full rounded-lg object-cover scale-image"
              alt="ho chi minh"
            />
          </div>
          <div className="p-2">
            <span className="text-[18px] two-lines mb-2">Top places for Vietnam</span>
            <div className="flex justify-between">
            <div className="w-6 h-6 mb-2 ">
                <img src="https://zpsocial2-f14-org.zadn.vn/3f7dafff5d1abd44e40b.jpg" alt="" className="rounded-full"/>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Overview;
