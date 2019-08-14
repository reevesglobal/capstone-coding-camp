import React, { Component } from 'react';
import styled from 'styled-components';
import LeftNavigation from '../components/private/LeftNavigation';
import MainContent from '../components/private/MainContent';
import UpperNavigation from '../components/private/UpperNavigation';

const Page = styled.div`
`;

class AcceptedScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLeftNavExpanded: true
    }
  }
  render () {
    const { isLeftNavExpanded } = this.state;
    return (
      <Page>
        <LeftNavigation />
        <UpperNavigation />
        {isLeftNavExpanded ? <MainContent leftPadding="400px" /> : <MainContent />} 
      </Page>
    );
  } 
}

export default AcceptedScreen;
