import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pb-8 transform rounded-bl-full shadow-xl h-28 px-28 bg-myVioletColor -rotate-y-180 ">
      <div className="text-lg font-bold text-white ">devjobs</div>
      <div className="flex items-center gap-0 ">
        <div>
          <FiSun className="h-4 mb-2 text-myWhiteColor w-11 fill-white" />
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-white  rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-myVioletColor after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
            after:hover:bg-myLightVioletColor "
            ></div>
          </label>
        </div>
        <div>
          <FiMoon className="h-4 mb-2 text-myWhiteColor w-11 fill-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
