import React from 'react';
import styled from 'styled-components';
import NotificationBubble from './NotificationBubble';
import { FaBell } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NotificationContainer = styled.div`
  position: relative;
`;

const NavNotification = () => {
  return (
    <NotificationContainer>
      <IconContext.Provider 
        value={{ 
          size: '2.8em', 
          color: '#2D3446', 
        }}
      >
        <FaBell />
      </IconContext.Provider>
      <NotificationBubble bgColor='#3775F2' text='5' />
    </NotificationContainer>
  );
}

export default NavNotification;
