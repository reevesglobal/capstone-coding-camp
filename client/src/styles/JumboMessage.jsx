import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledMessage = styled.div`
    width: 50%;
`;

const StyledMessageHeading = styled.h4`
    font-size: 2.25em;
    font-family: "Roboto", serif;
    font-weight: 600;
    color: #10124E;
    text-transform: uppercase;
`;

const StyledMessageBody = styled.h6`
    font-size: 1.25em;
    font-family: "Roboto", serif;
    font-weight: 300;
    color: #225684;
`;


const JumboMessage = ({ headingText, bodyText }) => {
    return (
        <StyledMessage>
            <StyledMessageHeading>{headingText}</StyledMessageHeading>
            <StyledMessageBody>{bodyText}</StyledMessageBody>
            <Button text={`LEARN MORE`}/>
        </StyledMessage>
    )
}

export default JumboMessage;