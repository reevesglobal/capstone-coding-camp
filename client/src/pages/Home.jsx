import React, { Component } from 'react';
import Mission from "../components/Mission";
import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Jumbotron from "../components/Jumbotron";
import HowItWorks from "../components/HowItWorks";
import PastWinners from "../components/PastWinners";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import FAQs from "../components/FAQs";
import Benefits from "../components/Benefits";
import ReadyToJoin from "../components/ReadyToJoin";
import Footer from "../components/Footer";

class Home extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <HamburgerMenu />
        <Jumbotron />
        <Mission />
        <HowItWorks />
        <PastWinners />
        <SponsorsAndPartners />
        <FAQs />
        <Benefits />
        <ReadyToJoin />
        <Footer />
      </div>
    );
  }
}

export default Home;