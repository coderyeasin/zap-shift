import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import HowWorks from "../HowWorks/HowWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <section className="w-full h-screen">
      <Header />
      <HeroSection />
      <HowWorks />
      <Services />
    </section>
  );
};

export default Home;
