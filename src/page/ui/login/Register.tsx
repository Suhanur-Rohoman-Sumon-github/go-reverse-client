/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Background from "../../../componnets/ui/login/Background";
import CustomForm from "../../../componnets/form/CustomForm";
import CustomInput from "../../../componnets/form/CustomInput";
import { useRegistrationMutation } from "../../../redux/fetures/auth/authApi";
import { toast } from "sonner";
import { getErrorMessage } from "../../../utils/genareteError";
import { registrationResolver } from "../../../zodeSchema/ZodSchemaResolver";

const RegistrationForm = () => {
  const [register] = useRegistrationMutation();

  const onSubmit = async (data: any) => {
    const { streetAddress, city, state, zip } = data;
    const newAddress = {
      street: streetAddress,
      city: city,
      state: state,
      zipCode: zip,
    };
    data.addresses = newAddress;
    const toastId = toast.loading("user is creating");
    data.role = "user";

    // Register the user
    const response = await register(data);

    if (response?.data?.success === true) {
      toast.success("User signed up successfully", { id: toastId });
    } else {
      const errorMessage = getErrorMessage(response.error);
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="relative h-screen md:h-[1100px] bg-[#dbf2ef]">
      <Background />

      <div className="absolute md:top-14 md:right-32 top-40 md:h-[900px] p-5 md:w-[600px] w-[400px] ml-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#062132] text-center mb-4">
          Create a free account now
        </h2>

        <CustomForm
          onSubmit={onSubmit}
          resolver={zodResolver(registrationResolver)}
        >
          {/* Name Fields */}
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <CustomInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-1/2 pl-2">
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Address Fields */}
          <div className="mb-4">
            <CustomInput
              label="Street Address"
              name="streetAddress"
              type="text"
              placeholder="Enter your street address"
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="w-1/3 pr-2">
              <CustomInput
                label="City"
                name="city"
                type="text"
                placeholder="Enter your city"
              />
            </div>
            <div className="w-1/3 px-2">
              <CustomInput
                label="State"
                name="state"
                type="text"
                placeholder="Enter your state (e.g., CA)"
              />
            </div>
            <div className="w-1/3 pl-2">
              <CustomInput
                label="Zip Code"
                name="zip"
                type="text"
                placeholder="Enter your zip code"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <CustomInput
              label="Phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Field */}

          <div className="mb-4">
            <CustomInput
              label="Profile image"
              name="profileImage"
              type="text"
              placeholder="Enter your profile image"
            />
          </div>
          <div className="mb-4">
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}

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
        </CustomForm>
      </div>
    </div>
  );
};

export default RegistrationForm;
