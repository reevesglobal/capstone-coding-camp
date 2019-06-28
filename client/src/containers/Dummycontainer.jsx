import React, { Component } from "react";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import JumboNavContainer from "./JumboNavContainer";
import Navigation from "../components/Navigation";
import HowItWorks from "../components/HowItWorks";
import PastWinners from "../components/PastWinners";
import FAQs from "../components/FAQs";
import ReadyToJoin from "../components/ReadyToJoin";
import Footer from "../components/Footer";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    img {
        height: 5%;
        width: 5%;
    }
`
export class Dummycontainer extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <JumboNavContainer>
                    <Navigation />
                </JumboNavContainer>
                <HowItWorks />
                <PastWinners />
                <SponsorsAndPartners />
                <FAQs />
                <ReadyToJoin />
                <Footer />
            </div>
        );
    }
}

export default Dummycontainer;
