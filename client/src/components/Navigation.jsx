import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import logo from '../assets/CCC_logo_5.png';
import Image from '../styles/Image';

const NavContainer = styled.nav`
    width: 100vw;
`

const StyledNavTitle = styled.span`
  margin: 0;
  font-family: Roboto, medium;
  font-size: 50px;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
  
`;

const StyledUL = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;

`



const Navigation = (props) => {
    return(
    <NavContainer>
        <StyledUL>  
            <li><Button hoverColor={'royalblue'} text={`About`} hoverBG={'white'} margin={'10px'} /></li>
            <li><Button hoverColor={'royalblue'} text={`Contact`} hoverBG={'white'} margin={'10px'}  /></li>
                <StyledNavTitle>Capstone <Image src={logo} height="1.5em" width="2em" /> Coding Camp</StyledNavTitle>
            <li><Button hoverColor={'royalblue'}  text={`Join now`} hoverBG={'white'} margin={'10px'} /></li>
            <li><Button hoverColor={'royalblue'} text={`Login`} hoverBG={'white'}  margin={'10px 20px'} /></li>  
        </StyledUL> 
    </NavContainer>          
    );
}

export default Navigation;
