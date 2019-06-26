import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";

const StyledContainer = styled.div`
    background-color: #8EB4D1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
`;

const StyledFlowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-flow: wrap;
    padding: 20px;
    height: 75%;
    width: 100%;
`;

const FlowObject = styled.div`
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

const Arrow = styled.span`
    font-size: 150px;
    margin: 0px;
    color: #10124E;
`

const HowItWorks = () => {
    return (
        <StyledContainer>
            <SectionTitle label={`How It Works`} inputColor="" inputPadding="" />
            <StyledFlowContainer>
                <FlowObject
                    inputColor={""}
                    borderRadius={""}
                >
                    <Text>Join an event</Text>
                </FlowObject>
                <Arrow>&#8680;</Arrow>
                <FlowObject 
                    inputColor={"#F2FCFE"}
                    borderRadius={"20%"}
                >
                    <Text>Pitch your project idea</Text>
                </FlowObject>
                <Arrow>&#8680;</Arrow>
                <FlowObject 
                    inputColor={"#FFFFFF"}
                    borderRadius={"35%"}
                >
                    <Text>Vote for your fovourite pitches</Text>
                </FlowObject>
                <Arrow>&#8680;</Arrow>
                <FlowObject 
                    inputColor={"#F2FCFE"}
                    borderRadius={"20%"}
                >
                    <Text>Get assigned to a team and start building</Text>
                </FlowObject>
                <Arrow>&#8680;</Arrow>
                <FlowObject
                    inputColor={""}
                    borderRadius={""}
                >
                    <Text>Finish project</Text>
                </FlowObject>
            </StyledFlowContainer>
        </StyledContainer>
    )
}

export default HowItWorks;