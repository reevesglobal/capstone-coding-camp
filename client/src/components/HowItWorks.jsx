import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";
import SectionTitle from "../styles/SectionTitle";
import CCClogo from "../assets/CCClogo.png";

const StyledContainer = styled.div`
    background-color: papayawhip;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
    margin: 0px;
`;

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    height: 75%;
    width: 100%;
`;

const HowItWorks = () => {
    const onButtonClick = () => alert('You clicked the button!')
    const onButton2Click = () => alert('You clicked THAT button?!?!')
    const onButton3Click = () => alert("Hmmmm, you're just messing around now aren't you?")

    const button = [
        {
            label: 'Click Me',
            onClick: onButtonClick,
        },
    ];
    const button2 = [
        {
            label: 'No, Click ME!',
            onClick: onButton2Click,
        }
    ];
    const button3 = [
        {
            label: 'Dude, just click this one.',
            onClick: onButton3Click,
        }
    ];

    return (
        <StyledContainer>
            <SectionTitle label={`How It All Works`} inputColor="palevioletred" inputPadding="" />
            <StyledCardContainer>
                <InfoCard 
                    icon={CCClogo}
                    title="Lorem DeTitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button}
                />
                <InfoCard 
                    icon={CCClogo}
                    title="Lorem DeTitle Numero 2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button2}
                />
                <InfoCard 
                    icon={CCClogo}
                    title="Lorem DeTitle Numero 3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button3}
                />
            </StyledCardContainer>
        </StyledContainer>
    );
}

export default HowItWorks;
