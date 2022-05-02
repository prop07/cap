import React from "react";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Outlet } from "react-router-dom";

//styling



const Home = () => {
  return (
    <div>
     
      <Navbar />
      <Outlet />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Home;
