import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
    padding: ${props => props.textPadding || "5%"};
    margin: 0;
    text-align: center;
    color: ${props => props.textColor || "#225684"};
    font-family: ${props => props.fontFamily || "Arial, serif"};
    font-size: ${props => props.textSize || "1.75em"};
    font-weight: ${props => props.textWeight || "300"};
    text-transform: ${props => props.textTransform || "none"};
`;

const Text = (props) => {
    return (
        <StyledText 
            textPadding={props.textPadding}
            textColor={props.textColor}
            fontFamily={props.fontFamily}
            textSize={props.textSize}
            textWeight={props.textWeight}
            textTransform={props.textTransform}
        >
            {props.textInput}
        </StyledText>
    )
}

export default Text;