import React from "react";
import styled from "styled-components";
import InfoCard from "../styles/InfoCard";
import SectionTitle from "../styles/SectionTitle";
import CCClogo from "../assets/CCClogo.png";

const StyledContainer = styled.div`
    background-color: #F2FCFE;
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

const PastWinners = () => {
    const onButtonClick = () => alert('You clicked the button!')
    const onButton2Click = () => alert('You clicked an exploding kitten...boom...')
    const onButton3Click = () => alert("chirp chirp.....")

    const button = [
        {
            id: 'button1',
            label: 'LEARN MORE',
            onClick: onButtonClick,
        },
    ];
    const button2 = [
        {
            id: 'button3',
            label: 'LEARN MORE',
            onClick: onButton2Click,
        }
    ];
    const button3 = [
        {
            id: 'button2',
            label: 'LEARN MORE',
            onClick: onButton3Click,
        }
    ];

    return (
        <StyledContainer>
            <SectionTitle label="Past Winners" />
            <StyledCardContainer>
                <InfoCard 
                    icon={CCClogo}
                    title="Team Name 1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button}
                />
                <InfoCard 
                    inputBGColor={"#D1DEE8"}
                    icon={CCClogo}
                    title="Team Name 2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button2}
                />
                <InfoCard 
                    icon={CCClogo}
                    title="Team Name 3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea non vero suscipit aut ad hic optio rerum corporis beatae quaerat eum at culpa aliquid temporibus nostrum pariatur dignissimos quis?"
                    actions={button3}
                />
            </StyledCardContainer>
        </StyledContainer>
    );
}

export default PastWinners;
