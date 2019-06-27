import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.background || "white"};
    color: ${props => props.textColor || "black"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    :hover {
        opacity: 0.6;
    }
`;

const Button = (props) => {
    return (
        <StyledButton background={props.background} textColor={props.textColor} onClick={props.onClick}>{props.text}</StyledButton>
    );
}

export default Button;
