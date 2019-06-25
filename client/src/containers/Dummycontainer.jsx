import React, { Component } from "react";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import JumboNavContainer from "./JumboNavContainer";
import Navigation from "../components/Navigation";
import PastWinners from "../components/PastWinners";
import FAQs from "../components/FAQs";

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
            </div>
        );
    }
}

export default Dummycontainer;
