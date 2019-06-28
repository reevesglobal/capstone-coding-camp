import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import logo from '../assets/CCC_logo_5.png';

const StyledNavTitle = styled.span`
  padding-top: ${props => props.inputPadding || "30px"};
  margin: 0 0 0px 0;
  font-family: Roboto,medium;
  font-size: 50px;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
`


const Navigation = (props) => {
    return(       
        <div>
            <Button hoverColor={'red'} text={`About`} />
            <Button hoverColor={'royalblue'} text={`Contact`} />
            <StyledNavTitle>Capstone<img src={logo}/>Coding Camp</StyledNavTitle>
            <Button hoverColor={'royalblue'}  text={`Join now`} />
            <Button hoverColor={'royalblue'} text={`Login`}/>
        </div>        
    );
}

export default Navigation;