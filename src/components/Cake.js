import React, { useState } from 'react';
import styled from 'styled-components';

const CakeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

const CakeWrapper = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 150px; /* Increased size */
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Candle = styled.div`
  font-size: 80px; /* Adjusted candle size */
  position: absolute;
  top: -60px;
  animation: flicker 1s infinite alternate;

  @keyframes flicker {
    0% { opacity: 0.8; }
    100% { opacity: 1; }
  }
`;

const Message = styled.h2`
  color: #FF69B4;
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

function Cake() {
  const [blown, setBlown] = useState(false);

  return (
    <CakeContainer>
      <CakeWrapper onClick={() => setBlown(true)}>
        <div>🎂</div>
        {!blown && <Candle>🕯️</Candle>}
      </CakeWrapper>
      <Message show={blown}>
        Happy Birthday to the Prettiest Girl! 🎉
      </Message>
    </CakeContainer>
  );
}

export default Cake;