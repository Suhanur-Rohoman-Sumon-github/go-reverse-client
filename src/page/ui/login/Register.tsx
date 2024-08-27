import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Background from "../../../componnets/ui/login/Background";

const Register = () => {
  return (
    <div className="relative h-screen bg-[#dbf2ef]">
      <Background />

      <div className="absolute md:top-14 md:right-32 top-40 md:h-[700px] p-5 md:w-[600px] w-[400px] ml-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#062132] text-center mb-4">
          Create a free account now
        </h2>
        <form>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Username Field */}
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

          {/* Password Field */}
          <div className="mb-4">
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

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-primary w-full">
            Register
          </button>

          {/* Divider with "OR" */}
          <div className="my-6 flex items-center justify-center">
            <span className="w-full h-px bg-gray-300"></span>
            <span className="mx-4 text-gray-500">OR</span>
            <span className="w-full h-px bg-gray-300"></span>
          </div>

          {/* Social Login Buttons */}
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
            <p className="text-gray-600">Already have an account?</p>
            <Link
              to="/login"
              className="text-[#4cbfb0] font-bold hover:underline ml-2"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
