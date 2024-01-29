import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Popup from "./components/Popup/Popup";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import TopProducts from "./components/TopProducts/TopProducts";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [popup, setPopup] = useState(false);
  const popupHandler = () => {
    setPopup(!popup);
  };
  return (
    <>
      <Navbar popupHandler={popupHandler} />
      <Hero popupHandler={popupHandler} />
      <Products />
      <TopProducts popupHandler={popupHandler} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup popup={popup} setPopup={setPopup} />
    </>
  );
};

export default App;
