import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import logo from '../assets/CCC_logo_5.png';
import Image from '../styles/Image';


const StyledNavTitle = styled.span`
  padding-top: ${props => props.inputPadding || "30px"};
  margin: 0;
  font-family: Roboto, medium;
  font-size: 50px;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
`;




const Navigation = (props) => {
    return(       
        <div>
            <Button hoverColor={'royalblue'} text={`About`} />
            <Button hoverColor={'royalblue'} text={`Contact`} />
            <StyledNavTitle>
                Capstone<Image src={logo} height="5%" width="5%" />Coding Camp
            </StyledNavTitle>
            <Button hoverColor={'royalblue'}  text={`Join now`} />
            <Button hoverColor={'royalblue'} text={`Login`}/>
        </div>        
    );
}

export default Navigation;
