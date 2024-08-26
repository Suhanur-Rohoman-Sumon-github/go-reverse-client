import { useEffect } from "react";
import Aos from "../../../hooks/Aos";

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
        <h1 className="text-banner">Welcome to Our Booking Website</h1>
        <p className="text-secondary">
          Discover amazing places and book your next adventure with us!
        </p>
        <a href="#booknow" className="btn-primary">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
