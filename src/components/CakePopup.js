import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const fall = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
`;

const glitterAnimation = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1) rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
`;

const PopupOverlay = styled.div`
  position: relative;
  width: 100%;
  min-height: 200vh;
  overflow-y: auto;
  z-index: 1000;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 200vh;
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(232, 222, 223, 0.61)),
    url('/images/cutu3.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
`;


const Balloon = styled.div`
  position: fixed;
  width: 40px;
  height: 50px;
  background: ${props => props.color};
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: ${fall} ${props => props.duration}s linear infinite;
  left: ${props => props.left}%;
  top: -50px;
  transform-origin: center;
  box-shadow: inset -5px -5px 15px rgba(0,0,0,0.3);
  
  &:before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 20px;
    width: 2px;
    height: 20px;
    background: #fff;
    transform: rotate(${props => props.stringAngle}deg);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 18px;
    width: 6px;
    height: 6px;
    background: ${props => props.color};
    border-radius: 50%;
  }
`;

const Glitter = styled.div`
  position: fixed;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: ${glitterAnimation} ${props => props.duration}s linear infinite;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
`;

const PopupContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: 20vh auto 0 auto;
  width: 80%;
  max-width: 500px;
`;

const CakeIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${float} 2s ease-in-out infinite;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;

function CakePopup({ onClose }) {
  const [showEffects, setShowEffects] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleCandleClick = () => {
    setShowEffects(true);
    generateParticles();
  };

  const generateParticles = () => {
    const pinks = [
      "#ffb6c1", // light pink
      "#ff69b4", // hot pink
      "#ffc0cb", // pink
      "#fff0f5", // lavender blush
      "#ffe4e1"  // misty rose
    ];
    const whites = [
      "#fff",
      "#f8f8ff", // ghost white
      "#f5f5f5"  // white smoke
    ];
    const balloonColors = [...pinks, ...whites];
  
    const newParticles = [];
    // Balloons from anywhere across the top (0% - 100%)
    for (let i = 0; i < 30; i++) {
      const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      const left = Math.random() * 100; // 0% to 100% of the width
      newParticles.push({
        type: 'balloon',
        color,
        left,
        duration: 3 + Math.random() * 4,
        stringAngle: -10 + Math.random() * 20,
        id: `balloon-${i}`
      });
    }
  
    // Glitters (unchanged)
    for (let i = 0; i < 70; i++) {
      newParticles.push({
        type: 'glitter',
        color: `hsl(${Math.random() * 360}, 50%, 50%)`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 5 + Math.random() * 10,
        duration: 1 + Math.random() * 2,
        id: `glitter-${i}`
      });
    }
    setParticles(newParticles);
  };

  useEffect(() => {
    if (showEffects) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showEffects, onClose]);

  return (
    <PopupOverlay>
      <BackgroundImage />
      <PopupContent>
        <CakeIcon onClick={handleCandleClick}>🎂</CakeIcon>
        {showEffects && (
          <h2 style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>
            Happiest Birthday to the Prettiest Girl in my Life! 🎉
          </h2>
        )}
        {showEffects && particles.map(particle => (
          particle.type === 'balloon' ? (
            <Balloon
              key={particle.id}
              color={particle.color}
              left={particle.left}
              duration={particle.duration}
              stringAngle={particle.stringAngle}
            />
          ) : (
            <Glitter
              key={particle.id}
              color={particle.color}
              left={particle.left}
              top={particle.top}
              size={particle.size}
              duration={particle.duration}
            />
          )
        ))}
      </PopupContent>
    </PopupOverlay>
  );
}

export default CakePopup;