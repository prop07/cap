import React from "react";

//components
import Shopbycategory from "../components/Shopbycategory";
import Mostsellproduct from "../components/Popularproduct";
import Slider from "../components/Slider";

//styling

const Dashboard = () => {
  return (
    <div>
      <Slider/>
      <Shopbycategory/>
      <Mostsellproduct/>
    </div>
  );
};

export default Dashboard;
