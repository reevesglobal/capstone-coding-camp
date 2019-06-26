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

const FAQs = () => {
    const questions = [
        {
            id: "q1",
            question: "Do I have to be a self-taught developer to join?",
            answer: "Yes."
        },
        {
            id: "q2",
            question: "Do we have to pitch a project idea?",
            answer: "No. If you're short on ideas, you can join a team that already has an idea."
        },
        {
            id: "q3",
            question: "When do your hackathon camps occur?",
            answer: "Every month."
        },
        {
            id: "q4",
            question: "How large are the group sizes?",
            answer: "Group sizes will vary depending upon the number of participants. Expect 4-6.",
        },
    ];
    return (
        <StyledContainer>
            <SectionTitle label={`Frequently Asked Questions`} inputColor="" inputPadding="" /> 
            <FAQContainer>
                <FAQList questionList={questions} />
            </FAQContainer>
        </StyledContainer>
    )
}

export default FAQs;