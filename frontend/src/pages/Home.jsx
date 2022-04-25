import React from "react";




//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shopbycategory from "../components/Shopbycategory";
import Mostsellproduct from "../components/Popularproduct";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
      <Shopbycategory/>
      <Shopbycategory/>
      <Mostsellproduct/>
      <Newsletter/>
      <Footer/> 
    </div>
  );
};

export default Home;
