import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobDetailsHeader = ({ logoBackground, image, company, website }) => {
  return (
    <div className="flex flex-col items-center justify-between h-40 -mt-6 bg-white rounded-lg md:h-auto md:flex-row">
      <div className="flex flex-col items-center h-10 gap-3 -mt-4 md:flex-row md:h-24">
        <div
          className="flex items-center self-start justify-center h-full p-6 mx-4 rounded-lg md:p-8 "
          style={{ backgroundColor: logoBackground }}
        >
          <img
            className="object-contain h-auto min-w-full "
            src={image}
            alt={` The logo of ${company}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 ">
          <p className="text-sm font-bold tracking-wider md:text-lg">
            {company}
          </p>
          <p className="font-medium text-myGrayColor">
            {`${company}.com`.toLowerCase()}
          </p>
        </div>
      </div>
      <p className="p-2 mb-4 mr-2 text-sm font-semibold tracking-wider bg-myLightGreyColor text-myVioletColor">
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
};
export default JobDetailsHeader;
