import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import logo from '../assets/CCClogo_WHITE.png';
import Image from '../styles/Image';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledUL = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin-top: 5px;
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
                    <Image src={logo} height="125px" width="200px" />
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
