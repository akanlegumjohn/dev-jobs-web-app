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
        <Link to={"/"} title="The link to the official page of the devjobs online website">
          <img className="h-auto max-w-full " src={logo} alt="the logo of devjobs" />
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <div>
          <img className="h-auto max-w-full pr-1 mt-2" src={sunIcon} alt="icon of a sun" />
        </div>
        <div>
          <Toggler toggleDarkMode={toggleDarkMode} />
        </div>
        <div>
          <img className="h-auto max-w-full pl-2 mt-2 " src={moonIcon} alt="moon icon" />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
export default Navbar;
