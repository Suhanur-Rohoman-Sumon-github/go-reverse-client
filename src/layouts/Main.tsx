import { Outlet } from "react-router-dom";
import Navbar from "../page/shered/Navbar";
import Footer from "../page/shered/Footer";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
