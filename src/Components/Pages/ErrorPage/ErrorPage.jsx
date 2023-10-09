
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen ">
        <div className="flex items-center justify-center">
          <img
            className="w-56 mt-5 md:mt-40"
            src="https://i.ibb.co/17XLMKC/Error.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <Link className=" hover:bg-green-900 text-5xl font-bold mt-5 md:mt-20 p-5 bg-green-600 rounded-lg text-white " to="/">
            - Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
