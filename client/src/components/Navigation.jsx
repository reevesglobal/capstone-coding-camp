import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const Navigation = (props) => {
    return(       
        <div>
            <Button text="About" />
            <Button text="Contact" />  
            <Button text={`Join now`} />
            <Button text="Login" />
        </div>        
    );
}

export default Navigation;