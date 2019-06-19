import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    border: 1px solid;
    padding: 25px 12px 18px;
    background: ;
`

const Title = styled.h3`
    color: #fff;
    font-weight: 1.25em;
`

const Text = styled.p`
    color: #fff;
    font-weight: 1em;
`

const Actions = styled.div`
    color: #333;
    display: flex;
    align-items: center;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid;
`


const InfoCard = ({ title, text, actions }) => (
    <StyledContainer>
        <StyledPhoto src="../assets/CCC_logo.jpeg" />
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Actions>
            {actions.map(({ label }) => (
                <Action>{label}</Action>
            ))}
        </Actions>
    </StyledContainer>
)

export default InfoCard;