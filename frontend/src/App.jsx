
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home";
import Product from "./pages/Product";

 
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/Product" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
