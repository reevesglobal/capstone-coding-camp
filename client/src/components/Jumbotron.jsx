import React from 'react';
import styled from 'styled-components';
import JumboMessage from '../styles/JumboMessage';
import Image from '../styles/Image';
import img from '../assets/jumboimg.png';
import secondImg from '../assets/jumboimg2.png';

const StyledJTContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Jumbotron = () => {
    return (
       <div>
        <StyledJTContainer>
            <Image height="480px"  src={secondImg}   />
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
       </div>
    );
}

export default Jumbotron;