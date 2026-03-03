import Casio from "../../assets/casio.png";
import Amazon from "../../assets/amazon.png";
import Moon from "../../assets/moonstar.png";
import Star from "../../assets/start-.png";
import StarPeople from "../../assets/start-people.png";
import Rands from "../../assets/randstad.png";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">
              We've helped thousands of sales teams
            </h3>
            <p>
              Experience lightning-fast delivery with our efficient logistics
              network.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Real-Time Tracking</h3>
            <p>
              Track your shipments in real-time with our advanced tracking
              system.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p>
              Our dedicated support team is available around the clock to assist
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
