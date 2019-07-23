import React from 'react';
import styled from 'styled-components';
import Triangle from './Triangle';

const TrianglesContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: transparent;
`;

const shapePosition = [
  {
    id: 1,
    rotation: "45deg"
  }, 
  {
    id: 2,
    rotation: "135deg"
  },
  {
    id: 3,
    rotation: "225deg"
  },
  {
    id: 4,
    rotation: "315deg"
  }
];

const RegistrationLogo = () => {
  return (
    <TrianglesContainer>
      {shapePosition.map(({ id, rotation }) => {
        return (
          <Triangle rotation={rotation} key={id} />
        );
      })}
    </TrianglesContainer>
  );
}

export default RegistrationLogo;