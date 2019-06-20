import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const NavBackground = styled.div`
    height: 100px;
    background-color: #296ba4;
`;

const Navigation = (props) => {
    return(       
        <NavBackground>
            <Button text="About" />
            <Button text="Contact" />   
            <Button text={`Join now`} />
            <Button text="Login" />
        </NavBackground>         
    );
}

export default Navigation;