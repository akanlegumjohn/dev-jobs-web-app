// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, content }) => {
  return (
    <button
      className="px-4 py-2 text-sm text-white rounded-sm md:text-lg bg-myVioletColor hover:bg-myLightVioletColor hover:px-5 hover:py-3"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
