import moonIcon from "../assets/desktop/icon-moon.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import logo from "../assets/desktop/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pb-8 transform rounded-bl-full shadow-xl h-28 px-28 -rotate-y-180 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-0 ">
        <div>
          <img className="pr-1 mb-2 " src={sunIcon} alt="icon of a sun" />
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
          <img className="pl-2 mb-2 " src={moonIcon} alt="moon icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
