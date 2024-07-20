// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import FaceDetection from './Pages/FaceDetection';
import FaceRecognition from './Pages/FaceReco';
import IDDetection from './Pages/IdDetection';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/face-detection" element={<FaceDetection />} />
          <Route path="/face-recognition" element={<FaceRecognition />} />
        
          <Route path="/id-detection" element={<IDDetection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;