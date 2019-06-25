import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    margin: 20px;
    font-family: 'Roboto', sans-serif;
    border-radius: 2%;
    box-shadow: 2px 2px #888888;
    background: ${props => props.inputBGColor || "#7D9EB8"};
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    margin: 10px;
    color: ${props => props.titleColor || "#0E2F64"};
    font-weight: 400;
    text-transform: uppercase;
    @media (max-width: 450px) {
        font-size: 1rem;
    }
`;

const Text = styled.p`
    margin: 10px;
    text-align: center;
    color: #fff;
    font-weight: 300;
    @media (max-width: 450px) {
        font-size: 0.75rem;
    }
`;

const Action = styled.button`
    margin: 10px;
    padding: 8px 14px;
    background: rgba(155, 155, 155, 0.5);
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
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
            <Action key={id} { ...props }>{label}</Action>
        ))}
    </StyledCard>
)

export default InfoCard;