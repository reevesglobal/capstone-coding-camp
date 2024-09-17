import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
import FlowObject from "../styles/FlowObject";
import Image from '../styles/Image';
import Text from '../styles/Text';
import Line from '../styles/Line';
import step1Img from '../assets/step1Img.png';
import step2Img from '../assets/step2Img.png';
import step3Img from '../assets/step3Img.png';
import step4Img from '../assets/step4Img.png';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(65, 179, 196, 0.2);
    `;

const StyledProcessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
`;

const StyledTextContainer = styled.div`
    width: 80%;
    @media screen and (max-width: 840px) {
        width: 80%;
    }
`;

const StyledInnerContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 10px 0px;
    @media screen and (max-width: 840px) {
        width: 80%;
        flex-direction: column;
    }
`;

const HowItWorks = () => {
    return (
        <StyledContainer>
            <SectionTitle label="How It Works" />
            <StyledProcessContainer>
                <StyledTextContainer>
                    <Line 
                        inputColor="#004e92"
                    />
                    <Text 
                        textInput="STEP 1:"
                        fontFamily="Roboto, sans-serif"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="#004e92"
                    />
                </StyledTextContainer>
                <StyledInnerContainer>
                    <FlowObject 
                        inputColor="none"
                        fontFamily="Monospace"
                        borderRadius="0%"
                        height="auto"
                        width="50%"
                        border="none"
                        textInput="Register and/or join an event"
                        textSize="2.2em" 
                        textPadding="10px" 
                        heightTablet="200px"
                        widthTablet="350px"
                    />
                    <Image 
                        src={step1Img}
                        maxHeight="400px"
                        width="50%"
                        maxWidth="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
                <StyledTextContainer>
                    <Line 
                        inputColor="#004e92"
                    />
                    <Text 
                        textInput="STEP 2:"
                        fontFamily="Roboto, sans-serif"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="#004e92"
                    />
                </StyledTextContainer>
                <StyledInnerContainer>
                    <Image 
                        src={step2Img}
                        order="2"
                        maxHeight="400px"
                        width="50%"
                        maxWidth="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                    <FlowObject 
                        fontFamily="Monospace"
                        inputColor="none"
                        borderRadius="0%"
                        height="auto"
                        width="50%"
                        border="none"
                        textInput="Pitch your project idea to the community and vote for your favourite pitches"
                        textSize="2.2em" 
                        order="1"
                        heightTablet="200px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
                <StyledTextContainer>
                    <Line 
                        inputColor="#004e92"
                    />
                    <Text 
                        textInput="STEP 3:"
                        fontFamily="Roboto, sans-serif"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="#004e92"
                    />
                </StyledTextContainer>
                <StyledInnerContainer>
                    <FlowObject 
                        fontFamily="Monospace"
                        inputColor="none"
                        borderRadius="0%"
                        height="auto"
                        width="50%"
                        border="none"
                        textInput="Get assigned to a team and start building"
                        textSize="2.2em" 
                        heightTablet="200px"
                        widthTablet="350px"
                    />
                    <Image 
                        src={step3Img}
                        maxHeight="400px"
                        width="50%"
                        maxWidth="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
                <StyledTextContainer>
                    <Line 
                        inputColor="#004e92"
                    />
                    <Text 
                        textInput="STEP 4:"
                        fontFamily="Roboto, sans-serif"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="#004e92"
                    />
                </StyledTextContainer>
                <StyledInnerContainer>
                    <Image 
                        src={step4Img}
                        order="2"
                        maxHeight="400px"
                        width="50%"
                        maxWidth="400px"
                        heightTablet="350px"
                        widthTablet="350px"
                    />
                    <FlowObject 
                        fontFamily="Monospace"
                        inputColor="none"
                        borderRadius="0%"
                        height="auto"
                        width="50%"
                        border="none"
                        textInput="Finish your project and submit!"
                        textSize="2.2em" 
                        order="1"
                        heightTablet="200px"
                        widthTablet="350px"
                    />
                </StyledInnerContainer>
            </StyledProcessContainer>
        </StyledContainer>
    )
}

export default HowItWorks;