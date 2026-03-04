import Casio from "../../assets/casio.png";
import Amazon from "../../assets/amazon.png";
import Moon from "../../assets/moonstar.png";
import Star from "../../assets/start-.png";
import StarPeople from "../../assets/start-people.png";
import Rands from "../../assets/randstad.png";
import Location from "../../assets/location.png";
import Shape from "../../assets/shape-org.png";
import { featuresCard } from "../../Custom/featuresCard";
import CustomButton from "../../Shared/CustomButton";

const OurFeatures = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto w-full">
        {/* sale teams */}
        <div className="py-10 border-b-2 border-dashed border-text-primary">
          <h2 className="text-[28px] font-extrabold text-center">
            We've helped thousands of sales teams
          </h2>
          <div className="flex flex-wrap lg:flex-row items-center justify-between gap-10 py-10">
            <img src={Casio} alt="casio" className="w-30.75 h-6" />
            <img src={Amazon} alt="amazon" className="w-30.75 h-6" />
            <img src={Moon} alt="moonstar" className="w-30.75 h-6" />
            <img src={Star} alt="star" className="w-30.75 h-6" />
            <img src={StarPeople} alt="star-people" className="w-30.75 h-6" />
            <img src={Rands} alt="randstad" className="w-30.75 h-6" />
          </div>
        </div>
        {/* features */}
        <div className="grid grid-cols-1 gap-8 py-20 border-b-2 border-dashed border-text-primary">
          {featuresCard.map((card) => (
            <div
              key={card.id}
              className="bg-white flex items-center p-6 rounded-3xl"
            >
              <div className="w-2.5/12">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-60 h-50 pr-10"
                />
              </div>
              <div className="w-9/12 space-y-5 border-l-2 border-dashed border-text-primary px-12 py-5">
                <h3 className="text-2xl font-extrabold text-text-primary">
                  {card.title}
                </h3>
                <p className="text-gray font-medium leading-6.5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* merchants */}
        <div className="flex justify-center items-center bg-text-primary rounded-4xl w-full h-109.5 px-20 py-20 my-20 relative">
          <div className="w-8/12 space-y-5">
            <h2 className="text-[40px] font-extrabold text-white">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p className="text-light-gray leading-6.5 mt-5 max-w-9/12">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.{" "}
            </p>
            <div className="flex items-center gap-5">
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
          <div className="w-5/12">
            <img
              src={Location}
              alt="location"
              className="w-[531px] h-[300px]"
            />
          </div>
          <img src={Shape} alt="shape" className="absolute top-0 w-full" />
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
