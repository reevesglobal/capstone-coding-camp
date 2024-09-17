import React from 'react';
import styled from 'styled-components';
import LeftNavItems from '../../styles/private/LeftNavItems';
import Switch from 'react-switch';

const FixedNav = styled.nav`
  position: fixed;
  width: ${props => props.width || '330px'};
  height: 100vh;
  z-index: 2;
  background-color: #2D3446; 
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 96px;
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', serif;
  font-size: ${props => props.fontSize || '26px'};
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
`;

const Label = styled.label`
  margin: 12px 20px 8px auto;
  display: ${props => props.display || "block"};
  width: 60px;
  height: 40px;
`;

const steps = [
  {
    id: 1,
    step: 1
  },
  {
    id: 2,
    step: 2
  },
  {
    id: 3,
    step: 3
  }
];

const LeftNavigation = (props) => {
  return (
    <FixedNav width={props.width}>
      <Logo fontSize={props.fontSize}>Capstone Coding Camp</Logo>
      <Label display ={props.display}>
        <Switch
          checked={props.isChecked}
          onChange={() => props.updateLeftNav(!props.isLeftNavExpanded)}
          onColor="#000"
          onHandleColor="#F1F3F6"
          offColor="#000"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48} 
        />
      </Label>
      
      {steps.map(({ id, step }) => {
        return (
          <LeftNavItems 
            key={id} 
            stepText={ 
              props.isLeftNavExpanded ? 
              `Step ${step}` : 
              step 
            }
            itemBgColor={
              props.registrationStep === step ?
              'rgba(0, 0, 0, 0.3)' : 
              null
            }
            stepColor={
              props.registrationStep === step ?
              'rgba(255, 255, 255, 0.87)' :
              null
            }
            checkColor={
              props.registrationStep === step ?
              'rgba(255, 255, 255, 0.87)' :
              '#788195'
            }
            {...props} 
          />
        );
      })}
    </FixedNav>
  );
}

export default LeftNavigation;

//<LeftNavItems stepText="Step 1" {...props}/>
