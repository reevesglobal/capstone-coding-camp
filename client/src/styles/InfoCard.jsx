import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
    margin: 20px;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.inputBGColor || "#FFFFFF"};
    max-width: 450px;
    border: ${ props => props.borderColor};
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

const StyledPhoto = styled.img`
    margin: 10px;
    width: 50%;
    height: 100%;
    object-fit: contain;
`;

const InfoCard = ({ title, text, actions, icon, inputBGColor }) => (
    <StyledCard inputBGColor={inputBGColor}>
        <StyledPhoto src={icon} />
        <Title>{title}</Title>
        <Text>{text}</Text>
        {actions.map(({ label, id, onClick }) => (
            <Button 
                background="#133F86" 
                color="#F6F9FE" 
                fontSize="16px"
                borderRadius="4px"
                fontFamily="Arial"
                margin="35px"
                border="2px solid transparent"
                hoverColor="#133F86"
                hoverBorder="2px solid #133F86"
                key={id}
                text={label}
                onClick={onClick} 
            />
        ))}
    </StyledCard>
)

export default InfoCard;
