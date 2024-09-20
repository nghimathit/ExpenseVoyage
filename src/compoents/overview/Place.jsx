import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faDollar,
  faEllipsis,
  faLocationDot,
  faPaperclip,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { DollarOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
import { ModalContext } from "@Context/ModalProvider";
import dayjs from "dayjs";

function Places({ place }) {
  const [price, setPrice] = useState("");
  const { startDate, endDate } = useContext(ModalContext);
  const [tripnote, setTripnote] = useState([]);
  const [image, setImage] = useState(
    "https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGElMjBub2l8ZW58MHx8MHx8fDA%3D",
  );

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:5096/api/Trip/1`)
  //       .then((result) => {
  //         console.log(result.data.data);
  //         setStartDate(result.data.data.startDate);
  //         setEndDate(result.data.data.endDate);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);
  useEffect(() => {
    console.log(startDate ? dayjs(startDate).format("YYYY-MM-DD") : null);
    console.log(endDate ? dayjs(endDate).format("YYYY-MM-DD") : null);
  }, [startDate, endDate]);
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  const handleImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  useEffect(() => {});
  const handleChange = (e) => {
    const value = e.target.value;
    setPrice(value);
  };
  const togglePopup = () => {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.toggle("block");
      popup.style.display = popup.style.display === "none" ? "block" : "none";
    }
  };
  const togglePopupSave = () => {
    const popup = document.getElementById("popupsave");
    if (popup) {
      popup.classList.toggle("block");
      popup.style.display = popup.style.display === "none" ? "block" : "none";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      destination: place,
      note: tripnote,
      budget: price,
      startDate: startDate ? dayjs(startDate).format("YYYY-MM-DD") : null,
      endDate: endDate ? dayjs(endDate).format("YYYY-MM-DD") : null,
      userId: 1,
    };
    axios
      .post(`http://localhost:5096/api/Trip`, data, {
        headers: {
          "Content-Type": "application/json", // Đảm bảo đúng định dạng
        },
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-2 flex justify-between">
          <div className="text-[24px] font-extrabold">
            <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
            <span>Places to visit</span>
          </div>
          <div className="relative text-[24px]">
            <FontAwesomeIcon
              icon={faEllipsis}
              onClick={togglePopupSave}
              className="cursor-pointer"
            />
            <div
              className="absolute right-0 top-[25px] hidden w-28 rounded-xl border-[1px] border-solid border-[#f3f4f5] bg-[#fff] shadow-xl"
              id="popupsave"
            >
              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl text-[18px]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        {/* trip */}
        <div className="my-3 grid grid-cols-3 gap-3">
          <div className="relative col-span-2 w-full rounded-xl bg-[#f3f4f5] p-4">
            <div className="absolute left-[-10px] top-[-10px]">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[30px] text-[#3f52e3]"
              />
            </div>
            <div className="text-[22px] font-bold">{place}</div>
            <textarea
              className="blockquote w-full bg-transparent outline-none"
              placeholder="Add notes, link, etc... here"
              onChange={(e) => setTripnote(e.target.value)}
            ></textarea>
            <div className="four-lines w-full text-[14px] text-[#6c757d]">
              From the web: Vietnam is a Southeast Asian country known for its
              beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the
              capital, pays homage to the nation’s iconic Communist-era leader,
              Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh City
              (formerly Saigon) has French colonial landmarks, plus Vietnamese
              War history museums and the Củ Chi tunnels, used by Viet Cong
              soldiers.
            </div>
            <div className="my-2 flex w-full">
              <div
                className="mx-2 cursor-pointer text-[12px] text-[#6c757d]"
                onChange={handleImage}
              >
                <FontAwesomeIcon icon={faPaperclip} />
                <label className="ml-1" htmlFor="attach">
                  Attach
                </label>
                <input type="file" id="attach" hidden />
              </div>

              <div className="relative cursor-pointer" id="money">
                {price > 0 ? (
                  <div
                    className="rounded-full bg-[#3f52e3]/20 px-2 text-[12px] text-[#3f52e3]"
                    onClick={togglePopup}
                  >
                    ${price}
                  </div>
                ) : (
                  <div
                    className="cursor-pointer text-[12px] text-[#6c757d]"
                    onClick={togglePopup}
                  >
                    <FontAwesomeIcon icon={faDollar} />
                    <span className="ml-1">Add cost</span>
                  </div>
                )}
                <div
                  id="popup"
                  className="absolute left-0 top-full z-10 mt-2 hidden w-48 rounded-lg bg-white p-2 shadow-lg"
                >
                  <div className="w-full border-[1px] border-solid border-[#f3f4f5]">
                    <Input
                      size="large"
                      type="number"
                      placeholder="Enter price"
                      prefix={<DollarOutlined />}
                      value={price}
                      className="text-[12px]"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    onClick={togglePopup}
                    className="float-right mt-2 rounded-full bg-[#f75940] p-2 px-4 text-[#fff]"
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="mx-2 cursor-pointer text-[12px] text-[#6c757d]">
                <FontAwesomeIcon icon={faTrash} />
                <label className="ml-1" htmlFor="attach">
                  Delete
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-40 w-full">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={typeof image === "string" ? image : image.preview}
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Places;
