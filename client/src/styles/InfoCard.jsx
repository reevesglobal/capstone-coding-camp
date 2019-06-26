import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    margin: 20px;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.inputBGColor || "#7D9EB8"};
    max-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    margin: 10px;
    color: ${props => props.titleColor || "#10124E"};
    font-weight: 400;
    text-transform: uppercase;
    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;

const Text = styled.p`
    margin: 10px;
    text-align: center;
    color: #0E2F64;
    font-weight: 200;
    @media (max-width: 400px) {
        font-size: 0.75rem;
    }
`;

const Action = styled.button`
    background: ${props => props.background || "white"};
    color: ${props => props.textColor || "black"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    :hover {
        opacity: 0.6;
    }
`;

const StyledPhoto = styled.img`
    margin: 10px;
    width: 50%;
    height: 100%;
    object-fit: contain;
`;

const InfoCard = ({ title, text, actions, icon }) => (
    <StyledCard inputBGColor="">
        <StyledPhoto src={icon} />
        <Title titleColor="">{title}</Title>
        <Text>{text}</Text>
        {actions.map(({ label, id, ...props }) => (
            <Action 
                background={"#F6F9FE"} 
                textColor={"#225684"} 
                key={id} 
                { ...props }
            >{label}</Action>
        ))}
    </StyledCard>
)

export default InfoCard;