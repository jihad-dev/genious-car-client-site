import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [Products, setSProducts] = useState([]);
    useEffect(() => {
      fetch("Products.json")
        .then((res) => res.json())
        .then((data) => setSProducts(data));
    }, []);
    return (
        <div>
        <center className="mb-12 mt-18">
          <h2 className="text-2xl text-red-600">Popular Products</h2>
          <h2 className="text-5xl font-bold mb-4">Browse Our Products</h2>
          <p className="text-xl  w-1/2">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </p>
        </center>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {Products.map((service) => (
            <Product key={service._id} service={service}></Product>
          ))}
        </div>
        <center>
          <button className="mb-8 text-lg btn btn-secondary mt-8">
          More Products
          </button>
        </center>
      </div>
    );
};

export default Products;