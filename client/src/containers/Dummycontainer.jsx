import React, { Component } from "react";
import HowItWorks from "../components/HowItWorks";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import JumboNavContainer from "./JumboNavContainer";
import Navigation from "../components/Navigation";

export class Dummycontainer extends Component {
    render() {
        return (
            <div>
                <JumboNavContainer>
                    <Navigation />
                </JumboNavContainer>
                <HowItWorks />
                <SponsorsAndPartners />
            </div>
        );
    }
}

export default Dummycontainer;
