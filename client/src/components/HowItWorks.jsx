import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";
import SectionTitle from "../styles/SectionTitle";
import CCClogo from "../assets/CCClogo.png";

const StyledRoot = styled.div`
    height: 300px;
    background-color: #8EB4D1;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px;
`

const HowItWorks = () => {
    const onButtonClick = () => alert('You clicked the button!')
    const button = [
        {
            label: 'Click Me',
            onClick: onButtonClick,
        },
    ]

    return (
        <StyledRoot>
            <StyledContainer>
                <SectionTitle label={`How It All Works`} inputColor=""/>
                <InfoCard 
                    icon={CCClogo}
                    title="Lorem Decorum"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button}
                />
            </StyledContainer>
        </StyledRoot>
    )
}

export default HowItWorks;