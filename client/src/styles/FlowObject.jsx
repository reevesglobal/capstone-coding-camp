import React from "react";
import styled from "styled-components";

const StyledFlowObject = styled.div`
    display: flex;
    flex-flow: wrap;
    height: 200px;
    width: 200px;
    border: 2px solid #10124E;
    background-color: ${props => props.inputColor || "#D1DEE8"};
    border-radius: ${props => props.borderRadius || "50%"};
`;

const Text = styled.p`
    margin: auto;
    padding: 10px;
    text-align: center;
    color: #225684;
    font-family: "Arial", serif;
    font-size: 1.75em;
    font-weight: 300;
`;

const FlowObject = (props) => {
    return (
        <StyledFlowObject
            inputColor={props.inputColor}
            borderRadius={props.borderRadius}
        >
            <Text>{props.textInput}</Text>
        </StyledFlowObject>
    )
}

export default FlowObject;