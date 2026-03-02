import Container from "../Layout/Container";
import Hero from "../../assets/courier.png";
import Parcel from "../../assets/parcel.png";
import CircleButton from "../../Shared/CircleButton";
const HeroSection = () => {
  return (
    <section className="">
      <Container className="bg-white py-24 rounded-2xl w-full h-166.25">
        <div className="flex justify-around items-center gap-10 flex-col lg:flex-row">
          {/* Left Content */}
          <div className="max-w-6/12 mx-auto text-center lg:text-left">
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

            <div className="flex gap-4 mt-8">
              <div className="flex items-center">
                <button className="bg-primary px-6 py-3 rounded-full font-bold text-[20px] hover:opacity-90 transition">
                  Track Your Parcel
                </button>
                <CircleButton />
              </div>

              <button className="px-8 py-3 border-2 border-light-gray rounded-xl hover:opacity-90 cursor-pointer font-bold text-[20px] hover:bg-gray-50 transition">
                Be A Rider
              </button>
            </div>
          </div>

          {/* Delivery */}
          <div className="max-w-6/12 mx-auto flex justify-center text-center lg:text-left">
            <img src={Hero} alt="Delivery Rider" width={473} height={450} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
