import React, { useEffect, useRef, useState } from "react";
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../image/Mixivivuduthuyen.gif";
import {
  faChevronDown,
  faEllipsis,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Swiper from "swiper";
import "swiper/css/autoplay";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import './overview.scss'
const { RangePicker } = DatePicker;
const fakedata = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];
function Overview() {
  const swiperRef = useRef(null);
  const [top100Films, settop100Films] = useState([]);
useEffect(() => {
  axios
    .get("https://provinces.open-api.vn/api/?depth=2")
    .then((result) => settop100Films(result.data))
    .catch((err) => console.error(err));
}, []);

  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1726579209495-64b7990f78d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
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
  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 4,
        },
        1140: {
          slidesPerView: 5,
        },
        1320: {
          slidesPerView: 5,
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, []);
  return (
    <div className="h-full w-full pl-52">
      <div className="relative mb-5 w-full bg-transparent">
        <div className="relative mb-5 h-60 w-full">
          <img
            className="h-[90%] w-full object-cover"
            src={typeof image === "string" ? image : image.preview}
            alt=""
          />
          <label
            htmlFor="image"
            className="absolute right-5 top-3 cursor-pointer rounded-full bg-[#000]/40 px-[10px] py-[5px] hover:bg-[#000]/90"
          >
            <FontAwesomeIcon icon={faPen} color="#fff" />
          </label>
          <input type="file" id="image" hidden onChange={handleImage} />
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-0 mb-4 w-10/12 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
            <span className="mb-3 block w-full text-[28px] font-semibold">
              Trip to Vietnam
            </span>
            <span className="">
              <Space
                direction="vertical"
                style={{ width: "100%", height: "56px" }}
              >
                <RangePicker style={{ width: "100%" }} />
              </Space>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2 flex justify-between">
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
        <div className="swiper mb-4 w-full" ref={swiperRef}>
          <div className="swiper-wrapper">
            {fakedata.map((item, index) => {
              return (
                <div
                  className="swiper-slide w-44 rounded-xl bg-gray-50 shadow-md"
                  key={index}
                >
                  <div className="h-28 w-full overflow-hidden">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1690960644830-487c569ca6fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvJTIwY2hpJTIwbWluaHxlbnwwfHwwfHx8MA%3D%3D"
                      className="scale-image h-full w-full rounded-lg object-cover"
                      alt="ho chi minh"
                    />
                  </div>
                  <div className="p-2">
                    <span className="two-lines mb-2 text-[18px]">
                      Top places for Vietnam
                    </span>
                    <div className="flex gap-2">
                      <div className="mb-2 h-6 w-6">
                        <img
                          src="https://zpsocial2-f14-org.zadn.vn/3f7dafff5d1abd44e40b.jpg"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-[12px] text-[#6c757d]">
                        Cho in yeong
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-transparent">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="text-[24px] font-extrabold">
              <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
              <span>Notes</span>
            </div>
            <div className="text-[24px]">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-3">
            <div className="relative col-span-2 h-40 w-full rounded-xl bg-[#f3f4f5] p-4">
              <div className="absolute left-[-10px] top-[-10px]">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[30px] text-[#3f52e3]"
                />
              </div>
              <div className="text-[22px] font-bold">Vietnam</div>
              <div className="four-lines w-full text-[14px] text-[#6c757d]">
                From the web: Vietnam is a Southeast Asian country known for its
                beaches, rivers, Buddhist pagodas and bustling cities. Hanoi,
                the capital, pays homage to the nation’s iconic Communist-era
                leader, Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh
                City (formerly Saigon) has French colonial landmarks, plus
                Vietnamese War history museums and the Củ Chi tunnels, used by
                Viet Cong soldiers.
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-40 w-full">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src="https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGElMjBub2l8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-4 w-full rounded-xl bg-[#f3f4f5] p-2">
            <blockquote
              contentEditable="true"
              className="blockquote w-full outline-none"
              data-placeholder="Write or paste anything here: how to get around, tips and tricks"
            ></blockquote>
          </div>
        </div>
        <hr className="my-2" />

        <div className="w-full">
          <div className="mb-2 flex justify-between">
            <div className="text-[24px] font-extrabold">
              <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
              <span>Places to visit</span>
            </div>
            <div className="text-[24px]">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="mb-4 flex w-full items-center justify-center rounded-xl bg-[#f3f4f5] p-2">
            {/* <FontAwesomeIcon icon={faLocationDot} className="text-[#4255fd]" /> */}
            {/* <input
              type="text"
              className="h-full w-full bg-transparent p-2 text-[16px] outline-none"
              placeholder="Add a place"
            /> */}
            <Autocomplete
              className="w-full bg-transparent"
              disablePortal
              options={top100Films.map(item => (item.name))}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Add a place" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
