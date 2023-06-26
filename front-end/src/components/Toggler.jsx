import { useState } from "react";
import PropTypes from "prop-types";

const Toggler = ({ toggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={toggleDarkMode}>
      <button
        className={`w-14 h-6 rounded-full relative transition-colors duration-300  bg-white 
      `}
        onClick={toggleMode}
        aria-label="navbar toggler"
      >
        <div
          className={`w-4 h-4 rounded-full absolute top-1 transform hover:bg-myLightVioletColor ${
            isDarkMode
              ? "translate-x-1  bg-myVioletColor"
              : "translate-x-9  bg-myVioletColor"
          } transition-transform duration-300`}
        ></div>
      </button>
    </div>
  );
};

Toggler.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
export default Toggler;
