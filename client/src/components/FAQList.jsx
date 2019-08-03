import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
    text-align: center;
    width: 75%;
    details summary::-webkit-details-marker {
        display:none;
    }
`;

const Title = styled.summary`
    margin: 25px;
    color: ${props => props.titleColor || "#10124E"};
    text-transform: none;
    font-size: 1.75em;
    font-family: "Arial", serif;
    font-weight: 500;
    cursor: pointer;
    list-style: none;
`;

const Answer = styled.p`
    margin: 25px;
    color: ${props => props.titleColor || "#133F86"};
    text-transform: italic;
    font-size: 1.50em;
    font-family: "Arial", serif;
    font-weight: 400;
`;

const FAQList = ({ questionList }) => (
    <QuestionContainer>
        {questionList.map(({ question, answer, id }) => (
            <details>
                <Title key={id}>"{question}"</Title>
                <Answer>{answer}</Answer>
            </details>
        ))}
    </QuestionContainer>
)

export default FAQList;