import React from 'react';
import './App.css';
import IdDetection from './Pages/IdDetection';
import Nav from './Components/Nav';

const App = () => {
  return (
    <div className="mainContainer">
      <Nav />
      <IdDetection />
    </div>
  );
};

export default App;
