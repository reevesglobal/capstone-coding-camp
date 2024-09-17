import React from 'react';
import styled from 'styled-components';

const PointerButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #2D3446;
  border-radius: 12px;
  outline: none;
  border: none;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const ArrowDirection = styled.span`
  color: #F1F3F6;
  font-size: 34px;
  font-weight: bold;
  font-family: serif;
`;

const ArrowButton = (props) => {
  return (
    <PointerButton onClick={props.onClick}>
      <ArrowDirection>{props.text}</ArrowDirection>
    </PointerButton>
  );
}

export default ArrowButton;
