import Logo from "/fav-zap.png";
import { links, socialMediaIcons } from "../../utils/links";
import type { socialMediaTypes } from "../types/types";
const Footer = () => {
  return (
    <footer className="pb-10">
      <section className="container w-full bg-[#0B0B0B] rounded-4xl px-6 sm:px-12 lg:px-27.25 py-20 mx-auto">
        <div className="text-center">
          <div className="cursor-pointer text-light-gray">
            <div className="flex items-center justify-center mb-4 relative">
              <img src={Logo} alt="ZapShift Logo" />
              <p className="font-extrabold text-[32px] text-white absolute top-2 left-1/2 right-1/2">
                ZapShift
              </p>
            </div>
            <p className="text-light-gray leading-6.5">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to <br /> business shipments —
              we deliver on time, every time.
            </p>
          </div>
          <nav className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-6 border-t-2 border-b-2 border-dashed border-text-primary py-6 text-light-gray justify-center">
            <ul className="flex flex-col lg:flex-row items-center gap-8 text-light-gray font-medium mx-auto">
              {links.map((link) => (
                <li key={link} className="hover:text-gray cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-5 text-center">
            {socialMediaIcons.map((icon: socialMediaTypes) => (
              <img
                key={icon.id}
                src={icon.icon}
                alt={icon.name}
                className="w-9 h-9 inline-block mx-2 cursor-pointer"
              />
            ))}
          </div>
          <p className="text-center text-light-gray mt-6">
            &copy; 2026 ZapShift. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
