import PropTypes from "prop-types";

import locationIcon from "../assets/desktop/icon-location.svg";
import searchIcon from "../assets/desktop/icon-search.svg";
import filterIcon from "../assets/mobile/icon-filter.svg";
import FilterModal from "./FilterModal";
import { useState } from "react";

const Filter = ({ filterData, setFilterData, isDarkMode }) => {
  const [showFilter, setShowFilter] = useState(false);

  /*
    Updates the filter data based on the user's input.
   If the input is a checkbox, it updates the corresponding boolean value.
   If the input is a text field, it updates the corresponding text value.
   */
  const handleFilterInput = (e) => {
    setFilterData((prevFilterData) => {
      const { name, value, type, checked } = e.target;
      return {
        ...prevFilterData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="flex justify-between h-16 gap-1 shadow-lg ">
      {showFilter && (
        <FilterModal
          locationIcon={locationIcon}
          handleFilterInput={handleFilterInput}
          filterData={filterData}
          isDarkMode={isDarkMode}
        />
      )}
      <div
        className={`relative flex items-center w-full ${
          isDarkMode ? ` bg-myVeryDarkBlueColor` : ` bg-white`
        } rounded-sm `}
      >
        <div className="relative flex items-center w-full pl-2">
          <div className="absolute left-3">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input
            type="text"
            placeholder="Filter by titles, companies, expertise..."
            className={`w-full py-2 pl-8 pr-3 text-sm border-none lg:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor ${
              isDarkMode
                ? " bg-myVeryDarkBlueColor text-white"
                : " text-myVeryDarkBlueColor bg-white"
            }`}
            onChange={handleFilterInput}
            name="title"
            value={filterData.title}
          />
        </div>
        {/* Filter icons  */}
        <div className="absolute flex items-center justify-center gap-6 right-8 sm:hidden">
          <div className="">
            <img
              onClick={() => setShowFilter((prev) => !prev)}
              src={filterIcon}
              alt="filter icon "
              className="text-white cursor-pointer filter invert-100"
            />
          </div>
          <div className="cursor-pointer ">
            <img className="text-white " src={searchIcon} alt="search icon " />
          </div>
        </div>
      </div>
      <div
        className={`items-center hidden w-full bg-white rounded-sm sm:flex ${
          isDarkMode ? ` bg-myVeryDarkBlueColor` : ` bg-white`
        } rounded-sm `}
      >
        <div className="relative flex items-center w-full pl-2">
          <div className="absolute left-4">
            <img src={locationIcon} alt="location icon" />
          </div>

          <input
            type="text"
            placeholder="Filter by location..."
            className={`w-full py-2 pl-8 pr-3 text-sm border-none lg:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor ${
              isDarkMode
                ? " bg-myVeryDarkBlueColor text-white"
                : " text-myVeryDarkBlueColor bg-white"
            }`}
            onChange={handleFilterInput}
            name="location"
            value={filterData.location}
          />
        </div>
      </div>
      <div
        className={`items-center justify-between hidden w-full px-4 bg-white rounded-sm jus sm:flex${
          isDarkMode ? ` bg-myVeryDarkBlueColor` : ` bg-white`
        } rounded-sm `}
      >
        <div className="inline-flex items-center ">
          <input
            type="checkbox"
            id="full-time-checkbox"
            className={` form-checkbox w-2 h-6 border-none cursor-pointer md:h-10 md:w-4 form-checkbox ${
              isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
            }`}
            checked={filterData.isFullTime}
            onChange={handleFilterInput}
            name="isFullTime"
          />
          <label
            htmlFor="full-time-checkbox"
            className={`ml-2 text-sm lg:text-lg ${
              isDarkMode ? "text-white" : " text-myVeryDarkBlueColor"
            }`}
          >
            Full Time Only
          </label>
        </div>
        <button className="px-4 py-2 text-sm text-white rounded-sm lg:text-lg bg-myVioletColor hover:bg-myLightVioletColor">
          Search
        </button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filterData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    isFullTime: PropTypes.bool.isRequired,
  }).isRequired,
  setFilterData: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Filter;
