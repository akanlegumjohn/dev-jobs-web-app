import { FaFilter } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import PropTypes from "prop-types";

import filterIcon from "../assets/mobile/icon-filter.svg";

const MobileFilter = ({ setShowFilter, isDarkMode }) => {
  return (
    <div className="flex items-center justify-center gap-6 pr-4 right-8 sm:hidden">
      <div className="">
        <FaFilter
          onClick={() => setShowFilter((prev) => !prev)}
          src={filterIcon}
          className={`font-extrabold text-[1.3rem] cursor-pointer filter invert-100 transform scale-x-[-1]${
            isDarkMode ? ` fill-white` : ` fill-slate-500 `
          } rounded-sm `}
        />
      </div>
      <div className="p-4 rounded-sm cursor-pointer bg-myVioletColor ">
        <ImSearch className="font-extrabold text-white" />
      </div>
    </div>
  );
};

MobileFilter.propTypes = {
  setShowFilter: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default MobileFilter;
