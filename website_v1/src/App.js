

import "./App.css";
import LightTestimonialA from "./components/LightTestimonialA";
import LightContactC from "./components/LightContactC";
import LightFooterD from "./components/LightFooterD";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Chef from "./components/Chef";
import Awards from "./components/awards";
import SustainabilityInitiatives from "./components/Initiatives";
import RestaurantMap from "./components/Map";


function App() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Welcome/>
      <Cards />
      <Menu />
      <LightTestimonialA />
      <Chef/>
      <Awards/>
      <SustainabilityInitiatives/>
      <LightContactC /> 
      <RestaurantMap/>
      <LightFooterD /> 
    </div>
  );
}

export default App;
