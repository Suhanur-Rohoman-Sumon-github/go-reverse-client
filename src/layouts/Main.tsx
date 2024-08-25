import { Outlet } from "react-router-dom";
import Navbar from "../page/shered/Navbar";
import Footer from "../page/shered/Footer";
import Aos from "../hooks/Aos";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Aos />
      <Footer />
    </div>
  );
};

export default Main;
