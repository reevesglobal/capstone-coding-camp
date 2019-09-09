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
    background-color: #99dfff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='606' height='505' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.12'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
`;

const StyledProcessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
`;

const StyledTextContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    width: 80%;
    @media screen and (max-width: 840px) {
        width: 80%;
    }
`;

const StyledInnerContainer = styled.div`
    width: 80%;
    background-color: rgba(255, 255, 255, 0.5);
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
                        inputColor="palevioletred"
                    />
                    <Text 
                        textInput="STEP 1:"
                        fontFamily="Monospace"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="palevioletred"
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
                        inputColor="palevioletred"
                    />
                    <Text 
                        textInput="STEP 2:"
                        fontFamily="Monospace"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="palevioletred"
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
                        inputColor="palevioletred"
                    />
                    <Text 
                        textInput="STEP 3:"
                        fontFamily="Monospace"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="palevioletred"
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
                        inputColor="palevioletred"
                    />
                    <Text 
                        textInput="STEP 4:"
                        fontFamily="Monospace"
                        textSize="2.5em"
                        textPadding="5px"
                    />
                    <Line 
                        inputColor="palevioletred"
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