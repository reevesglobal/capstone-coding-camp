import React from "react";
import styled from "styled-components";

const  ContainerBackground = styled.div`
    background-image: linear-gradient(#035093, #f2fcfe);
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: wrap;
    width: 100%;
`;

const JumboNavContainer = (props) => {
    return (
        <ContainerBackground>
            {props.children}
        </ContainerBackground>
    );
}

export default JumboNavContainer;
