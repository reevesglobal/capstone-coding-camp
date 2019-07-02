import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.background || "none"};
    color: ${props => props.color || "white"};
    :hover {
        color: ${props => props.hoverColor};
        background: ${props => props.background || "white"};
    }
    font-size: 20px;
    font-family: verdana;
    margin: 0px 80px 20px 50px;
    padding: 8px 16px;
    border: ${props => props.border || "none"};
    border-radius: 10px;
    cursor: pointer;
`;

const Button = (props) => {
    return (
        <StyledButton 
            background={props.background} 
            color={props.color} 
            onClick={props.onClick}
            border={props.border}
            hoverColor={props.hoverColor}
        >
            {props.text}
        </StyledButton>
    );
}

export default Button;
