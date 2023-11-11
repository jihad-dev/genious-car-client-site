import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img">
        <img src={image} className="w-full rounded-2xl" alt="banner-img" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/4">
        <h1 className="text-6xl pt-4 leading-[60px] font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
        <p className="text-white font-semibold text-xl w-1/2">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form There are many variations of
          passages of available, but the majority have suffered alteration in
          some form
        </p>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-3/4">
        <button className="btn btn-outline  btn-lg px-12 mr-8 btn-warning">
          Warning
        </button>
        <button className="btn btn-outline btn-lg px-12 mr-8 btn-success">
          Success
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
        <a href={`#slide${prev}`} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
