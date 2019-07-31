import React, { Component } from 'react';
import styled from 'styled-components';
import RegistrationLogo from '../styles/RegistrationLogo';
import FormContainer from '../containers/FormContainer';

const RegisterPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44%;
  height: 100vh;
  background-color: #004E92;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 56%;
  height: 100vh;
`;

const MainHeader = styled.h1`
  text-align: center;
  color: #004E92;
  font-family: 'Roboto', Arial;
  font-weight: 500;
`;

export class Register extends Component {
  render () {
    return (
      <RegisterPage>
        <LeftContainer>
          <RegistrationLogo />
        </LeftContainer>
        <RightContainer>
          <MainHeader>REGISTER</MainHeader>
          <FormContainer />
        </RightContainer>
      </RegisterPage>
    );
  }
}

export default Register;
