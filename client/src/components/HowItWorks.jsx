import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
import FlowObject from "../styles/FlowObject";
import Image from '../styles/Image';
import step1Img from '../assets/step1Img.png';
import step2Img from '../assets/step2Img.png';
import step3Img from '../assets/step3Img.png';
import step4Img from '../assets/step4Img.png';

const StyledContainer = styled.div`
    background-color: #8EB4D1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
`;

const StyledProcessContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    padding-bottom: 2%;
    width: 100%;
`;

const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 75%;
`;

const HowItWorks = () => {
    return (
        <StyledContainer>
            <SectionTitle label="How It Works" inputColor="" inputPadding="" />
            <StyledProcessContainer>
                <StyledInnerContainer>
                    <FlowObject 
                        fontFamily={"Monospace"} 
                        inputColor={"#F2FCFE"} 
                        borderRadius={"0%"} 
                        height={"400px"}
                        width={"400px"}
                        border={"none"}
                        textInput={"Step 1: Register and/or join an event"} />
                    <Image 
                        src={step1Img}
                        height={"400px"}
                        width={"400px"}
                    />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Image 
                        src={step2Img}
                        height={"400px"}
                        width={"400px"}
                    />
                    <FlowObject 
                        fontFamily={"Monospace"} 
                        inputColor={"#F2FCFE"} 
                        borderRadius={"0%"} 
                        height={"400px"}
                        width={"400px"}
                        border={"none"}
                        textInput={"Step 2: Pitch your project idea to the community and vote for your favourite pitches"} />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <FlowObject 
                        fontFamily={"Monospace"} i
                        inputColor={"#F2FCFE"} 
                        borderRadius={"0%"} 
                        height={"400px"}
                        width={"400px"}
                        border={"none"}
                        textInput={"Step 3: Get assigned to a team and start building"} />
                    <Image 
                        src={step3Img}
                        height={"400px"}
                        width={"400px"}
                    />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Image 
                        src={step4Img}
                        height={"400px"}
                        width={"400px"}
                    />
                    <FlowObject 
                        fontFamily={"Monospace"} 
                        inputColor={"#F2FCFE"} 
                        borderRadius={"0%"} 
                        height={"400px"}
                        width={"400px"}
                        border={"none"}
                        textInput={"Step 4: Finish and submit project"} />
                </StyledInnerContainer>
            </StyledProcessContainer>
        </StyledContainer>
    )
}

export default HowItWorks;