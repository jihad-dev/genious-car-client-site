import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderTable from "./OrderTable";

const Orders = () => {
  const { user ,LogOut} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          LogOut()
        }
       return res.json()
      })
      .then((data) => {
        console.log('response',data);
        // setOrders(data)
      });
  }, [user?.email]);

  // handleDelete

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`,{
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert(" order deleted successfully");
          }
          const remening = orders.filter(odr => odr._id !== id);
          setOrders(remening);
        });
    }
  };

  return (
    <div>
      <h1> your Orders {orders.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTable
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
