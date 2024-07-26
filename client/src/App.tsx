import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>Client Folder</h1>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
