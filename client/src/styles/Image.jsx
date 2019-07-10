import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
    src: url(${props => props.src});
    
`


const Image = (props) => {
    return (
        <StyledImg height={props.height} width={props.width} src={props.src} />
    );
}

export default Image;