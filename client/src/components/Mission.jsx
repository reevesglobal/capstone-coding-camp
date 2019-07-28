import React from 'react';
import styled from 'styled-components';
import SectionTitle from "../styles/SectionTitle";
import Image from '../styles/Image';
import FlowObject from '../styles/FlowObject';

const Background = styled.div`
    background-color: #f2fcfe
`


const MissionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
    padding-bottom: 100px;

    @supports (display:-ms-grid) { /* Edge only */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`;

const Container = styled.span`
    display: flex;
    justify-content: space-evenly;

    @supports (display:-ms-grid) { /* Edge only */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`




const Mission = () => {
    return(
    <Background>
        <SectionTitle label="Our Mission" />
        <Container>
        <Image src="https://via.placeholder.com/300X184" alt="" />
        <Image src="https://via.placeholder.com/300X184" alt="" />
        <Image src="https://via.placeholder.com/300X184" alt=""   />
        </Container> 
        <MissionContainer>
         
            <FlowObject 
             borderRadius="1%"
             bakground-color="black"
             textInput="Connect Developers"
             height="100px"
             width="300px"
             border="none"
            >
            </FlowObject>
            <FlowObject 
             borderRadius="1%"
             bakground-color="black"
             textInput="Through Team Projects"
             src="https://via.placeholder.com/150"
             inputColor=""
             height="100px"
             width="300px"
             border="none"
            >
            text
            </FlowObject>
            <FlowObject 
             borderRadius="1%"
             bakground-color="black"
             textInput="On a supportive platform"
             src="https://via.placeholder.com/150"
             inputColor=""
             height="100px"
             width="300px"
             border="none"
            >
            text
            </FlowObject>
        </MissionContainer>
    </Background>
    )
}

export default Mission;