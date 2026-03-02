import Container from "../Layout/Container";
import Logo from "../../assets/logo.png";
import CircleButton from "../../Shared/CircleButton";

const links = [
  "Services",
  "Coverage",
  "About Us",
  "Pricing",
  "Blog",
  "Contact",
];

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between px-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-dark cursor-pointer">
          <img src={Logo} alt="ZapShift Logo" />
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 text-text-gray font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-dark cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray font-bold text-[20px] px-8 py-3 border-2 border-light-gray rounded-xl hover:opacity-90 transition cursor-pointer">
            Sign In
          </button>

          <div className="flex items-center">
            <button className="bg-primary text-dark font-bold text-[20px] px-8 py-3 border-2 border-light-gray rounded-xl hover:opacity-90 transition cursor-pointer">
              Sign Up
            </button>
            <CircleButton />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
