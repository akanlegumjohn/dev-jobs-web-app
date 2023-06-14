import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobDetailsHeader = ({ logoBackground, image, company, website }) => {
  return (
    <div className="flex items-center justify-between bg-white">
      <div className="flex h-24 gap-5">
        <div
          className="flex items-center self-start h-full p-8 "
          style={{ backgroundColor: logoBackground }}
        >
          <img
            className="object-fill h-auto min-w-full "
            src={image}
            alt={` The logo of ${company}`}
          />
        </div>
        <div className="flex flex-col justify-center gap-2 ">
          <p className="text-sm font-bold tracking-wider md:text-lg">
            {company}
          </p>
          <p className="font-medium text-myGrayColor">
            {`${company}.com`.toLowerCase()}
          </p>
        </div>
      </div>
      <p className="p-2 mr-2 text-sm font-semibold tracking-wider bg-myLightGreyColor text-myVioletColor">
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
