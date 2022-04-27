import React from "react";




//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shopbycategory from "../components/Shopbycategory";
import Mostsellproduct from "../components/Popularproduct";
import Slider from "../components/Slider";
import Product from "./Product";

//styling

const Home = () => {
  return (
    <div>
    
      <Navbar />
     <Slider/>
      <Shopbycategory/>
      <Mostsellproduct />
   
       <Newsletter/>
      <Footer/> 
      <Product/>
    </div>
  );
};

export default Home;
