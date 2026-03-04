import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Courier from "../../assets/courier-parcels.png";
import reviewCard from "../../Custom/reviewCard";

const Feedback = () => {
  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto space-y-3">
        <img src={Courier} alt="Courier Parcels" className="mx-auto" />
        <h2 className="text-[40px] font-extrabold text-center tracking-[2%] text-text-primary">
          What our customers are sayings
        </h2>
        <p className="text-center text-gray font-medium leading-6.5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        {/* Review Card */}
        {reviewCard.map((card) => (
          <div
            key={card.id}
            className={`w-102.5 h-78.75 p-6 my-5 relative 
              ${card.id === 1 ? " bg-gray/20 mt-28 rounded-tr-3xl rounded-br-3xl absolute -left-30 " : ""}
              ${card.id === 2 ? " bg-gray/20 mt-20 rounded-3xl" : ""}
              ${card.id === 3 ? " bg-white rounded-3xl shadow-md" : ""}
              ${card.id === 4 ? " bg-gray/20 mt-20 rounded-3xl" : ""}
               ${card.id === 5 ? " bg-gray/20 mt-28 rounded-tl-3xl rounded-bl-3xl " : ""}
              `}
          >
            <p className="text-gray font-medium leading-6.5 border-b-2 border-dashed border-text-primary pb-4 mb-4">
              <span className="text-text-primary/20 text-[80px] font-extrabold">
                ,, <br />
              </span>
              {card.description}
            </p>
            <div className="flex items-center mb-4">
              {card.profile && (
                <div className="w-12 h-12 rounded-full bg-text-primary mr-4"></div>
              )}
              <div>
                <h3 className="font-bold text-lg">{card.name}</h3>
                <p className="text-gray text-sm">{card.designation}</p>
              </div>
            </div>
            {card.id === 3 && (
              <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-7">
                  <p className="bg-white w-12 h-12 rounded-full hover:opacity-90 transition flex justify-center items-center cursor-pointer">
                    <LuArrowLeft className="text-text-primary text-2xl" />
                  </p>
                  <div className="flex gap-1">
                    <p className="w-2 h-2 bg-text-primary rounded-full"></p>
                    <p className="w-2 h-2 bg-text-primary/60 rounded-full"></p>
                    <p className="w-2 h-2 bg-text-primary/50 rounded-full"></p>
                    <p className="w-2 h-2 bg-text-primary/40 rounded-full"></p>
                    <p className="w-2 h-2 bg-text-primary/30 rounded-full"></p>
                    <p className="w-2 h-2 bg-text-primary/20 rounded-full"></p>
                  </div>
                  <p className="bg-primary w-12 h-12 rounded-full hover:opacity-90 transition flex justify-center items-center cursor-pointer">
                    <LuArrowRight className="text-text-primary text-2xl" />
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
