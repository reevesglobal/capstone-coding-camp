import React from 'react';
import styled from 'styled-components';

const OnlineCircle = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: ${props => props.bgColor};
`;

const OnlineStatus = ({ bgColor }) => {
  return (
    <OnlineCircle bgColor={bgColor} />
  );
}

export default OnlineStatus;
