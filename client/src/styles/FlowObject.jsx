import React from "react";
import styled from "styled-components";

const StyledFlowObject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    margin: ${props => props.margin || "1%"};
    min-height: ${props => props.minHeight};
    height: ${props => props.height};
    min-width: ${props => props.minWidth};
    width: ${props => props.width};
    border: ${props => props.border};
    background-color: ${props => props.inputBGColor};
    border-radius: ${props => props.borderRadius}
    src: url(${props => props.src});
    @media screen and (max-width: 840px) {
        order: ${props => props.order};
        height: ${props => props.heightTablet};
        width: ${props => props.widthTablet};
    }
`;

const Text = styled.p`
    padding: ${props => props.textPadding || "5%"};
    margin: 0;
    text-align: center;
    color: ${props => props.textColor || "#225684"};
    font-family: ${props => props.fontFamily || "Arial, serif"};
    font-size: ${props => props.textSize || "1.75em"};
    font-weight: ${props => props.textWeight || "300"};
    text-transform: ${props => props.textTransform || "none"};
`;

const FlowObject = (props) => {
    return (
        <StyledFlowObject
            margin={props.margin}
            minHeight={props.minHeight}
            height={props.height}
            minWidth={props.minWidth}
            width={props.width}
            border={props.border}
            inputBGColor={props.inputBGColor}
            borderRadius={props.borderRadius}
            src={props.src}
            order={props.order}
            heightTablet={props.heightTablet}
            widthTablet={props.widthTablet}
        >
            <Text
                fontFamily={props.fontFamily}
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