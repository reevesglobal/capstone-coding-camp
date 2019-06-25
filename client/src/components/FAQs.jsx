import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
// import QuestionList from "./QuestionList";

const StyledContainer = styled.div`
    background-color: #D1DEE8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
`;

const QuestionContainer = styled.div`
    background-color: #BCE0FD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 75%;
    margin: 0px;
`;

const Title = styled.h2`
    margin: 10px;
    color: ${props => props.titleColor || "#0E2F64"};
    font-weight: 400;
    text-transform: none;
    @media (max-width: 450px) {
        font-size: 1rem;
    }
`;

const FAQs = () => {
    const questions = [
        "Do I have to be a self-taught developer to join?", "Do we have to pitch a project idea?", "When do your hackathon camps occur?", "How large are the group sizes?"
    ];
    const questionList = questions.map(question => question + " ");
    return (
        <StyledContainer>
            <SectionTitle label={`Frequently Asked Questions`} inputColor="" inputPadding="" /> 
            <QuestionContainer>
                <Title>{questionList}</Title>
            </QuestionContainer>
        </StyledContainer>
    )
}

export default FAQs;