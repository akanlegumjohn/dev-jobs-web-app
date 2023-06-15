import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobDetailsBody = ({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
  requirementsContent,
  roleContent,
  requirementsItems,
  roleItems,
}) => {
  return (
    <div className="p-8 bg-white ">
      <div className="flex flex-col justify-between gap-10 md:gap-0 md:items-center md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-normal leading-4 text-myDarkGrayColor">
            <p>{postedAt}</p> <p>.</p>
            <p>{contract}</p>
          </div>
          <p className="text-lg font-bold leading-6 md:text-2xl text-myVeryDarkBlueColor">
            {position}
          </p>
          <p className="text-sm font-semibold leading-5 text-myVioletColor">
            {location}
          </p>
        </div>
        <Link to={apply}>
          <button className="w-full p-2 text-sm font-semibold leading-6 tracking-wider text-white rounded-sm bg-myVioletColor hover:bg-myLightVioletColor">
            Apply Now
          </button>
        </Link>
      </div>
      <p className="py-8 leading-7 tracking-wide text-myDarkGrayColor">
        {description}
      </p>
      <h3 className="pb-4 text-lg font-semibold tracking-wider ">
        Requirements
      </h3>
      <p className="pb-4 leading-7 tracking-wide text-myDarkGrayColor">
        {requirementsContent}
      </p>
      <ul className="font-bold text-myVioletColor">
        {requirementsItems.map((item, index) => (
          <li
            className="pl-4 ml-4 leading-7 list-disc "
            key={`${item}-${index}`}
          >
            <span
              key={`${item}-${index}`}
              className="font-normal text-myDarkGrayColor"
            >
              {" "}
              {item}
            </span>
          </li>
        ))}
      </ul>
      <h4 className="py-6 text-lg font-semibold tracking-wider ">
        What You Will Do
      </h4>
      <p className="pb-4 leading-7 tracking-wide text-myDarkGrayColor">
        {roleContent}
      </p>
      <ol className="font-bold text-myVioletColor">
        {roleItems.map((item, index) => (
          <li
            className="pl-4 ml-4 leading-7 list-decimal "
            key={`${item}-${index}`}
          >
            <span
              key={`${item}-${index}`}
              className="font-normal text-myDarkGrayColor"
            >
              {item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

// Define prop types for JobDetailsBody component
JobDetailsBody.propTypes = {
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  apply: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  requirementsContent: PropTypes.string.isRequired,
  roleContent: PropTypes.string.isRequired,
  requirementsItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  roleItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobDetailsBody;
