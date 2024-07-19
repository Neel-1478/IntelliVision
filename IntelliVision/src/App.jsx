// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import FaceDetection from './Pages/FaceDetection';
import FaceRecognition from './Pages/FaceReco';
import FaceEmotion from './Pages/FaceEmotion';
import IDDetection from './Pages/IdDetection';
// import Collections from './Collections';
// import About from './About';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/face-detection" element={<FaceDetection />} />
          <Route path="/face-recognition" element={<FaceRecognition />} />
          <Route path="/face-emotion" element={<FaceEmotion />} />
          <Route path="/id-detection" element={<IDDetection />} />
          {/* <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;