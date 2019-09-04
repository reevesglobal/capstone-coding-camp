import React from "react";
import styled from "styled-components";

const StyledFlowObject = styled.div`
    display: flex;
    align-items: center;
    flex-flow: wrap;
    margin: ${props => props.margin || "0"};
    height: ${props => props.height || "200px"};
    width: ${props => props.width || "200px"};
    border: ${props => props.border || "2px solid #10124E"};
    background-color: ${props => props.inputColor || "#D1DEE8"};
    border-radius: ${props => props.borderRadius || "50%"};
    src: url(${props => props.src});
`;

const Text = styled.p`
    padding: ${props => props.textPadding || "10px"};
    margin: 0;
    text-align: center;
    color: ${props => props.textColor || "#225684"};
    font-family: "Arial", serif;
    font-size: ${props => props.textSize || "1.75em"};
    font-weight: ${props => props.textWeight || "300"};
    text-transform: ${props => props.textTransform || "none"};
`;

const FlowObject = (props) => {
    return (
        <StyledFlowObject
            margin={props.margin}
            height={props.height}
            width={props.width}
            border={props.border}
            inputColor={props.inputColor}
            borderRadius={props.borderRadius}
            src={props.src}
        >
            <Text
                textPadding={props.textPadding}
                textColor={props.textColor}
                textSize={props.textSize}
                textWeight={props.textWeight}
                textTransform={props.textTransform}
            >
                {props.textInput}
            </Text>
        </StyledFlowObject>
    );
}

export default FlowObject;