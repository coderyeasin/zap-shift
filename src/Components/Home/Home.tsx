import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import HowWorks from "../HowWorks/HowWorks";

const Home = () => {
  return (
    <section className="w-full h-screen">
      <Header />
      <HeroSection />
      <HowWorks />
    </section>
  );
};

export default Home;
