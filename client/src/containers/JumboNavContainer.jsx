import React from "react";
import styled from "styled-components";

const  ContainerBackground = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
`;

const JumboNavContainer = (props) => {
    return (
        <ContainerBackground>
            {props.children}
        </ContainerBackground>
    );
}

export default JumboNavContainer;
