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
`;

const StyledProcessContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
`;

const StyledInnerContainer = styled.div`
    width: 70%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 840px) {
        width: 75%;
        flex-direction: column;
    }
`;

const HowItWorks = () => {
    return (
        <StyledContainer>
            <SectionTitle label="How It Works" />
            <StyledProcessContainer>
                <StyledInnerContainer>
                    <FlowObject 
                        inputColor="white"
                        fontFamily="Monospace"
                        borderRadius="0%"
                        height="400px"
                        width="400px"
                        border="none"
                        textInput="Step 1: Register and/or join an event"
                        textSize="2.2em" 
                        textPadding="10px" 
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                    <Image 
                        src={step1Img}
                        height="400px"
                        width="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Image 
                        src={step2Img}
                        order="2"
                        height="400px"
                        width="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                    <FlowObject 
                        fontFamily="Monospace"
                        inputColor="white"
                        borderRadius="0%"
                        height="400px"
                        width="400px"
                        border="none"
                        textInput="Step 2: Pitch your project idea to the community and vote for your favourite pitches"
                        textSize="2.2em" 
                        order="1"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <FlowObject 
                        fontFamily="Monospace"
                        inputColor="white"
                        borderRadius="0%"
                        height="400px"
                        width="400px"
                        border="none"
                        textInput="Step 3: Get assigned to a team and start building"
                        textSize="2.2em" 
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                    <Image 
                        src={step3Img}
                        height="400px"
                        width="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
                <StyledInnerContainer>
                    <Image 
                        src={step4Img}
                        order="2"
                        height="400px"
                        width="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                    <FlowObject 
                        fontFamily="Monospace"
                        inputColor="white"
                        borderRadius="0%"
                        height="400px"
                        width="400px"
                        border="none"
                        textInput="Step 4: Finish and submit project"
                        textSize="2.2em" 
                        order="1"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
            </StyledProcessContainer>
        </StyledContainer>
    )
}

export default HowItWorks;