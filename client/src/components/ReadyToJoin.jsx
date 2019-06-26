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
    color: #225684;
    font-family: "Arial", serif;
    font-size: 2em;
    font-weight: 300;
`;

const ReadyToJoin = () => {
    return (
        <StyledContainer>
            <SectionTitle label={`Ready To Join A Team?`} inputColor="" inputPadding="" /> 
            <ContentContainer>
                <Text>Next camp starts on the 1st of next month. Don't miss out!</Text>
                <Button 
                    text={"JOIN NOW"}
                    background={"#F6F9FE"}
                    textColor={"#225684"}
                />
            </ContentContainer>
        </StyledContainer>
    )
}

export default ReadyToJoin;