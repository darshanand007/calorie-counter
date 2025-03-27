
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CaloriePage from './CaloriePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage'; // Import LoginPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calories" element={<CaloriePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add route for login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
