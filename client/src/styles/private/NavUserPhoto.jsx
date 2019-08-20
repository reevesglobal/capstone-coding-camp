import React from 'react';
import styled from 'styled-components';
import OnlineStatus from './OnlineStatus';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const PhotoContainer = styled.div`
  position: relative;
`;

const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const BgShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #E6E6E6;
`;

const NavUserPhoto = (props) => {
  return (
    <PhotoContainer>
      { props.UserProfilePhoto !== null ? 
        <UserImg alt="User Profile Picture" src={props.UserProfilePhoto} /> : 
        <BgShape>
          <IconContext.Provider value={{ size: '2.6em', color: '#2D3446'}}>
            <FaUser />
          </IconContext.Provider>
        </BgShape>
      }
      { props.isUserOnline ? 
        <OnlineStatus bgColor="#7ED321" /> : 
        <OnlineStatus bgColor="#e14615" /> 
      }
    </PhotoContainer>
  );
}

export default NavUserPhoto;
