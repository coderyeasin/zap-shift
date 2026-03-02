import { worksCards } from "../../Custom/worksCard";

const HowWorks = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          {worksCards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3"
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
