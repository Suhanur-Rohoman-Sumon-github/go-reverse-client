import { Outlet } from "react-router-dom";
import Navbar from "../page/shered/Navbar";
import Footer from "../page/shered/Footer";
import ScrollToTop from "../componnets/scroltoTop/scrollToTop";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;
