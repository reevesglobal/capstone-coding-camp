import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
import FlowObject from "../styles/FlowObject";

const StyledContainer = styled.div`
    background-color: #8EB4D1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
`;

const StyledProcessContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-flow: wrap;
    padding: 20px;
    height: 75%;
    width: 100%;
`;

const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.p`
    font-family: "Arial", serif;
    margin: 10px;
    text-align: center;
    color: #0E2F64;
    font-size: 1.75em;
    font-weight: 300;
    @media (max-width: 400px) {
        font-size: 0.75rem;
    }
`;

const HowItWorks = () => {
    return (
        <StyledContainer>
            <SectionTitle label="How It Works" inputColor="" inputPadding="" />
            <StyledProcessContainer>
                <StyledInnerContainer>
                    <Text>Step 1:</Text>
                    <FlowObject fontFamily={"Monospace"} inputColor={""} borderRadius={""} textInput={"Register and/or join an event"} />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Text>Step 2:</Text>
                    <FlowObject fontFamily={"Monospace"} inputColor={"#F2FCFE"} borderRadius={""} textInput={"Pitch your project idea to the community"} />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Text>Step 3:</Text>
                    <FlowObject fontFamily={"Monospace"} inputColor={""} borderRadius={""} textInput={"Vote for your favourite pitches"} />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Text>Step 4:</Text>
                    <FlowObject fontFamily={"Monospace"} inputColor={"#F2FCFE"} borderRadius={""} textInput={"Get assigned to a team and start building"} />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Text>Step 5:</Text>
                    <FlowObject fontFamily={"Monospace"} inputColor={"#BCE0FD"} borderRadius={""} textInput={"Finish and submit project"} />
                </StyledInnerContainer>
            </StyledProcessContainer>
        </StyledContainer>
    )
}

export default HowItWorks;