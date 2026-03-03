import { serviceCards } from "../../Custom/serviceCards";

const Services = () => {
  return (
    <section className="container mx-auto w-full  py-20">
      <div className="h-[1064px]  bg-text-primary rounded-[32px] py-[80px] px-[100px]">
        <div className="text-center text-white py-5">
          <h3 className="text-[40px] font-extrabold text-white">
            Our Services
          </h3>
          <p className="font-medium text-light-gray my-3 leading-[26px]">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className={`
                ${card.id === 2 ? "bg-primary " : "bg-white"}
                  w-[410px] h-[348px] rounded-[32px] px-[32px] py-[24px] flex flex-col justify-center items-center gap-4
              `}
            >
              <div className="w-[88px] h-[88px] rounded-full bg-radial-[at_50%_75%] from-[#EEEDFC]/0 to-[#EEEDFC] to-90% flex justify-center items-center">
                <img src={card.icon} alt={card.title} className="w-12 h-12" />
              </div>
              <div className="text-center space-y-3">
                <h4 className="text-2xl font-bold text-text-primary">
                  {card.title}
                </h4>
                <p className="text-gray font-medium leading-[26px]">
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

export default Services;
