import React from 'react';
import styled from 'styled-components';

const SplashImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  animation-name: fadeout;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  @keyframes fadeout {
    from {
      opacity: 1;
      z-index: 1;
    }
    to {
      opacity: 0;
      z-index: -1;
    }
  }

  img {
    width: 40%;
  }
`;

const Splash = () => {
  return (
    <SplashImg>
      <img src="images/logo.png" alt="splash logo"></img>
    </SplashImg>
  );
};

export default Splash;
