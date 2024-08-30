import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useLoginMutation } from "../../../redux/fetures/auth/authApi";
import Background from "../../../componnets/ui/login/Background";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hook";
import { setUser, TUser } from "../../../redux/fetures/auth/auth.slice";
import { verifyToken } from "../../../utils/verifyToken";
import { toast } from "sonner";
import CustomForm from "../../../componnets/form/CustomForm";
import CustomInput from "../../../componnets/form/CustomInput";
import { FormEventHandler } from "react";
import { getErrorMessage } from "../../../utils/genareteError";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: FormEventHandler) => {
    const toastId = toast.loading("user loging in  ");

    const response = await login(data);

    if (response?.data?.success === true) {
      const user = verifyToken(response.data.token) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: response.data.token }));
      toast.success("user login successfully", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } else {
      const errorMessage = getErrorMessage(response.error);
      toast.error(errorMessage, { id: toastId });
    }
  };

  const defaultValues = {
    email: "jodsadsdfsdff.doe@example.com",
    password: "PlainTextPassword",
  };

  return (
    <div className="relative ">
      <Background />

      <div className="absolute md:top-24 md:right-32 top-40 md:h-[550px] p-5 md:w-[600px] w-[400px] ml-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <CustomForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <div className="mb-4">
            <CustomInput
              name={"email"}
              placeholder={"enter your email"}
              type={"email"}
              label={"Email"}
            />
          </div>
          <div className="mb-6">
            <CustomInput
              name={"password"}
              placeholder={"enter your password"}
              type={"password"}
              label={"password"}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
          <div className="my-6 flex items-center justify-center">
            <span className="w-full h-px bg-gray-300"></span>
            <span className="mx-4 text-gray-500">OR</span>
            <span className="w-full h-px bg-gray-300"></span>
          </div>
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
            <p className="text-gray-600">New here?</p>
            <Link
              to="/sign-up"
              className="text-[#4cbfb0] font-bold hover:underline ml-2"
            >
              Sign Up
            </Link>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default Login;
