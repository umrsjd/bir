import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GalleryContainer = styled.div`
  padding: 2rem;
  background: transparent;
  position: relative;
  min-height: 100vh;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const GalleryContent = styled.div`
  position: relative;
  z-index: 1;
`;

const GalleryTitle = styled.h1`
  text-align: center;
  color: #FF69B4;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 2rem;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MemoryCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 192, 203, 0.3);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    margin: 0;
    background: rgba(255, 255, 255, 0.8);
    color: #FF69B4;
    font-family: 'Dancing Script', cursive;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: rgba(255, 182, 193, 0.9);
  color: white;
`;

function Gallery() {
  const navigate = useNavigate(); // Initialize useNavigate
  const memories = [
    { caption: 'Pehla Pehla',  route: '/memories/first-date' },
    { caption: 'Ice-cream Paglu',  route: '/memories/Ice-cream Paglu' },
    { caption: 'Phool Wali', route: '/memories/Phool Wali' },
    { caption: 'Always & Forever',  route: '/memories/Always & Forever' },
    { caption: 'Lovely peoplesssss',  route: '/memories/people' },
    { caption: 'Hehe',  route: '/memories/Hehe' },
  ];

  return (
    <GalleryContainer>
      <BackgroundImage bgImage="/images/gallery_background.jpg" /> {/* You can set a general background for the gallery page */}
      <GalleryContent>
        <GalleryTitle>Our Cherished Memories</GalleryTitle> {/* Changed h2 to GalleryTitle for consistency */}
        <GalleryGrid>
          {memories.map((memory, index) => (
            <MemoryCard key={index} onClick={() => navigate(memory.route)}>
              <img 
                src={process.env.PUBLIC_URL + memory.image} 
                alt={memory.caption} 
                style={{ 
                  width: '100%', 
                  height: '100%', // Make image fill the card before caption
                  objectFit: 'cover' 
                }} 
              />
              <Caption>
                <h3>{memory.caption}</h3>
              </Caption>
            </MemoryCard>
          ))}
        </GalleryGrid>
      </GalleryContent>
    </GalleryContainer>
  );
}

export default Gallery;