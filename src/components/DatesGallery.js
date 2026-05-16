import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  perspective: 1000px;
`;

const ImageCard = styled.div`
  width: 300px;
  height: 300px;
  margin: 1rem;
  background-color: #FFB6C1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(20deg) rotateX(10deg) scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function DatesGallery() {
  const navigate = useNavigate();
  
  const dateMemories = [
    { image: 'C:\Users\KIIT\birthday\public\images\WhatsApp Image 2025-05-16 at 20.58.18_69d33e36.jpg', route: '/memories/first-date' },
    { image: '/images/date2.jpg', route: '/memories/first-date' },
    { image: '/images/date3.jpg', route: '/memories/first-date' },
    { image: '/images/date4.jpg', route: '/memories/first-date' },
    { image: '/images/date5.jpg', route: '/memories/first-date' },
    { image: '/images/date6.jpg', route: '/memories/first-date' },
    { image: '/images/date7.jpg', route: '/memories/first-date' },
    { image: '/images/date8.jpg', route: '/memories/first-date' },
    { image: '/images/date9.jpg', route: '/memories/first-date' },
    { image: '/images/date10.jpg', route: '/memories/first-date' },
  ];

  return (
    <GalleryContainer>
      {dateMemories.map((memory, index) => (
        <ImageCard key={index} onClick={() => navigate(memory.route)}>
          <img src={memory.image} alt={`Date ${index + 1}`} />
        </ImageCard>
      ))}
    </GalleryContainer>
  );
}

export default DatesGallery;