import Casio from "../../assets/casio.png";
import Amazon from "../../assets/amazon.png";
import Moon from "../../assets/moonstar.png";
import Star from "../../assets/start-.png";
import StarPeople from "../../assets/start-people.png";
import Rands from "../../assets/randstad.png";
import Location from "../../assets/location.png";
import Shape from "../../assets/shape-org.png";
import { featuresCard } from "../../utils/featuresCard";
import CustomButton from "../../Shared/CustomButton";
import type { commonCardTypes } from "../types/types";

const OurFeatures = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-4">
      <div className="py-10 lg:border-b-2 border-dashed border-text-primary">
        <h2 className="text-xl sm:text-[28px] font-extrabold text-center">
          We've helped thousands of sales teams
        </h2>
        <div className="lg:w-full w-8/12 mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-10 py-10">
          <img src={Casio} alt="casio" className="h-6 w-auto" />
          <img src={Amazon} alt="amazon" className="h-6 w-auto" />
          <img src={Moon} alt="moonstar" className="h-6 w-auto" />
          <img src={Star} alt="star" className="h-6 w-auto" />
          <img src={StarPeople} alt="star-people" className="h-6 w-auto" />
          <img src={Rands} alt="randstad" className="h-6 w-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 py-20 px-20 lg:px-0 lg:border-b-2 border-dashed border-text-primary">
        {featuresCard.map((card: commonCardTypes) => (
          <div
            key={card.id}
            className="bg-white flex flex-col lg:flex-row items-center p-6 rounded-3xl"
          >
            <div className="w-full lg:w-2/12 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <img src={card.icon} alt={card.title} className="w-40 h-40" />
            </div>
            <div className="w-full lg:w-10/12 space-y-5 border-t lg:border-t-0 lg:border-l-2 border-dashed border-text-primary px-0 lg:px-12 py-5 my-3 lg:my-0">
              <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary">
                {card.title}
              </h3>
              <p className="text-gray font-medium leading-6.5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center bg-text-primary rounded-4xl lg:w-full w-10/12 px-6 sm:px-12 lg:px-20 py-20 my-20 mx-auto relative">
        <div className="w-full lg:w-7/12 space-y-5 text-center lg:text-left">
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-light-gray leading-6.5 mt-5 lg:max-w-9/12">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <CustomButton
              text="Become a Merchant"
              className="font-bold text-[20px] text-text-primary rounded-full bg-primary"
            />
            <CustomButton
              text="Earn with ZapShift Courier"
              className="font-bold text-[20px] text-primary rounded-full border-2 border-primary"
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 mt-10 lg:mt-0 flex justify-center">
          <img
            src={Location}
            alt="location"
            className="max-w-100 lg:max-w-132.75 h-auto"
          />
        </div>
        <img src={Shape} alt="shape" className="absolute top-0 w-full" />
      </div>
    </section>
  );
};

export default OurFeatures;
