import { useState } from "react";
import Logo from "../../assets/logo.png";
import CircleButton from "../../Shared/CircleButton";
import CustomButton from "../../Shared/CustomButton";
import { links } from "../../utils/links";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="container relative lg:px-4">
      <div className="flex items-center justify-between px-2">
        <div className="text-2xl font-bold text-dark cursor-pointer">
          <img src={Logo} alt="ZapShift Logo" />
        </div>

        {/* desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 text-text-gray font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-dark cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        {/* actions for desktop */}
        <div className="hidden lg:flex items-center gap-4">
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
            <CircleButton>
              <FiArrowUpRight className="text-primary text-3xl" />
            </CircleButton>
          </div>
        </div>

        {/* mobile menu icon */}
        <button
          className="lg:hidden text-2xl p-2"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
          <ul className="flex flex-col items-center gap-6 py-4 text-text-gray font-medium">
            {links.map((link) => (
              <li key={link} className="hover:text-dark cursor-pointer">
                {link}
              </li>
            ))}
            <div className="flex flex-col items-center gap-4 mt-4 w-full px-4">
              <CustomButton
                text="Sign In"
                className="text-gray border-2 border-light-gray rounded-xl w-full"
                type="button"
              />
              <CustomButton
                text="Sign Up"
                className="bg-primary text-dark rounded-xl w-full"
                type="button"
              />
              <CircleButton>
                <FiArrowUpRight className="text-primary text-3xl" />
              </CircleButton>
            </div>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
