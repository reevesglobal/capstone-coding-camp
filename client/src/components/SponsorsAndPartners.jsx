import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../styles/SectionTitle';

const StyledBackground = styled.div`
  height: 300px;
  background-color: #8EB4D1;
`;



const SponsorsAndPartners = (props) => {
  return (
    <StyledBackground>
      <SectionTitle label={`Sponsors And Partners`} inputColor="" />
    </StyledBackground>
  );
}

export default SponsorsAndPartners;
