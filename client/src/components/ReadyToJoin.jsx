import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
import Button from "../styles/Button";

const StyledContainer = styled.div`
    background-color: #D6ECFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0px;
`;

const Text = styled.p`
    margin: 10px;
    text-align: center;
    color: rgba(14, 47, 100, 0.7);
    font-family: "Arial", serif;
    font-size: 1.25em;
    font-weight: 300;
`;

const ReadyToJoin = () => {
    return (
        <StyledContainer>
            <SectionTitle label={`Ready To Join A Team?`} inputColor="rgba(14, 47, 100, 0.87)" /> 
            <ContentContainer>
                <Text>Next camp starts on the 1st of next month. Don't miss out!</Text>
                <Button 
                    text="JOIN NOW"
                    borderRadius="4px"
                    background="#133F86"
                    textColor="#F6F9FE"
                    margin="60px"
                    border="2px solid transparent"
                    hoverBG="#D6ECFF"
                    hoverColor="#133F86"
                    hoverBorder="2px solid #133F86"
                />
            </ContentContainer>
        </StyledContainer>
    )
}

export default ReadyToJoin;