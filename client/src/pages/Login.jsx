import React, { Component } from 'react';
import styled from 'styled-components';
import RegistrationLogo from '../styles/RegistrationLogo';
import LoginForm from '../containers/LoginForm';

const LoginPage = styled.div`
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

export class Login extends Component {
  render () {
    return (
      <LoginPage>
        <LeftContainer>
          <RegistrationLogo />
        </LeftContainer>
        <RightContainer>
          <MainHeader>LOGIN</MainHeader>
          <LoginForm />
        </RightContainer>
      </LoginPage>
    );
  }
}

export default Login;
