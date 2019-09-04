import React from 'react';
import styled from 'styled-components';
import NavNotification from '../../styles/private/NavNotification';
import NavUserPhoto from '../../styles/private/NavUserPhoto';

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  height: 95px;
  width: 100%;
  z-index: 1;
  background-color: #fff;
`;

const NavUppUL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
`;

const NavUppLi = styled.li`
  margin: 0 18px;
  font-size: 10px;
  line-wrap: wrap;
  cursor: pointer;
`;

const UpperNavigation = (props) => {
  return (
    <Nav> 
      <NavUppUL>
        <NavUppLi>
          <NavNotification />
        </NavUppLi>
        <NavUppLi>
          <NavUserPhoto {...props} />
        </NavUppLi>
      </NavUppUL>
    </Nav>
  );
}

export default UpperNavigation;