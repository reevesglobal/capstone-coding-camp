import React from 'react';
import styled from 'styled-components';
import Button from '../../styles/Button';
import { Link } from 'react-router-dom';

const StyledNavSlider = styled.nav`
    display: none;
    overflow: hidden;
    background-color: rgb(3,80,147,0.9);
    position: relative;

    @media (min-width: 848px) {
        display: none;
    }
`;

const StyledNavList = styled.ul`
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const StyledLiItem = styled.li`
    padding: 0 0.5rem;

    :hover {
        background-color: #ddd;
        color: black;
    }
`;

const HamburgerMenu = (props) => {
    return (
        <StyledNavSlider id="navLinks">
            <StyledNavList>  
                <StyledLiItem>
                    <Link to='/about/'>
                        <Button 
                            text="About"
                        />
                    </Link>
                </StyledLiItem>
                <StyledLiItem>
                    <Link to='/contact/'>
                        <Button 
                            text="Contact"
                        />
                    </Link>
                </StyledLiItem>
                <StyledLiItem>
                    <Link to='/register/'>
                        <Button 
                            text="Join now"
                        />
                    </Link>
                </StyledLiItem>
                <StyledLiItem>
                    <Link to='/login/'>
                        <Button 
                            text="Login"
                        />
                    </Link>
                </StyledLiItem>
            </StyledNavList>
        </StyledNavSlider>
    )
}

export default HamburgerMenu;