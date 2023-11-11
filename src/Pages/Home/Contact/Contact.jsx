import React from "react";
import calender from "../../../assets/icons/Wrench.svg";
const Contact = () => {
  return (
    <div className="flex mb-16 py-16 gap-x-28 bg-black rounded-lg  justify-center text-white">
      <div className="flex">
        <img src={calender} alt="" />
        <div>
          <h2>We are open monday-friday</h2>
          <span>7:00 am - 9:00 pm</span>
        </div>
      </div>
      <div className="flex">
        <img src={calender} alt="" />
        <div>
          <h2>We are open monday-friday</h2>
          <span>7:00 am - 9:00 pm</span>
        </div>
      </div>
      <div className="flex">
        <img src={calender} alt="" />
        <div>
          <h2>We are open monday-friday</h2>
          <span>7:00 am - 9:00 pm</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
