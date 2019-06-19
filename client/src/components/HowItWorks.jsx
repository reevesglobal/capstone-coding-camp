import React from "react";
import InfoCard from "./InfoCard";
import styled from "styled-components";
import SectionTitle from "../styles/SectionTitle";

const StyledRoot = styled.div`
    padding: 50px 12px;
`

const StyledBackground = styled.div`
    height: 300px;
    background-color: #8EB4D1;
`

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 550px;
    width: 100%;
    margin: auto;
`

const HowItWorks = (props) => {
    const onButtonClick = () => alert('You clicked the button!')
    const button = [
        {
            label: 'Click Me',
            onClick: onButtonClick,
        },
    ]

    return (
        <StyledRoot>
            <StyledBackground>
                <SectionTitle label={`How It All Works`} inputColor=""/>
                <StyledContainer>
                    <InfoCard 
                        title="title here"
                        text="text here"
                        actions={button}
                    />
                    <InfoCard 
                        title="title here"
                        text="text here"
                        actions={button}
                    />
                    <InfoCard 
                        title="title here"
                        text="text here"
                        actions={button}
                    />
                </StyledContainer>
            </StyledBackground>
        </StyledRoot>
    )
}

export default HowItWorks;