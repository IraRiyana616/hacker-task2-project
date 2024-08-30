import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Media from './components/Media';
import Contacts from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
