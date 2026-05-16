import React, { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Login from './components/Login';
import CakePopup from './components/CakePopup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCake, setShowCake] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && showCake && <CakePopup onClose={() => setShowCake(false)} />}
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;