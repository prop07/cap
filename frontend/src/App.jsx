
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Dashboard from './pages/Dashboard';
//pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Productlist from "./pages/Productlist";
import Cart from "./pages/Cart";
 
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route  element={<Home />}>
        <Route path="/" element={<Dashboard/>}/>

          <Route path="/Product" element={<Product />} />
          <Route path="/Productlist" element={<Productlist />} />
          <Route path="/Cart" element={<Cart />} />


          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
