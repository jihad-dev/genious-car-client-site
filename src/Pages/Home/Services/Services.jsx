import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://genious-car-server-one.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <center className="mb-12 mt-18">
        <h2 className="text-2xl text-red-600">Service</h2>
        <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
        <p className="text-xl  w-1/2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </center>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {Services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <center>
        <button className="mb-8 text-lg btn btn-secondary mt-8">
          Show More
        </button>
      </center>
    </div>
  );
};

export default Services;
