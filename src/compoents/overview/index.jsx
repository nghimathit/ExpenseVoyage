import React, { useEffect, useRef } from "react";
import { DatePicker, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEllipsis, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./overview.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Swiper from "swiper";
import "swiper/css/autoplay";
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
    <div className="h-full w-full pl-40">
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
          <div className=" flex justify-between">
            <div className="text-[24px] font-extrabold">
              <FontAwesomeIcon icon={faChevronDown} className="mr-4" />
              <span>Notes</span>
            </div>
            <div className="text-[24px]">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 w-full h-24 bg-[#f3f4f5] gap-3"></div>
            <div className="col-span-1"></div>
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
          <div className="mb-4 w-full rounded-xl bg-[#f3f4f5] p-2 flex justify-center items-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#4255fd]" />
           <input type="text" className="w-full h-full p-2 outline-none text-[16px] bg-transparent" placeholder="Add a place"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
