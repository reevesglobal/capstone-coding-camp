import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ItemContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: ${props => props.itemBgColor || 'none'};
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props => props.paddingStepContainer || '30px'};
  flex-grow: ${props => props.flexGrowStepContainer || 2};
  font-family: 'Roboto', serif;
  font-size: 22px;
  font-weight: 300;
  color: ${props => props.stepColor || '#788195'};
`;

// color: #788195; light gray

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const LeftNavItems = ({ 
  stepText, 
  paddingStepContainer, 
  flexGrowStepContainer,
  itemBgColor,
  stepColor,
  checkColor 
}) => {
  return (
    <ItemContainer itemBgColor={itemBgColor} >
      <StepContainer 
        paddingStepContainer={paddingStepContainer}
        flexGrowStepContainer={flexGrowStepContainer}
        stepColor={stepColor}
      >
        {stepText}
      </StepContainer>
      <CheckContainer>
        <IconContext.Provider 
          value={{ 
            size: '28px', 
            color: checkColor
          }}
        >  
          <FaCheckCircle />
        </IconContext.Provider>
      </CheckContainer>
    </ItemContainer>
  );
}

export default LeftNavItems;
