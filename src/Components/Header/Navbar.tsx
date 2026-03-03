import Container from "../Layout/Container";
import Logo from "../../assets/logo.png";
import CircleButton from "../../Shared/CircleButton";
import CustomButton from "../../Shared/CustomButton";

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
        <div className="text-2xl font-bold text-dark cursor-pointer">
          <img src={Logo} alt="ZapShift Logo" />
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-text-gray font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-dark cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <CustomButton
            text="Sign In"
            className="text-gray border-2 border-light-gray rounded-xl"
            type="button"
          />
          <div className="flex items-center">
            <CustomButton
              text="Sign Up"
              className="bg-primary text-dark rounded-xl"
              type="button"
            />
            <CircleButton />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
