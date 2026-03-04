import CircleButton from "../../Shared/CircleButton";
import CustomButton from "../../Shared/CustomButton";
import faqQuestions from "../../utils/faq";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Faq = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] tracking-[2%] leading-10 text-text-primary font-extrabold text-center mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray font-medium text-center mb-10 leading-6.5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-5">
          {faqQuestions.map((faq) => (
            <div
              key={faq.id}
              className={` px-8 ${faq.id === 1 ? "bg-faq-answer border border-[#2B8282] py-5 rounded-2xl" : "bg-white rounded-xl py-5"} `}
            >
              <div
                className={`flex items-center justify-between ${faq.id === 1 ? "border-b border-[#2B8282]/20 py-2" : "border-0"} `}
              >
                <h3 className="text-lg font-bold text-text-primary ">
                  {faq.question}
                </h3>
                {faq.id === 1 ? (
                  <RiArrowUpSLine className="text-text-primary text-xl font-extrabold cursor-pointer" />
                ) : (
                  <RiArrowDownSLine className="text-text-primary text-xl font-extrabold cursor-pointer" />
                )}
              </div>

              <p
                className={`${faq.id === 1 ? "py-3" : "py-0"} text-gray font-medium leading-6.5`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-10">
          <CustomButton
            text="See More FAQ’s"
            className="bg-primary text-text-primary font-bold text-[20px] px-6 py-3 rounded-xl"
          />
          <CircleButton />
        </div>
      </div>
    </section>
  );
};

export default Faq;
