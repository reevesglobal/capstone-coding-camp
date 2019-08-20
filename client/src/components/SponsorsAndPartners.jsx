import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../styles/SectionTitle';
import SponsorsPartnersCard from '../styles/SponsorsPartnersCard';

const StyledBackground = styled.section`
`;

const StyledPCCardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 0 50px 0;

  @supports (display:-ms-grid) { /*Edge only */
    display: grid;
    grid-template-columns: 20fr 20fr;
    justify-items: center;
  }
`;

const SponsorsAndPartners = () => {
  return (
    <StyledBackground>
      <SectionTitle label="Sponsors And Partners" />
      <StyledPCCardContainer>
        <SponsorsPartnersCard mainText="Want to sponsor one of our camps?" internalLink="Contact us" />
        <SponsorsPartnersCard mainText="Interested in becoming one of our partners?" internalLink="Contact us" />
      </StyledPCCardContainer>
    </StyledBackground>
  );
}

export default SponsorsAndPartners;
