import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.background || "none"};
    color: ${props => props.color || "white"};
    :hover {
        color: ${props => props.hoverColor};
        background: ${props => props.hoverBG || "white"};
        border: ${props => props.hoverBorder}
    }
    font-size: ${props => props.fontSize || "20px"};
    font-family: ${props => props.fontFamily || "verdana"};
    margin: ${props => props.margin || "0 80px 20px 50px"};
    padding: 8px 16px;
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "10px"};
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
            hoverBorder={props.hoverBorder}
            hoverBG={props.hoverBG}
            fontSize={props.fontSize}
            fontFamily={props.fontFamily}
            borderRadius={props.borderRadius}
            margin={props.margin}
        >
            {props.text}
        </StyledButton>
    );
}

export default Button;
