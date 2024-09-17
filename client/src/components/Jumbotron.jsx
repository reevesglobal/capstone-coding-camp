import React from 'react';
import styled from 'styled-components';
import JumboMessage from '../styles/JumboMessage';
import Image from '../styles/Image';
import CCClogo from '../assets/CCC_logo_5.png';

const StyledJTContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1.5rem;
    background-image: linear-gradient(#035093, #f2fcfe);

    @media (max-width: 800px) {  
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`;

const Jumbotron = (props) => {
    return (
        <StyledJTContainer>
            <Image 
                src={CCClogo} 
                height="450px"
                maxHeight="500px"
                heightTablet="350px"
            />
            <JumboMessage />
        </StyledJTContainer>
    );
}

export default Jumbotron;