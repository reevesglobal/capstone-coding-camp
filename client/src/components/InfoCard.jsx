import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    margin: 20px;
    font-family: 'Roboto', sans-serif;
    border-radius: 2%;
    box-shadow: 2px 2px #888888;
    background: orange;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    margin: 10px;
    color: #fff;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

const Text = styled.p`
    margin: 10px;
    text-align: center;
    color: #fff;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`

const Action = styled.button`
    margin: 10px;
    padding: 8px 14px;
    background: rgba(155, 155, 155, 0.2);
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
    :hover {
        opacity: 0.8;
    }
`

const StyledPhoto = styled.img`
    margin: 10px;
    width: 50%;
    height: 100%;
    object-fit: contain;
`

const InfoCard = ({ title, text, actions, icon }) => (
    <StyledCard>
        <StyledPhoto src={icon} />
        <Title>{title}</Title>
        <Text>{text}</Text>
        {actions.map(({ label, ...props }) => (
            <Action { ...props }>{label}</Action>
        ))}
    </StyledCard>
)

export default InfoCard;

//This card component can be reused, just make sure to reference the props in the parent component (see HowItWorks Component for more info)