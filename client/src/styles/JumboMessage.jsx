import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledMessage = styled.div`
    display: flex;
    padding: 100px;
    flex-direction: column;
`;

const StyledMessageHeading = styled.h4`
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
`;

const StyledMessageBody = styled.p`
    font-size: 26px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #225684;
    flex-flow: wrap;
    padding-bottom: 20px;
`;

const JumboMessage = ({ bodyText }) => {
    return (
        <StyledMessage>
            <StyledMessageHeading>The <strong>Ultimate</strong> Virtual Hack-a-thon Competition</StyledMessageHeading>
            <StyledMessageBody>Build awesome projects with other self-taught developers and designers</StyledMessageBody>
            <Button 
                text="LEARN MORE" 
                color="#025093" 
                border="2px solid #004e92" 
                margin="auto" 
                fontFamily="Arial, Bold"
                fontSize="24px"
                fontWeight="600"
            />
        </StyledMessage>
    )
}

export default JumboMessage;