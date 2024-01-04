import React, { useContext } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../Utils/auth";

const SocialLogin = () => {
  const { GoogleSignIn } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(user);

        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center mb-5 gap-4">
      <Link className="p-5 bg-slate-500 rounded-full">
        <FaFacebook className="text-2xl"></FaFacebook>
      </Link>
      <Link
        onClick={handleGoogleLogin}
        className="p-5 bg-slate-500 rounded-full"
      >
        <FaGoogle className="text-2xl"></FaGoogle>
      </Link>
      <Link className="p-5 bg-slate-500 rounded-full">
        <FaInstagram className="text-2xl"></FaInstagram>
      </Link>
    </div>
  );
};

export default SocialLogin;
