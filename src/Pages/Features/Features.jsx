import React from "react";
import { FaChildren } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <div>
      <center className="mb-12 mt-18">
        <h2 className="text-2xl text-red-600">Core Features</h2>
        <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-xl  w-1/2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </center>
      <div className="grid mb-11 lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-8 ">
        <div className="bg-slate-600 w-44 h-32 rounded-lg rounded-lg">
          <div className="p-8">
          <FaChildren className="text-4xl"></FaChildren>
          <h2>Expert Team</h2>
          </div>
        </div>
        <div className="bg-slate-600 w-44 h-32 rounded-lg">
          <div className="p-8">
          <FaChildren className="text-4xl"></FaChildren>
          <h2>Expert Team</h2>
          </div>
        </div>
        <div className="bg-slate-600 w-44 h-32 rounded-lg">
          <div className="p-8">
          <FaChildren className="text-4xl"></FaChildren>
          <h2>Expert Team</h2>
          </div>
        </div>
        <div className="bg-slate-600 w-44 h-32 rounded-lg">
          <div className="p-8">
          <FaChildren className="text-4xl"></FaChildren>
          <h2>Expert Team</h2>
          </div>
        </div>
        <div className="bg-slate-600 w-44 h-32 rounded-lg">
          <div className="p-8">
          <FaChildren className="text-4xl"></FaChildren>
          <h2>Expert Team</h2>
          </div>
        </div>
        <div className="bg-slate-600 w-44 h-32 rounded-lg">
          <div className="p-8">
          <FaChildren className="text-4xl"></FaChildren>
          <h2>Expert Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
