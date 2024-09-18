import React from "react";
import "./homebanner.scss";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomeBanner() {
  return (
    <div className="container-banner">
      <div className="container grid grid-cols-2">
          <div className="grid-cols-6">
            <div className="box-left">
              <span className="box-title">A travel planner for everyone</span>
              <br />
              <span className="box-description">
                Organize flights & hotels and map your trips in a free travel
                app designed for vacation planning & road trips, powered by AI
                and Google Maps.
              </span>
            </div>
          </div>
          <div className="grid-cols-6">
            <div className="box-right">
              <div className="carousel">
                <img src="https://images.unsplash.com/photo-1725794288429-5aba98177cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default HomeBanner;
