import { worksCards } from "../../utils/worksCard";
import type { commonCardTypes } from "../types/types";

const HowWorks = () => {
  return (
    <section className="py-20 px-20 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center xl:text-left mb-8">
          How It Works
        </h2>
        <div className="flex flex-wrap lg:flex-row justify-center items-center gap-8 lg:gap-5 mx-auto">
          {worksCards.map((card: commonCardTypes) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md w-75.5 h-65.5 text-justify"
            >
              <img src={card.icon} alt={card.title} className="mb-4" />
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
