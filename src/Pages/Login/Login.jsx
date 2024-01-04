import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import { setAuthToken } from "../../Utils/auth";
const Login = () => {
  const { signIn, GoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setAuthToken(user);

        alert("success sign-in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid gap-24 lg:grid-cols-2 lg:p-12 m-6">
      <div className=" px-14  border  border-sky-600">
        <img className="w-[460px] h-[502px] lg:mt-20" src={login} alt="" />
      </div>

      <form onSubmit={handleLogin} className="card-body border  border-red-600">
        <h1 className="text-4xl font-bold text-center mt-16 ">Login Now !</h1>
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
            autoComplete="password"
            placeholder="Enter Your password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider">OR</div>
        <SocialLogin />
        <p className="text-center text-xl">
          Have an account?{" "}
          <Link className="text-orange-700" to="/signUp">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
