import ScrollHero from "./components/ScrollHero";
import About from "./components/About";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div id="top">
      <ScrollHero />
      <About />
      <Services />
      <Barbers />
      <Reviews />
      <Contact />
    </div>
  );
}
