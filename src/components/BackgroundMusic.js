import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MusicButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 105, 180, 0.8);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(255, 105, 180, 0.3);

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 20, 147, 0.9);
  }
`;

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio] = useState(() => {
    const audioInstance = new Audio('/music/I Love You - Bodyguard 320 Kbps.mp3');
    audioInstance.loop = true;
    return audioInstance;
  });

  useEffect(() => {
    audio.play().catch(error => {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
    });

    // Cleanup function to handle component unmounting
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicButton onClick={toggleMusic}>
      {isPlaying ? '🔇' : '🎵'}
    </MusicButton>
  );
}

export default BackgroundMusic;