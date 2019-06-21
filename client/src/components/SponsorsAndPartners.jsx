import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../styles/SectionTitle';
import SponsorsPartnersCard from '../styles/SponsorsPartnersCard';

const StyledBackground = styled.div`
  background-color: #8EB4D1;
`;

const StyledPCCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 0 50px 0;
`;

const SponsorsAndPartners = (props) => {
  return (
    <StyledBackground>
      <SectionTitle label={`Sponsors And Partners`} />
      <StyledPCCardContainer>
        <SponsorsPartnersCard header={`Want to sponsor one of our camps?`} link={`Contact us`} />
        <SponsorsPartnersCard header={`Interested in becoming one of our partners?`} link={`Contact us`} />
      </StyledPCCardContainer>
    </StyledBackground>
  );
}

export default SponsorsAndPartners;
