import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    border: 2px solid;
    padding: 25px 12px 18px;
    background: orange;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    color: #fff;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

const Text = styled.p`
    color: #fff;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`

const Action = styled.button`
    margin: 0 5px;
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
    width: 50%;
    height: 100%;
    object-fit: cover;
    border: 2px solid;
`

const InfoCard = ({ title, text, actions, icon }) => (
    <StyledContainer>
        <StyledPhoto src={icon} alt="Logo" />
        <Title>{title}</Title>
        <Text>{text}</Text>
        {actions.map(({ label, ...props }) => (
            <Action { ...props }>{label}</Action>
        ))}
    </StyledContainer>
)

export default InfoCard;