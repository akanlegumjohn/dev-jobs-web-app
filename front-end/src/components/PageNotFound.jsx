import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-4 text-xl text-gray-600">Page Not Found</p>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link to={"/"}>
        <button className="px-6 py-2 mt-8 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
