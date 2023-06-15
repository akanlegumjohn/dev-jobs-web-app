const NoResultsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mb-4 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 10.586L14.293 15 15 14.293l-3.707-3.707L15 6.879l-.707-.707-3.707 3.707-3.707-3.707-.707.707L6.879 10 3.172 13.707l.707.707L10 10.586z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-3xl font-bold text-myVioletColor">
        oops!! No job found.
      </p>
    </div>
  );
};

export default NoResultsFound;
