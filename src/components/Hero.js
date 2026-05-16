import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: #FF69B4;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavTitle = styled.h1`
  color: white;
  margin: 0;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #FFF 0%, #FFB6C1 100%);
  padding: 60px 5% 0;
`;

const MainText = styled.div`
  text-align: left;
  flex: 1;
  padding-right: 2rem;
  animation: fadeInLeft 1.5s ease-out;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: #FF69B4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  line-height: 1.4;
  font-family: 'Poppins', sans-serif;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1.5s ease-out;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

function Hero() {
  return (
    <>
      <NavBar>
        <NavTitle>Happy Birthday Nandini! 🎉</NavTitle>
      </NavBar>
      <HeroContainer>
        <MainText>
          <Title>
            On May 17th<br />
            Earth got the most<br />
            beautiful creature &<br />
            the person who has given<br />
            me everything I ever wanted<br />
            & that's you    <br />       </Title>
        </MainText>
        <ImageContainer>
          <HeroImage 
            src="/images/cutu.jpg" 
            alt="Birthday Girl"
          />
        </ImageContainer>
      </HeroContainer>
    </>
  );
}

export default Hero;