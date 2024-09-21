import React, { useEffect, useState } from "react";
import "./homepage.scss";
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const { RangePicker } = DatePicker;

function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [userid, setUserid] = useState(1);
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5096/api/Trip")
      .then((result) => {
        console.log(result.data.data.filter((c) => c.userId === userid));
        const data = result.data.data.filter((c) => c.userId === userid);
        setTrip(data);
      })
      .catch((err) => console.error(err));
  }, [userid]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const increaseRooms = () => {
    if (rooms < 9) {
      setRooms(rooms + 1);
    }
  };

  const decreaseRooms = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const increaseGuests = () => {
    if (guests < 16) {
      setGuests(guests + 1);
    }
  };

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  return (
    <div className="container">
      <div className="w-full items-center justify-between md:flex">
        <div className="text-[26px] font-medium">
          Recently viewed and upcoming
        </div>
        <Link to={"/plant/new"}>
          <div className="button-trip flex items-center">
            <button>+ Plan new trip</button>
          </div>
        </Link>
      </div>
      {/* start */}
      {trip.length > 0 ? (
        <div className="grid my-2 w-full grid-cols-4 gap-2">
          <div className="col-span-1">
            <div className=" w-full">
              <div className="h-52 w-full">
                <img
                  src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/CUghmgKAUxRUCJ1VGYKbp63LCCEro9td"
                  className="h-full w-full rounded-lg object-cover"
                  alt="city"
                />
              </div>
              <div className="w-full p-2">
                <span className="block text-[18px]">Trip to vietnam</span>
                <span className="block my-2 w-full text-[#c1c1c2]">October 1-5</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-recently">
          <span>
            You haven’t created anything yet.{" "}
            <span className="font-bold text-[#F75940]">Plan a new trip</span>.
          </span>
        </div>
      )}
      {/* end */}
      <div className="container-place relative mt-4 w-full pb-6 pt-6">
        <div className="text-[25px] font-extrabold">Need a place to stay?</div>
        <div className="flex gap-2">
          <div className="group-input h-14 w-full">
            <label htmlFor="where" className="label-input">
              Where
            </label>
            <input type="text" id="where" className="h-full w-full" />
          </div>
          <div className="group-input">
            <label htmlFor="When" className="label-input-s">
              When
            </label>
            <Space direction="vertical" style={{ height: "100%" }}>
              <RangePicker style={{ height: "100%" }} />
            </Space>
            <div></div>
          </div>
          <div className="group-input">
            <label htmlFor="When" className="label-input-s">
              Room, Guest
            </label>
            <button
              className="picker-room flex items-center justify-center gap-3"
              onClick={toggleDropdown}
            >
              <div className="user-count flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faUser} />
                <span className="text-[16px]">{guests}</span>
              </div>
              <div className="room-count flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faBed} />
                <span>{rooms}</span>
              </div>
            </button>
            <div
              className={`dropdown-picker ${isDropdownOpen ? "block" : "none"}`}
            >
              <span className="mb-2 text-[18px] font-bold">
                Rooms and guests
              </span>
              <div className="list-none text-[16px]">
                <div className="mb-2 flex items-center justify-between">
                  <FontAwesomeIcon icon={faBed} />
                  <span className="ml-2 mr-2 text-[14px] font-thin">Rooms</span>
                  <button
                    className="bg-[#E9ECEF] px-2 text-[18px]"
                    style={{ borderRadius: "50%" }}
                    onClick={decreaseRooms}
                  >
                    -
                  </button>
                  <div className="font-bold">{rooms}</div>
                  <button
                    className="bg-[#E9ECEF] px-2 text-[18px]"
                    style={{ borderRadius: "50%" }}
                    onClick={increaseRooms}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ml-2 mr-2 text-[14px] font-thin">
                    Guests
                  </span>
                  <button
                    className="bg-[#E9ECEF] px-2 text-[18px]"
                    style={{ borderRadius: "50%" }}
                    onClick={decreaseGuests}
                  >
                    -
                  </button>
                  <div className="font-bold">{guests}</div>
                  <button
                    className="bg-[#E9ECEF] px-2 text-[18px]"
                    style={{ borderRadius: "50%" }}
                    onClick={increaseGuests}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  className="rounded-full bg-[#f75940] px-4 py-2 text-[#fff]"
                  onClick={toggleDropdown}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="group-input">
            <button className="search">Search</button>
          </div>
        </div>
      </div>
      <div className="container-trip grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <div className="w-full rounded-lg bg-[#f3f4f5] px-6 py-4">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[24px] font-bold">Your strips</span>
              <button className="flex items-center rounded-full bg-[#E9ECEF] px-6 py-2 text-[14px] font-semibold">
                + Plan new strip
              </button>
            </div>
            <div>
              You don’t have any trip plans yet.{" "}
              <span className="font-bold text-[#F75940]">Plan a new trip</span>.
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full rounded-lg bg-[#f3f4f5] px-6 py-4">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[24px] font-bold">Your guides</span>
              <button className="flex items-center rounded-full bg-[#E9ECEF] px-6 py-2 text-[14px] font-semibold">
                + Create new guide
              </button>
            </div>
            <div>
              You don’t have any trip plans yet.{" "}
              <span className="font-bold text-[#F75940]">
                {" "}
                Create a new guide
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
