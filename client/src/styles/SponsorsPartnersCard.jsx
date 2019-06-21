import React from 'react';
import styled from 'styled-components';

const StyledSPCard = styled.div`
  width: 40%;
  text-align: center;
`;

const StyledSPCardHeading = styled.h3`
  font-size: 2.25em;
  font-family: "Arial", serif;
  font-weight: 600;
  color: #10124E;
  text-transform: uppercase;
`;

const StyledSPCardLink = styled.a`
  font-size: 1.6em;
  font-style: italic;
  font-family: "Arial", serif;
  color: #133F86;
  text-transform: uppercase;
  text-decoration: none;
`;

const SponsorsPartnersCard = (props) => {
  return (
    <StyledSPCard>
      <StyledSPCardHeading>{props.header}</StyledSPCardHeading>
      <StyledSPCardLink href="/contact">{props.link}</StyledSPCardLink>
    </StyledSPCard>
  );
}

export default SponsorsPartnersCard;
