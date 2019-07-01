import React from "react";
import styled from "styled-components";

const StyledArrow = styled.span`
    font-size: 150px;
    margin: 0px;
    color: ${props => props.inputColor || "#10124E"};

    @media (min-width: 400px) and (max-width: 1400px) {
        transform: rotate(90deg);
    }
`;

const Arrow = (props) => {
    return (
        <StyledArrow color={props.inputColor}>&#8680;</StyledArrow>
    )
}

export default Arrow;