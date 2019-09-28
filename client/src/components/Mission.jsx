import React from 'react';
import styled from 'styled-components';
import SectionTitle from "../styles/SectionTitle";
import Image from '../styles/Image';
import connectImg from '../assets/connectImg.png';
import supportImg from '../assets/supportImg.png';
import teamImg from '../assets/teamImg.png';
import FlowObject from '../styles/FlowObject';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    background-color: #f2fcfe;
    width: 100%;
    margin: 0px;
`;

const MissionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;

    @media (max-width: 968px) {  
        display: flex;
        flex-direction: column;
`;

const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
`;

const Mission = () => {
    return(
    <StyledContainer>
        <SectionTitle label="Our Mission" />
        <MissionContainer>
            <StyledInnerContainer>
                <Image 
                    src={connectImg} 
                    alt=""
                    height="300px"
                    maxHeight="400px"
                    width="300px"
                    maxWidth="400px"
                    heightTablet="300px"
                    widthTablet="300px" 
                />
                <FlowObject 
                    borderRadius="0"
                    inputColor="rgba(255, 255, 255, 0.5)"
                    textInput="Connect Developers"
                    height="100px"
                    width="300px"
                    border="none"
                />
            </StyledInnerContainer>
            <StyledInnerContainer>
                <Image 
                    src={teamImg} 
                    alt=""
                    height="300px"
                    maxHeight="400px"
                    width="300px"
                    maxWidth="400px"
                    heightTablet="300px"
                    widthTablet="300px" 
                />
                <FlowObject 
                    borderRadius=""
                    textInput="Through Team Projects"
                    inputColor="rgba(255, 255, 255, 0.5)"
                    height="100px"
                    width="300px"
                    border="none"
                />
            </StyledInnerContainer>
            <StyledInnerContainer>
                <Image 
                    src={supportImg} 
                    alt=""
                    height="300px"
                    maxHeight="400px"
                    width="300px"
                    maxWidth="400px"
                    heightTablet="300px"
                    widthTablet="300px" 
                />
                <FlowObject 
                    borderRadius=""
                    textInput="On a supportive platform"
                    src=""
                    inputColor="rgba(255, 255, 255, 0.5)"
                    height="100px"
                    width="300px"
                    border="none"
                />
            </StyledInnerContainer>
        </MissionContainer>
    </StyledContainer>
    )
}

export default Mission;