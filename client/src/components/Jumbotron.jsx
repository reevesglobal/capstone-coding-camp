import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import JumboMessage from '../styles/JumboMessage';
import Image from '../styles/Image';
import img from '../assets/jumboimg.png';

const StyledJTContainer = styled.div`
    display: flex;
    justify-content: space-between;
`



const Jumbotron = () => {
    return (
       <div>
        <StyledJTContainer>
            <Image height="auto" width="25%" src={img} />
            <JumboMessage headingText={`The Ultimate Virtual Hackathon Competition`} bodyText={`Build awesome projects with other self-taught developers and designers`} />
        </StyledJTContainer>
       </div>
    );
}

export default Jumbotron;