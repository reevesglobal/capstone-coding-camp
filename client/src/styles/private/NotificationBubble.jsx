import React from 'react';
import styled from 'styled-components';

const Bubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -8px;
  width: 22px
  height: 22px;
  font-size: 13px;
  font-family: 'Roboto', serif;
  color: rgba(255, 255, 255, 0.87);
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: ${props => props.bgColor};
`;

const NotificationBubble = ({ bgColor, text }) => {
  return (
    <Bubble bgColor={bgColor}>
      {text}
    </Bubble>
  );
}

export default NotificationBubble;
