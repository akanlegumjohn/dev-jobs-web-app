import { BiSearch } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

const Filter = () => {
  return (
    <div className="flex justify-between h-16 gap-1 shadow-lg ">
      <div className="flex items-center w-full bg-white rounded-sm">
        <div className="relative flex items-center w-full pl-2">
          <div className="absolute left-4">
            <BiSearch className=" text-myVioletColor" />
          </div>
          <input
            type="text"
            placeholder="Filter by titles, companies, expertise..."
            className="w-full py-2 pl-8 pr-3 text-xs border-none rounded-xl focus:outline-none text-myVeryDarkBlueColor"
          />
        </div>
      </div>
      <div className="flex items-center w-full bg-white rounded-sm ">
        <div className="relative flex items-center w-full pl-2">
          <div className="absolute left-4">
            <MdLocationPin className=" text-myVioletColor" />
          </div>
          <input
            type="text"
            placeholder="Filter by location..."
            className="w-full py-2 pl-8 pr-3 text-xs border-none rounded-xl focus:outline-none text-myVeryDarkBlueColor"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 bg-white rounded-sm jus">
        <div className="inline-flex items-center ">
          <input
            type="checkbox"
            className="w-3 h-3 border-none cursor-pointer form-checkbox "
          />
          <label className="ml-2 text-xs text-myVeryDarkBlueColor">
            Full Time Only
          </label>
        </div>
        <button className="px-4 py-2 text-sm text-white rounded-sm bg-myVioletColor hover:bg-myLightVioletColor">
          search
        </button>
      </div>
    </div>
  );
};

export default Filter;
