import React from "react";
import styled from "styled-components";

const  ContainerBackground = styled.div`
    height: 800px;
    background-image: linear-gradient(#035093, #f2fcfe);
`;

const JumboNavContainer = (props) => {
    return (
        <ContainerBackground>
            {props.children}
        </ContainerBackground>
    );
}

export default JumboNavContainer;
