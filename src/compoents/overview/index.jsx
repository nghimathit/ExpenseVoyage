import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function Overview(props) {
  return (
    <div className="container pl-40">
      <div className=" w-full flex-col justify-center rounded-lg p-4 shadow-lg mb-4">
        <span className="block w-full text-[28px] mb-3 font-semibold">
          Trip to Vietnam
        </span>
        <span className="">
          <Space direction="vertical" style={{ width: "100%", height: "56px" }}>
            <RangePicker style={{ width: "100%", }} />
          </Space>
        </span>
      </div>
      <div className="w-full h-96 bg-slate-500">

      </div>
    </div>
  );
}

export default Overview;
