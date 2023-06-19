import PropTypes from "prop-types";

const Button = ({ handleClick, content }) => {
  return (
    <button
      className="px-4 py-2 text-sm text-white rounded-sm md:text-lg bg-myVioletColor hover:bg-myLightVioletColor"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  content: PropTypes.string.isRequired,
};

export default Button;
