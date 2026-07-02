import ScrollHero from "./components/ScrollHero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div id="top">
      <ScrollHero />
      <Marquee />
      <About />
      <Services />
      <Barbers />
      <Marquee />
      <Reviews />
      <Contact />
    </div>
  );
}
