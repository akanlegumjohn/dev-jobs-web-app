import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobDetailsHeader = ({
  logoBackground,
  image,
  company,
  website,
  isDarkMode,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-between h-40 -mt-6  rounded-lg md:h-auto md:flex-row md:pt-4 ${
        isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
      }`}
    >
      <div className="flex flex-col items-center h-10 gap-3 -mt-4 md:flex-row md:h-24 md:gap-6">
        <div
          className="flex items-center self-start justify-center h-full p-6 mx-4 rounded-lg md:rounded-none md:px-8 md:mx-0 "
          style={{ backgroundColor: logoBackground }}
        >
          <img
            className="object-contain h-auto min-w-full "
            src={image}
            alt={` The logo of ${company}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 ">
          <p
            className={`text-sm font-bold tracking-wider md:text-lg${
              isDarkMode ? " text-white" : " text-black"
            }`}
          >
            {company}
          </p>
          <p className="font-medium text-myGrayColor">
            {`${company}.com`.toLowerCase()}
          </p>
        </div>
      </div>
      <p
        className={`p-2 mb-4 mr-2 text-sm font-semibold tracking-wider bg- text-myVioletColor md:mr-6 rounded-sm${
          isDarkMode
            ? " bg-gray-800 hover:bg-gray-700"
            : " bg-myLightGreyColor  hover:bg-gray-200"
        }`}
      >
        <Link to={website}> Company Site</Link>
      </p>
    </div>
  );
};

// Define prop types for JobDetailsBody component
JobDetailsHeader.propTypes = {
  website: PropTypes.string.isRequired,
  logoBackground: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
export default JobDetailsHeader;
