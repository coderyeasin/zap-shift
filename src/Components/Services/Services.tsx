import { serviceCards } from "../../Custom/serviceCards";

const Services = () => {
  return (
    <section className="container mx-auto w-full  py-20">
      <div className="h-[1064px]  bg-text-primary rounded-[32px] px-[100px] py-[160px]">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold text-white">Services</h3>
          <p className="text-light-gray my-3">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="w-[410px] h-[348px] rounded-[32px] px-[32px] py-[24px] bg-white flex flex-col justify-center items-center gap-4 mt-8"
            >
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
              <div className="text-center space-y-3">
                <h4 className="text-xl font-semibold text-text-primary">
                  {card.title}
                </h4>
                <p className="text-gray">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
