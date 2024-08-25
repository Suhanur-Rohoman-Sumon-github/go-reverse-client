import { FaCheckCircle } from "react-icons/fa";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
const Login = () => {
  return (
    <div className="relative h-screen bg-[#dbf2ef]">
      <div
        className="h-[60%] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://vizmo.in/_nuxt/img/quote-revised.cc78def.svg')",
        }}
      ></div>

      <div className="absolute md:top-14 md:left-52 top-8 left-44 md:h-[500px]  p-5 md:w-[450px]  ">
        <div className="flex-shrink-0">
          <NavLink to="/" className=" text-2xl font-bold">
            <img src={logo} className="h-24 w-24 rounded-full" alt="" />
          </NavLink>
        </div>

        <h1 className="text-[#062132] my-4 font-bold text-2xl hidden md:block">
          Why choose us for your event ticketing?
        </h1>

        <div className="space-y-4 max-w-xl hidden md:block">
          {[
            "High-quality service",
            "Experienced professionals",
            "24/7 customer support",
            "Affordable pricing",
          ].map((text, index) => (
            <div key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute md:top-14 md:right-52 top-40 md:h-[550px]  p-5 md:w-[450px] w-[400px] ml-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
          <div className="my-6 flex items-center justify-center">
            <span className="w-full h-px bg-gray-300"></span>
            <span className="mx-4 text-gray-500">OR</span>
            <span className="w-full h-px bg-gray-300"></span>
          </div>
          <div className="flex flex-col space-y-4 mb-6">
            <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded py-2 hover:bg-gray-100">
              <FaGoogle className="text-red-500 mr-2" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded py-2 hover:bg-gray-100">
              <FaFacebook className="text-blue-500 mr-2" />
              Sign in with Facebook
            </button>
          </div>

          {/* Sign Up Section */}
          <div className="text-center flex items-center justify-center">
            <p className="text-gray-600">New here?</p>
            <Link
              to="/signup"
              className="text-[#4cbfb0] font-bold hover:underline ml-2"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
