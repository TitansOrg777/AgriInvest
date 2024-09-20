import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPageHeader from './Components/MainPageHeader'; // Ensure path is correct
import KeyMap from './Components/KeyMap'; // Ensure path is correct
import './App.css'; // Import your custom styles

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<MainPageHeader />} />

       
        <Route path="/KeyMap" element={<KeyMap />} />

      </Routes>
    </Router>
  );
}

export default App;
