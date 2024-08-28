import { useEffect } from "react";
import Aos from "../../../hooks/Aos";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { currentUser } from "../../../redux/fetures/auth/auth.slice";

const Banner = () => {
  const user = useAppSelector(currentUser);
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
        {user ? (
          <h1 className="text-banner">{`Well come back dear ${user?.userId}`}</h1>
        ) : (
          <h1 className="text-banner">Book Your Dream Getaway Today</h1>
        )}
        <p className="text-secondary">
          Discover amazing places and book your next adventure with us!
        </p>
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <Link to={"/rooms"} className="btn-primary">
              Book Now
            </Link>
            <Link
              to={`/${user?.role}/dashboard`}
              className="btn-secondary mr-4"
            >
              My DashBoard
            </Link>
          </div>
        ) : (
          <Link to={"/rooms"} className="btn-primary">
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
