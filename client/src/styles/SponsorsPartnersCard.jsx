import React from 'react';
import styled from 'styled-components';

const StyledSPCard = styled.div`
  padding: 15px;
  width: 40%;
  min-width: 300px;
  text-align: center;
  margin-bottom: 20px;
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

const SponsorsPartnersCard = ({ mainText, internalLink }) => {
  return (
    <StyledSPCard>
      <StyledSPCardHeading>{mainText}</StyledSPCardHeading>
      <StyledSPCardLink href="/contact">{internalLink}</StyledSPCardLink>
    </StyledSPCard>
  );
}

export default SponsorsPartnersCard;
