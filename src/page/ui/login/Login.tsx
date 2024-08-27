import { useForm, SubmitHandler } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useLoginMutation } from "../../../redux/fetures/auth/authApi";
import Background from "../../../componnets/ui/login/Background";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hook";
import { setUser } from "../../../redux/fetures/auth/auth.slice";
import { verifyToken } from "../../../utils/verifyToken";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "jodfhb.doe@example.com",
      password: "PlainTextPassword",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    const res = await login(data).unwrap();

    const user = verifyToken(res.token);
    console.log(user);
    dispatch(setUser({ user: user, token: res.token }));
  };

  return (
    <div className="relative ">
      <Background />

      <div className="absolute md:top-24 md:right-32 top-40 md:h-[550px] p-5 md:w-[600px] w-[400px] ml-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
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
        </form>
      </div>
    </div>
  );
};

export default Login;
