import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
import FlowObject from "../styles/FlowObject";
import Arrow from "../styles/Arrow";

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

    @media (min-width: 400px) and (max-width: 1400px) {
        flex-direction: column;
    }
`;

const HowItWorks = () => {
    return (
        <StyledContainer>
            <SectionTitle label="How It Works" inputColor="" inputPadding="" />
            <StyledFlowContainer>
                <FlowObject inputColor={""} borderRadius={""} textInput={"Join an event"} />
                <Arrow inputColor={""} />
                <FlowObject inputColor={"#F2FCFE"} borderRadius={"20%"} textInput={"Pitch your project idea"} />
                <Arrow inputColor={""} />
                <FlowObject inputColor={"#BCE0FD"} borderRadius={"35%"} textInput={"Vote for your favourite pitches"} />
                <Arrow inputColor={""} />
                <FlowObject inputColor={"#F2FCFE"} borderRadius={"20%"} textInput={"Get assigned to a team and start building"} />
                <Arrow inputColor={""} />
                <FlowObject inputColor={""} borderRadius={""} textInput={"Finish project"} />
            </StyledFlowContainer>
        </StyledContainer>
    )
}

export default HowItWorks;