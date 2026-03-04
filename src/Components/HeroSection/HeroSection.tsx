import Hero from "../../assets/courier.png";
import Parcel from "../../assets/parcel.png";
import CircleButton from "../../Shared/CircleButton";
import CustomButton from "../../Shared/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
const HeroSection = () => {
  return (
    <section className="container bg-white py-24 rounded-2xl w-full h-166.25 mx-auto">
      <div className="flex justify-around items-center gap-10 lg:gap-0 flex-col lg:flex-row">
        <div className="max-w-6/12 mx-auto text-center lg:text-left space-y-3">
          <div>
            <img src={Parcel} alt="Parcel" width={220} height={100} />
          </div>
          <h1 className="text-4xl lg:text-[56px] font-extrabold text-text-primary leading-tight">
            We Make Sure Your <br />
            <span className="text-[#33929D]"> Parcel Arrives </span> On Time{" "}
            <br /> – No Fuss.
          </h1>

          <p className="text-gray text-[16px] leading-6">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>

          <div className="flex gap-4 my-7">
            <div className="flex items-center">
              <CustomButton
                text="Track Your Parcel"
                className="bg-primary rounded-full"
                type="button"
              />

              <CircleButton>
                <FiArrowUpRight className="text-primary text-3xl" />
              </CircleButton>
            </div>
            <CustomButton
              text="Be A Rider"
              className="border-2 border-light-gray rounded-xl "
              type="button"
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="border-b-4 border-[#056873] w-12"></p>
            <p className="border-b-4 border-[#C3DFE2] w-8"></p>
            <p className="border-b-4 border-[#C3DFE2] w-8"></p>
            <p className="border-b-4 border-[#C3DFE2] w-8"></p>
          </div>
        </div>

        <div className="max-w-6/12 mx-auto flex justify-center text-center lg:text-left">
          <img src={Hero} alt="Delivery Rider" width={473} height={450} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
