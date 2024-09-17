import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import HBMButton from './HamburgerMenu/HBMButton.jsx';
import logo from '../assets/CCClogo_WHITE.png';
import Image from '../styles/Image';
import { Link } from 'react-router-dom';

const NavHeader = styled.header`
    background-color: rgb(3,80,147);
`;

const NavContainer = styled.nav`
    display: flex; 
    align-items: center;
`;

const Spacer = styled.div`
    flex: 1;
`;

const StyledUL = styled.ul`
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    @media (max-width: 848px) {
        display: none;
    }
`;

const StyledLiItem = styled.li`
`;

const Navigation = (props) => {
    return (
        <NavHeader>
            <NavContainer className="navBar">
                <Link className="navLogo" to="/">
                    <Image 
                        src={logo}
                        marginLeft="1rem"
                        maxWidth="165px"
                    />
                </Link>
                <Spacer></Spacer>
                <StyledUL className="navItems">  
                    <StyledLiItem>
                        <Link to='/about/'>
                            <Button 
                                hoverColor="royalblue" 
                                text="About" 
                                hoverBG="white" 
                                margin="10px" 
                            />
                        </Link>
                    </StyledLiItem>
                    <StyledLiItem>
                        <Link to='/contact/'>
                            <Button 
                                hoverColor="royalblue" 
                                text="Contact" 
                                hoverBG="white" 
                                margin="10px"   
                            />
                        </Link>
                    </StyledLiItem>
                    <StyledLiItem>
                        <Link to='/register/'>
                            <Button 
                                hoverColor="royalblue"  
                                text="Join now" 
                                hoverBG="white" 
                                margin="10px"  
                            />
                        </Link>
                    </StyledLiItem>
                    <StyledLiItem>
                        <Link to='/login/'>
                            <Button 
                                hoverColor="royalblue"
                                text="Login"
                                hoverBG="white"  
                                margin="10px 20px" 
                            />
                        </Link>
                    </StyledLiItem>  
                </StyledUL> 
                <HBMButton />
            </NavContainer>
        </NavHeader>          
    );
}

export default Navigation;
