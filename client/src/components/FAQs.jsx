import React from "react";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";
import FAQList from "./FAQList";

const StyledContainer = styled.div`
    background-color: #F2FCFE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
`;

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 75%;
    margin: 0px;
`;

const Text = styled.p`
    font-family: Monospace;
    margin: 10px;
    text-align: center;
    color: #0E2F64;
    font-size: 1.2em;
    font-weight: 300;
    @media (max-width: 400px) {
        font-size: 0.75rem;
    }
`;

const FAQs = () => {
    const questions = [
        {
            id: "q1",
            question: "Do I have to be a self-taught developer to join?",
            answer: "Yes. This 'levels the playing field', so to speak."
        },
        {
            id: "q2",
            question: "Do we have to pitch a project idea?",
            answer: "No. If you're short on ideas, you can join a team that already has an idea."
        },
        {
            id: "q3",
            question: "When do your hackathon camps occur?",
            answer: "On the 1st day of every month."
        },
        {
            id: "q4",
            question: "How large are the group sizes?",
            answer: "Group sizes will vary depending upon the number of participants. Expect 4-6 members in each team.",
        },
    ];
    return (
        <StyledContainer>
            <SectionTitle label="Frequently Asked Questions" /> 
            <FAQContainer>
                <Text>Click the question to view the answer</Text>
                <FAQList questionList={questions} />
            </FAQContainer>
        </StyledContainer>
    )
}

export default FAQs;