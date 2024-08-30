import errors from "../../../assets/giphy.gif";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div>
      <section className="flex items-center h-screen text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-teal-500">
              <img src={errors} alt="Error" />
            </h2>
            <p className="text-primary">{error?.data}</p>
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
