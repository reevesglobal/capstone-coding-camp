import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    margin: 20px;
    text-align: center;
    color: palevioletred;
    font-family: "Arial", serif;
    font-size: 1.1em;
    font-weight: 100;
`;

const Footer = () => {
    return (
        <StyledFooter>    
            <Text>© Capstone Coding Camp 2019</Text>
        </StyledFooter>
    )
}

export default Footer;