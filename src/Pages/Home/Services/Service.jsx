import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service,showMore}) => {
    const {title,img,price,_id} = service;
    return (
        <Link className="card  bg-base-100 shadow-xl">
        <figure className="px-8 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className='text-xl text-red-600'>Price:${price}</p>
        <Link onClick={() =>showMore} to={`/Checkout/${_id}`}><button className=' btn btn-primary  '>Bye Now</button></Link>
        </div>
      </Link>
    );
};

export default Service;