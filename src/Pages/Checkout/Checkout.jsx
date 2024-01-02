import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { title, _id, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handeleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unknown";
    const message = form.message.value;
    const phone = form.phone.value;
    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
      phone,
    };
    console.log(order);
    fetch("https://genious-car-server-one.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledge) {
          alert("order placed successfully");
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl mb-7">{title}</h1>
      <h2>{price}</h2>
      <form
        onSubmit={handeleOrder}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <input
          name="firstName"
          type="text"
          placeholder="Your firstName"
          className="input input-bordered input-accent w-full "
        />
        <input
          name="lastName"
          type="text"
          placeholder="Your lastName"
          className="input input-bordered input-accent w-full "
        />
        <input
          name="phone"
          type="text"
          placeholder="Your phone Number"
          className="input input-bordered input-accent w-full "
        />
        <input
          name="email"
          type="text"
          placeholder="Your Email"
          readOnly
          defaultValue={user?.email}
          className="input input-bordered input-accent w-full "
        />
        <textarea
          name="message"
          placeholder="Enter Your Message..."
          className="h-24 input input-bordered input-accent w-full"
          rows="10"
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Checkout;
