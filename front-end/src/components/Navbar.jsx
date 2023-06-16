import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import moonIcon from "../assets/desktop/icon-moon.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import logo from "../assets/desktop/logo.svg";
import Toggler from "./Toggler";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="relative flex items-center justify-between px-4 pb-8 transform rounded-bl-none shadow-xl sm:rounded-bl-full h-28 lg:px-28 md:px-12 -rotate-y-180 ">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="flex items-center gap-0 ">
        <div>
          <img className="pr-1 mt-2" src={sunIcon} alt="icon of a sun" />
        </div>
        <div>
          <Toggler toggleDarkMode={toggleDarkMode} />
        </div>
        <div>
          <img className="pl-2 mt-2 " src={moonIcon} alt="moon icon" />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
export default Navbar;
