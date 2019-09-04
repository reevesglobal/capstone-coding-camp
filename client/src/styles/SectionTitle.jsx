import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  padding-top: ${props => props.inputPadding || "30px"};
  margin: 0 0 30px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 3.25em;
  font-weight: 300;
  text-align: center;
  color: ${props => props.inputColor || "#A50000"};
  text-transform: uppercase;
`;

const SectionTitle = (props) => {
  return (
    <StyledTitle inputColor={props.inputColor} inputPadding={props.inputPadding}>{props.label}</StyledTitle>
  );
}

export default SectionTitle;
