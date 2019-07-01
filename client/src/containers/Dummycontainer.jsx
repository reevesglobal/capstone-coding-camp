import React, { Component } from "react";
import JumboNavContainer from "./JumboNavContainer";
import Navigation from "../components/Navigation";
import HowItWorks from "../components/HowItWorks";
import PastWinners from "../components/PastWinners";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import FAQs from "../components/FAQs";
import Benefits from "../components/Benefits";
import ReadyToJoin from "../components/ReadyToJoin";
import Footer from "../components/Footer";

export class Dummycontainer extends Component {
    render() {
        return (
            <div>
                <JumboNavContainer>
                    <Navigation />
                </JumboNavContainer>
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

export default Dummycontainer;
