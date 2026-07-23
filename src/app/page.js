import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services/Services";
import Durability from "../components/sections/Durability/Durability";
import Process from "../components/sections/Process/Process";
import About from "../components/sections/About/About";
import Industries from "../components/sections/Industries/Industries";
import WhyChooseUs from "../components/sections/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Durability />
      <Process />
      <About />
      <Industries />
      <WhyChooseUs />
    </>
  );
}