import Container from "../Layout/Container";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-24  max-w-2xl mx-auto rounded-2xl ">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              We Make Sure Your Parcel Arrives On Time – No Fuss.
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Track Your Parcel
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition">
                Be A Rider
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img
              src="/hero-illustration.png"
              alt="Delivery Rider"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
