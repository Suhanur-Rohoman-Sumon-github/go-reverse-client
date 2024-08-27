import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
const Background = () => {
  return (
    <div className="relative h-screen bg-[#dbf2ef]">
      <div
        className="h-[60%] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://vizmo.in/_nuxt/img/quote-revised.cc78def.svg')",
        }}
      ></div>

      <div className="absolute md:top-14 md:left-52 top-8 left-44 md:h-[500px] p-5 md:w-[450px]">
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
    </div>
  );
};

export default Background;
