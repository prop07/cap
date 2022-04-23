import React from "react";




//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Newsletter/>
      <Footer/> 
    </div>
  );
};

export default Home;
