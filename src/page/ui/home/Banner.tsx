import { useEffect } from "react";
import Aos from "../../../hooks/Aos";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="relative flex  justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://vizmo.in/_nuxt/img/home_illustration.c546130.svg')",
      }}
    >
      <Aos />
      <div
        data-aos="fade-down"
        className="relative z-10 text-center text-[#062132] px-4 top-40 "
      >
        <h1 className="text-banner">Book Your Dream Getaway Today</h1>
        <p className="text-secondary">
          Discover amazing places and book your next adventure with us!
        </p>
        <Link to={"/rooms"} className="btn-primary">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
