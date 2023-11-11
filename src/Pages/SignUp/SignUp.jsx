import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [loginError, setLoginError] = useState();
  
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          alert('User created successfully')
        }) 
        .catch(err =>{
          console.log(err)
        })
    }
  return (
    <div className="grid gap-24 lg:grid-cols-2 lg:p-12 m-6">
      <div className=" px-14  border  border-sky-600">
        <img className="w-[460px] h-[502px] lg:mt-20" src={login} alt="" />
      </div>

      <form onSubmit={handleSignUp} className="card-body border  border-red-600">
        <h1 className="text-4xl font-bold text-center mt-16 ">
          Please Sign Up
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <div className="divider">OR</div>
        <div className="flex justify-center mb-5 gap-4">
          <Link className="p-5 bg-slate-500 rounded-full">
            <FaFacebook className="text-2xl"></FaFacebook>
          </Link>
          <Link className="p-5 bg-slate-500 rounded-full">
            <FaGoogle className="text-2xl"></FaGoogle>
          </Link>
          <Link className="p-5 bg-slate-500 rounded-full">
            <FaInstagram className="text-2xl"></FaInstagram>
          </Link>
        </div>
        <p className="text-center text-xl">
        Already have an account?  <Link className="text-orange-600" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
