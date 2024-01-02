import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import person1 from '../../assets/images/team/1.jpg'
import person2 from '../../assets/images/team/2.jpg'
import person3 from '../../assets/images/team/3.jpg'
const OurTeam = () => {
  return (
    <div>
      <center className="mb-12 mt-18">
        <h2 className="text-2xl text-red-600">Team</h2>
        <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-xl  w-1/2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </center>
      <div className="grid mb-11 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={person1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex justify-center mb-5 gap-4">
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaFacebook className="text-xl"></FaFacebook>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaGoogle className="text-xl"></FaGoogle>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaInstagram className="text-xl"></FaInstagram>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaSquareTwitter className="text-xl"></FaSquareTwitter>
              </Link>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={person2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex justify-center mb-5 gap-4">
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaFacebook className="text-xl"></FaFacebook>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaGoogle className="text-xl"></FaGoogle>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaInstagram className="text-xl"></FaInstagram>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaSquareTwitter className="text-xl"></FaSquareTwitter>
              </Link>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={person3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex justify-center mb-5 gap-4">
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaFacebook className="text-xl"></FaFacebook>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaGoogle className="text-xl"></FaGoogle>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaInstagram className="text-xl"></FaInstagram>
              </Link>
              <Link className="p-5 bg-slate-500 rounded-full">
                <FaSquareTwitter className="text-xl"></FaSquareTwitter>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
