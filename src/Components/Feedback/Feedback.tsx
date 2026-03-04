import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Courier from "../../assets/courier-parcels.png";
import reviewCard from "../../Custom/reviewCard";
import type { ReviewCardTypes } from "../types/types";
import CircleButton from "../../Shared/CircleButton";

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

      <div className="relative flex justify-center items-end gap-10 py-20">
        {reviewCard.map((card: ReviewCardTypes, i) => {
          const isCenter = i === 2;
          const isNear = i === 1 || i === 3;
          const isFar = i === 0 || i === 4;

          return (
            <div
              key={card.id}
              className={`
          w-102.5 h-78.75 p-8 transition-all duration-300
          ${isCenter ? "bg-white rounded-3xl shadow-md z-20" : ""}
          ${isNear ? "bg-gray/10 rounded-3xl translate-y-16 z-10 opacity-50" : ""}
          ${isFar ? "bg-gray/10 rounded-3xl translate-y-28 opacity-40" : ""}
        `}
            >
              <div className="relative py-6 mb-4 border-b border-dashed border-text-primary">
                <span className="absolute -top-4 left-0 text-[70px] text-text-primary/20 font-extrabold leading-none">
                  “
                </span>
                <p className="text-gray font-medium leading-7">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {card.profile && (
                  <div className="w-12 h-12 rounded-full bg-text-primary"></div>
                )}
                <div>
                  <h3 className="font-bold text-lg text-text-primary">
                    {card.name}
                  </h3>
                  <p className="text-gray text-sm">{card.designation}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0.5/2">
          <div className="flex items-center gap-8">
            <CircleButton className="bg-white">
              <LuArrowLeft className="text-text-primary font-bold text-2xl" />
            </CircleButton>

            {/* Dots */}
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-text-primary rounded-full"></div>
              <div className="w-2 h-2 bg-text-primary/60 rounded-full"></div>
              <div className="w-2 h-2 bg-text-primary/40 rounded-full"></div>
              <div className="w-2 h-2 bg-text-primary/30 rounded-full"></div>
              <div className="w-2 h-2 bg-text-primary/20 rounded-full"></div>
              <div className="w-2 h-2 bg-text-primary/10 rounded-full"></div>
            </div>
            <CircleButton className="bg-primary">
              <LuArrowRight className="text-text-primary font-bold text-2xl" />
            </CircleButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
