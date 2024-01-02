import React from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <div>
      <center className="mb-12 mt-18">
        <h2 className="text-2xl text-red-600">Testimonial</h2>
        <h2 className="text-5xl font-bold mb-4">What Customer Says</h2>
        <p className="text-xl  w-1/2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </center>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <Link className="card  bg-base-100 shadow-xl">
        
        <div className="card-body items-center text-center">
          <h2 className="card-title">fhfghfgh</h2>
         <h2>fgfghfgfghfghj</h2>
          <p className='text-xl text-red-600'>Price</p>
         
        </div>
      </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
