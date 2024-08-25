import errors from "../../../assets/giphy.gif";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error } = useRouteError();

  return (
    <div className="">
      <section className="flex items-center h-screen   text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-teal-500">
              <img src={errors} alt="" />
            </h2>
            <p className="text-primary">{error?.message}</p>
            <Link to="/" className="btn-primary">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
