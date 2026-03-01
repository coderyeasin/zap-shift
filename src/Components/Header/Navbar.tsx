import Container from "../Layout/Container";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-dark">
          <img src={Logo} alt="ZapShift Logo" />
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-dark cursor-pointer">Services</li>
          <li className="hover:text-dark cursor-pointer">Coverage</li>
          <li className="hover:text-dark cursor-pointer">About Us</li>
          <li className="hover:text-dark cursor-pointer">Pricing</li>
          <li className="hover:text-dark cursor-pointer">Blog</li>
          <li className="hover:text-dark cursor-pointer">Contact</li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 font-medium">Sign In</button>

          <button className="bg-primary text-black font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
