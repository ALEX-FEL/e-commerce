import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './composants/pages/Home';
import Services from './composants/pages/Services';
import Home_list from './composants/pages/Home_list';
import About from './composants/pages/About';
import Contact from './composants/pages/Contact';
import React from 'react';
import Cart from './composants/pages/Elements/cart';




function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home_list" element={<Home_list />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </Router>
  );
  
}

export default App;
