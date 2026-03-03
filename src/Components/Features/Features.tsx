import Casio from "../../assets/casio.png";
import Amazon from "../../assets/amazon.png";
import Moon from "../../assets/moonstar.png";
import Star from "../../assets/start-.png";
import StarPeople from "../../assets/start-people.png";
import Rands from "../../assets/randstad.png";
import { featuresCard } from "../../Custom/featuresCard";

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
        <div className="grid grid-cols-1 gap-8 py-20">
          {featuresCard.map((card) => (
            <div
              key={card.id}
              className="bg-white flex items-center p-6 rounded-lg"
            >
              <div>
                <img src={card.icon} alt={card.title} className="w-50 h-50" />
              </div>
              <div className="space-y-5 border-l-2 border-dashed border-text-primary px-8">
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
      </div>
    </section>
  );
};

export default OurFeatures;
