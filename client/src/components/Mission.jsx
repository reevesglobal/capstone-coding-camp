import React from 'react';
import styled from 'styled-components';
import SectionTitle from "../styles/SectionTitle";
import Image from '../styles/Image';
import FlowObject from '../styles/FlowObject';

const StyledContainer = styled.div`
    background-color: #F2FCFE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
`;

const MissionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;

    @media (max-width: 968px) {  
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`;

const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
`;

const Mission = () => {
    return(
    <StyledContainer>
        <SectionTitle label="Our Mission" />
        <MissionContainer>
            <StyledInnerContainer>
                <Image src="https://via.placeholder.com/300X184" alt="" />
                <FlowObject 
                    borderRadius="1%"
                    bakground-color="black"
                    textInput="Connect Developers"
                    height="100px"
                    width="300px"
                    border="none"
                />
            </StyledInnerContainer>
            <StyledInnerContainer>
                <Image src="https://via.placeholder.com/300X184" alt="" />
                <FlowObject 
                    borderRadius="1%"
                    bakground-color="black"
                    textInput="Through Team Projects"
                    src="https://via.placeholder.com/150"
                    inputColor=""
                    height="100px"
                    width="300px"
                    border="none"
                />
            </StyledInnerContainer>
            <StyledInnerContainer>
                <Image src="https://via.placeholder.com/300X184" alt=""   />
                <FlowObject 
                    borderRadius="1%"
                    bakground-color="black"
                    textInput="On a supportive platform"
                    src="https://via.placeholder.com/150"
                    inputColor=""
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