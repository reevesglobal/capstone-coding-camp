import React from "react";
import styled from "styled-components";

const  ContainerBackground = styled.div`
    height: 300px;
    background-image: linear-gradient(#296ba4, #e9f6fb);

`

const JumboNavContainer = (props) => {
    return (
        <ContainerBackground>
          {props.children}
        </ContainerBackground>
    );
}

export default JumboNavContainer;
