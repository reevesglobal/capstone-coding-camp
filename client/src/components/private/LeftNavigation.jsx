import React from 'react';
import styled from 'styled-components';

const FixedNav = styled.nav`
  position: fixed;
  width: 330px;
  height: 100vh;
  z-index: 2;
  background-color: #2D3446; 
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 96px;
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', serif;
  font-size: 26px;
  font-weight: 300;
  text-transform: uppercase;
`;

const LeftNavigation = () => {
  return (
    <FixedNav>
      <Logo>Capstone Coding Camp</Logo>
    </FixedNav>
  );
}

export default LeftNavigation;