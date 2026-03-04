import Faq from "../FAQ/Faq";
import OurFeatures from "../Features/Features";
import Feedback from "../Feedback/Feedback";
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
      <OurFeatures />
      <Feedback />
      <Faq />
    </section>
  );
};

export default Home;
