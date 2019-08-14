import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  padding: 115px 20px 20px;
  padding-left: ${props => props.leftPadding || "100px"};
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
  margin: 50px 0 0;
`;

const MainContent = (props) => {
  return (
    <Main leftPadding={props.leftPadding}>
      <Title> Thank you for being interested in joining Capstone Coding Camp! </Title>
    </Main>
  );
}

export default MainContent;