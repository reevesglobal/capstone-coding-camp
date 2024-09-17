import React, { Component } from 'react';
import styled from 'styled-components';
import RegistrationLogo from '../styles/RegistrationLogo';
import LoginForm from '../containers/LoginForm';
import { NavLink } from 'react-router-dom';

const LoginPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const SecondaryHeader = styled.h2`
  margin: 0px;
  text-align: center;
  color: #10124E;
  font-family: 'Roboto', serif;
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
`;

const EnlargeText = styled.span`
  font-size: 42px;
`;

const Line = styled.hr`
  background: rgba(0, 78, 146, 0.3);
  width: 300px;
  height: 1px;
`;

const Text = styled.p`
  text-align: center;
  color: rgba(0, 78, 146, 0.4);
  font-style: italic;
  font-family: 'Roboto', serif;
  font-size: 14px;
  text-deocoration: none;
`;

const HoverEffect = styled.span`
  color: rgba(0, 78, 146, 0.4);
  :hover {
    color: #004E92
  }
`;

class Login extends Component {
  render () {
    return (
      <LoginPage>
        <LeftContainer>
          <SecondaryHeader>
            The <EnlargeText>Ultimate</EnlargeText> Virtual
          </SecondaryHeader>
          <RegistrationLogo />
          <SecondaryHeader>Hackaton Competition</SecondaryHeader>
        </LeftContainer>
        <RightContainer>
          <MainHeader>LOGIN</MainHeader>
          <LoginForm />
          <Line />
          <Text>Don't have an account yet?
            <NavLink 
              to="/register/" 
              style={{textDecoration: "none"}}
            > 
              <HoverEffect> Register here!</HoverEffect>
            </NavLink>
          </Text>
        </RightContainer>
      </LoginPage>
    );
  }
}

export default Login;
