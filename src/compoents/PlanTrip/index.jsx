import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function PlanStrip() {
  return (
    <div className="w-full text-center">
      <span className="text-[30px] font-bold">Plant a new strip</span>
      <div className="flex h-full w-full justify-center">
        <div className="relative h-14 w-1/2 rounded-lg border-[1px] border-solid border-[#dee2e6] p-2">
          <label
            htmlFor="where"
            className="absolute top-[10%] text-[12px] font-bold"
          >
            Where to?
          </label>
          <input
            type="text"
            className="h-full w-full pt-2 text-[14px] outline-none"
            placeholder="e.g.Paris,Hawaii,Vietnam"
          />
        </div>
      </div>
      <small className="text-[red]">
        Choose a destination to start planning
      </small>
        <div className="flex h-full w-full justify-center mb-5">
          <div className="relative h-full w-1/2 rounded-lg border-[1px] border-solid border-[#dee2e6]">
            
            <Space direction="vertical" style={{ width: "100%",height: "56px" }} >
              <RangePicker style={{width: "100%", height: "56px" }} />
            </Space>
          </div>
        </div>
        <div className="w-full">
            <button className="py-3 px-4 bg-[#f75940;] rounded-full text-[#fff] font-semibold">Start planning</button>
        </div>
    </div>
  );
}

export default PlanStrip;
