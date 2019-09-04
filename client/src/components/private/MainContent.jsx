import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../../styles/private/ArrowButton';

const Main = styled.div`
  padding: 115px 20px 20px;
  padding-left: ${props => props.leftPadding || "140px"};
  min-height: calc(100vh - 95px - 40px - 1px); /* Viewport height -- UpperNav height
                                                -- top & bottom padding in 
                                                MainContent -- border-top */
  background-color: #F1F3F6;
  border-top: 1px solid #E5E5E5;
`;

const Title = styled.h2`
  font-family: 'Roboto', serif;
  font-weight: 300;
  font-size: 48px;
  margin: 100px 0 0;

  @media (min-width: 800px) and (max-width: 1250px) {
    font-size: 3.2vw;
  }

  @media (max-width: 799px) {
    font-size: 26px;
    margin: 30px 0 0;
  }
`;

const SubHeading = styled.p`
  font-family: 'Roboto', serif;
  font-weight: 300;
  font-size: 24px;
  padding: 50px 0 0 3vw;

  @media (min-width: 1060px) and (max-width: 1250px) {
    font-size: 1.7vw;
  }

  @media (max-width: 1059px) {
    font-size: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20vw;
  margin-top: 20vh;

  @media (min-width: 1800px) {
    margin-top: 35vh;
  }

  @media (max-width: 1200px) {
    margin-right: 10vw;
  }

  @media (max-width: 800px) {
    margin-top: 10vh;
  }
`;

const handleClick = () => {
  console.log('yes!');
}

const MainContent = (props) => {
  return (
    <Main leftPadding={props.leftPadding}>
      <Title> Thank you for being interested in joining Capstone Coding Camp! </Title>
      <SubHeading>
        Please follow the next steps to finish off your registration.
      </SubHeading>
      <ButtonContainer>
        <ArrowButton text="&gt;" onClick={handleClick} />
      </ButtonContainer>
    </Main>
  );
}

export default MainContent;
