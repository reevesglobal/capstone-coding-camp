import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    background-color: #0E2F64;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    margin: 20px;
    text-align: center;
    color: white;
    font-family: "Arial", serif;
    font-size: 1.1em;
    font-weight: 100;
`;

const Footer = () => {
    return (
        <StyledContainer>
            <footer>
                <Text>© Capstone Coding Camp 2019</Text>
            </footer>
        </StyledContainer>
    )
}

export default Footer;