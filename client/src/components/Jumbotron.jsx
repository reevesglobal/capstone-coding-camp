import React from 'react';
import styled from 'styled-components';
import JumboMessage from '../styles/JumboMessage';
import Image from '../styles/Image';
import img from '../assets/jumboimg.png';
import secondImg from '../assets/jumboimg2.png';

const StyledJTContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-flow: row-wrap;

    @media (max-width: 968px) {  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;

const Jumbotron = () => {
    return (
        <StyledJTContainer>
            <Image 
                height="auto"  
                src={secondImg}
            />
            <Image 
                height="auto"  
                src={img}  
                position="absolute" 
                top="10em" 
                left="6em" 
                mobilePos="absolute"  
                mobileTop="15em"
            />
            <JumboMessage />
        </StyledJTContainer>
    );
}

export default Jumbotron;