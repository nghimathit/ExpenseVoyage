import React, { useContext, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker, Space } from "antd";
import country from "@compoents/country";
import { ModalContext } from "@Context/ModalProvider";
import { useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;

function PlanStrip() {
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState("");
  const { setStartDate, setEndDate, startDate, endDate, setCountries } =
    useContext(ModalContext);
  const navigate = useNavigate();
  const handlePlantChange = (event, newValue) => {
    if (!newValue) {
      setError("Choose a destination to start planning");
    } else {
      setError("");
    }
    setPlant(newValue);
    setCountries(newValue);
  };
  const handleDateChange = (dates) => {
    if (dates) {
      setStartDate(dates[0]);
      setEndDate(dates[1]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };
  const handleSubmit = () => {
    if (!plant) {
      setError("Choose a destination to start planning");
      return;
    }

    if (!startDate || !endDate) {
      setError("Select a valid date range");
      return;
    }

    navigate("/overview"); 
  };
  return (
    <div className="mb-5 w-full text-center">
      <span className="text-[30px] font-bold">Plan a new trip</span>
      <div className="flex h-full w-full justify-center">
        <div className="relative h-14 w-1/2 rounded-lg p-2">
          <label
            htmlFor="where"
            className="absolute left-[20px] top-[18px] text-[8px] font-bold"
          >
            Where to?
          </label>
          <Autocomplete
            className="w-full bg-transparent"
            disablePortal
            options={country.map((item) => item.name)}
            onChange={handlePlantChange}
            renderInput={(params) => (
              <TextField {...params} label="Add a place" />
            )}
          />
        </div>
      </div>
      {error && <small className="mt-4 block text-[red]">{error}</small>}
      <div className="my-4 flex h-full w-full justify-center">
        <div className="relative h-full w-1/2 rounded-lg border-[1px] border-solid border-[#dee2e6]">
          <Space direction="vertical" style={{ width: "100%", height: "56px" }}>
            <RangePicker
              style={{ width: "100%", height: "56px" }}
              onChange={handleDateChange}
            />
          </Space>
        </div>
      </div>
      <div className="w-full">
        <button className="rounded-full bg-[#f75940] px-4 py-3 font-semibold text-[#fff]" onClick={handleSubmit}>
          Start planning
        </button>
      </div>
    </div>
  );
}

export default PlanStrip;
