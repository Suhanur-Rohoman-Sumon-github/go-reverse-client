import { useState, useEffect } from "react";
import logo from "../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import { currentUser, logOut } from "../../redux/fetures/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Avatar, Button, Dropdown, Menu, Tooltip } from "antd";
import useGetMe from "../../hooks/useGetMe";
import { setUserBookingUser } from "../../redux/fetures/booking/booking.slice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const data = useGetMe();
  dispatch(setUserBookingUser(data?._id));
  const user = useAppSelector(currentUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  const menuItems = (
    <Menu>
      <Menu.Item>
        <Button type="text">
          <Link to={`/${user?.role}/dashboard`} className="">
            My DashBoard
          </Link>
        </Button>
      </Menu.Item>
      <Menu.Item key="profile">
        <Button type="text">Profile</Button>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button onClick={handleLogout} type="text">
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 py-2 ${
          isScrolled
            ? "backdrop-blur-md bg-white/30 shadow-md"
            : "bg-[#FFF] shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-2xl font-bold">
                <img src={logo} className="h-20 w-20 rounded-full" alt="Logo" />
              </NavLink>
            </div>

            <div className="hidden md:flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#4cbfb0]" : "text-gray-800"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#4cbfb0]" : "text-gray-800"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#4cbfb0]" : "text-gray-800"
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive ? "text-[#4cbfb0]" : "text-gray-800"
                }
              >
                Room
              </NavLink>
            </div>

            {user ? (
              <div className="flex items-center gap-4">
                <div>
                  <Tooltip placement="right" title="John Doe">
                    <Dropdown
                      overlay={menuItems}
                      trigger={["click"]}
                      placement="bottomRight"
                    >
                      <Avatar
                        size={40}
                        src={data?.profileImage}
                        style={{ cursor: "pointer" }}
                      />
                    </Dropdown>
                  </Tooltip>
                </div>
              </div>
            ) : (
              <div className="hidden md:block">
                <Link to={"/login"} className="btn-secondary mr-4">
                  Login
                </Link>
                <Link
                  to={"/sign-up"}
                  className="inline-block px-4 py-2 text-white bg-[#4cbfb0] rounded-lg"
                >
                  Sign Up Now
                </Link>
              </div>
            )}

            <div className="flex md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-800  focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 right-0 w-64 shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50 bg-white`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={toggleSidebar} className="" aria-label="Close menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink
            to="/"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "text-[#4cbfb0]" : "text-gray-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "text-[#4cbfb0]" : "text-gray-800"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "text-[#4cbfb0]" : "text-gray-800"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/rooms"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "text-[#4cbfb0]" : "text-gray-800"
            }
          >
            Room
          </NavLink>
          <NavLink
            to="/login"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "text-[#4cbfb0]" : "text-gray-800"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "text-[#4cbfb0]" : "text-gray-800"
            }
          >
            Register
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
