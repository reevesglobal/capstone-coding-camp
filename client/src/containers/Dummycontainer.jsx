import React, { Component } from "react";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import JumboNavContainer from "./JumboNavContainer";
import Navigation from "../components/Navigation";
import PastWinners from "../components/PastWinners";
import FAQs from "../components/FAQs";
import ReadyToJoin from "../components/ReadyToJoin";
import Footer from "../components/Footer";

export class Dummycontainer extends Component {
    render() {
        return (
            <div>
                <JumboNavContainer>
                    <Navigation />
                </JumboNavContainer>
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
