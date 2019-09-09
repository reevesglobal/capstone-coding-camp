import React from "react";
import styled from "styled-components";

const StyledLine = styled.hr`
    color: ${props => props.inputColor || "#10124E"};
    align: ${props => props.lineAlign || "center"};
    size: ${props => props.lineHeight || "5px"};
    width: ${props => props.lineWidth};
`;

const Line = (props) => {
    return (
        <StyledLine 
            color={props.inputColor} 
            lineAlign={props.lineAlign}
            lineHeight={props.lineHeight}
            lineWidth={props.lineWidth}
        />
    );
}

export default Line;