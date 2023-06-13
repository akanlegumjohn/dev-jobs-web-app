import locationIcon from "../assets/desktop/icon-location.svg";
import searchIcon from "../assets/desktop/icon-search.svg";

const Filter = () => {
  return (
    <div className="flex justify-between h-16 gap-1 shadow-lg ">
      <div className="flex items-center w-full bg-white rounded-sm">
        <div className="relative flex items-center w-full pl-2">
          <div className="absolute left-3">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input
            type="text"
            placeholder="Filter by titles, companies, expertise..."
            className="w-full py-2 pl-8 pr-3 text-sm border-none md:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor"
          />
        </div>
      </div>
      <div className="flex items-center w-full bg-white rounded-sm ">
        <div className="relative flex items-center w-full pl-2">
          <div className="absolute left-4">
            <img src={locationIcon} alt="location icon" />
          </div>
          <input
            type="text"
            placeholder="Filter by location..."
            className="w-full py-2 pl-8 pr-3 text-sm border-none md:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 bg-white rounded-sm jus">
        <div className="inline-flex items-center ">
          <input
            type="checkbox"
            className="w-2 h-6 border-none cursor-pointer md:h-10 md:w-4 form-checkbox "
          />
          <label className="ml-2 text-sm md:text-lg text-myVeryDarkBlueColor">
            Full Time Only
          </label>
        </div>
        <button className="px-4 py-2 text-sm text-white rounded-sm md:text-lg bg-myVioletColor hover:bg-myLightVioletColor">
          search
        </button>
      </div>
    </div>
  );
};

export default Filter;
