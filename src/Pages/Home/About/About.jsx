import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="grid lg:grid-cols-2 p-12 mb-8 bg-base-300 py-20">
      <div className=" relative">
        <img
          className="w-[400px] h-[403px]  mr-8 rounded-lg shadow-2xl"
          src={person}
          alt=""
        />
        <img
          className="w-[327px] h-[250px] absolute right-20 top-1/2"
          src={parts}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold leading-[40px]">
          We are qualified <br /> & of experience <br /> in this field
        </h1>
        <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <button className="btn btn-primary">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
