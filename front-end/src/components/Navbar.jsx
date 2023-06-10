import img from "../assets/logos/officelite.svg";
const Navbar = () => {
  return (
    <nav className="h-20 mt-1 transform rounded-bl-full bg-myVioletColor -rotate-y-180">
      <img src={img} alt="" />
    </nav>
  );
};

export default Navbar;
