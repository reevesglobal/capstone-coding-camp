import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import logo from '../assets/CCClogo_WHITE.png';
import Image from '../styles/Image';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
    width: 100%;
`;

const StyledNavTitle = styled.span`
    margin: 0;
    font-family: 'Roboto', medium, sans-serif;
    font-size: 50px;
    font-weight: 300;
    text-align: center;
    color: #ffffff;
`;

const StyledUL = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    flex-flow: row-wrap;
    margin: 0;
    padding: 0;
`;

const Navigation = (props) => {
    return (
        <NavContainer>
            <StyledUL>  
                <li>
                    <Link to='/about/'>
                        <Button 
                            hoverColor="royalblue" 
                            text="About" 
                            hoverBG="white" 
                            margin="10px" 
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/contact/'>
                        <Button 
                            hoverColor="royalblue" 
                            text="Contact" 
                            hoverBG="white" 
                            margin="10px"   
                        />
                    </Link>
                </li>
                <Link to='/' style={{textDecoration:'none'}}>
                    <StyledNavTitle>
                        <Image src={logo} height="250px" width="330px" />
                    </StyledNavTitle>
                </Link>
                <li>
                    <Link to='/register/'>
                        <Button 
                            hoverColor="royalblue"  
                            text="Join now" 
                            hoverBG="white" 
                            margin="10px"  
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/login/'>
                        <Button 
                            hoverColor="royalblue"
                            text="Login"
                            hoverBG="white"  
                            margin="10px 20px" 
                        />
                    </Link>
                </li>  
            </StyledUL> 
        </NavContainer>          
    );
}

export default Navigation;
