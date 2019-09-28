import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.background || "none" };
    color: ${props => props.color || "white"};
    :hover {
        color: ${props => props.hoverColor};
        background: ${props => props.hoverBG || "none"};
        border: ${props => props.hoverBorder}
    }
    :focus {
        outline: none;
    }
    font-size: ${props => props.fontSize || "22px"};
    font-family: ${props => props.fontFamily || "verdana"};
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || '14px 35px'};
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "5px"};
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
            padding={props.padding}
        >
            {props.text}
        </StyledButton>
    );
}

export default Button;
