import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 182, 193, 0.7)),
              url('/images/cutu2.jpg') center/cover fixed no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: backgroundScroll 20s linear infinite;
  overflow: hidden;

  @keyframes backgroundScroll {
    0% {
      background-position: center 0%;
    }
    50% {
      background-position: center 100%;
    }
    100% {
      background-position: center 0%;
    }
  }
`;

const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  animation: fadeIn 0.6s ease-out;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.3);

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  color: #FF1493;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: #FF1493;
  
  &::placeholder {
    color: rgba(255, 105, 180, 0.8);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 105, 180, 0.8);
    box-shadow: 0 0 10px rgba(255, 182, 193, 0.3);
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: rgba(255, 105, 180, 0.8);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 20, 147, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Overlay>
      <LoginContainer>
        <Title>Hii Birthday Girl 🎉</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Your Beautiful Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password to your Life"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Login to my heart ✨</Button>
        </form>
      </LoginContainer>
    </Overlay>
  );
}

export default Login;