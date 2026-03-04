import Courier from "../../assets/courier-parcels.png";

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
    </section>
  );
};

export default Feedback;
