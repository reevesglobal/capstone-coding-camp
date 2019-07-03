import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import JumboMessage from '../styles/JumboMessage';

const StyledJTContainer = styled.div`
    display: flex;
`



const Jumbotron = () => {
    return (
       <div>
        <StyledJTContainer>
            <JumboMessage mainText={`The Ultimate Virtual Hackathon Competition`} bodyText={`Build awesome projects with other self-taught developers and designers`} />
        </StyledJTContainer>
       </div>
    );
}

export default Jumbotron;