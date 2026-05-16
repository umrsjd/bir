import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Login from './components/Login';
import CakePopup from './components/CakePopup';
import BackgroundMusic from './components/BackgroundMusic';
import MemoryDetail from './components/MemoryDetail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowCake(true);
  };

  const handleCakeClose = () => {
    setShowCake(false);
    setShowMainContent(true);
  };

  return (
    <Router>
      <div className="App">
        <BackgroundMusic />
        <Routes>
          {/* Memory detail route */}
          <Route path="/memories/:category" element={<MemoryDetail />} />
          
          {/* Main route with conditional rendering */}
          <Route path="*" element={
            <>
              {!isLoggedIn && <Login onLogin={handleLogin} />}
              {isLoggedIn && showCake && <CakePopup onClose={handleCakeClose} />}
              {showMainContent && (
                <>
                  <Hero />
                  <Gallery />
                </>
              )}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;