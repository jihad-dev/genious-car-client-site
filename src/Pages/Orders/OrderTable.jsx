import React, { useEffect, useState } from "react";

const OrderTable = ({ order ,handleDelete}) => {
  const [serviceImg, setServiceImg] = useState([]);

  const { service, phone, price, serviceName, customer, email,_id } = order;

  useEffect(() => {
    fetch(`https://genious-car-server-one.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceImg(data));
  }, [service]);


  return (
    <tr className="mt-6">
      <th>
        <button onClick={() =>handleDelete(_id)}>X</button>
      </th>

      {serviceImg?.img && (
        <img className="w-24 m-6 rounded-full" src={serviceImg.img} alt="" />
      )}
      <td>{serviceName}</td>
      <td>{customer}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{price}</td>
    </tr>
  );
};

export default OrderTable;
