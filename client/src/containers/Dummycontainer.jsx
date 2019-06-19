import React, { Component } from "react";
import Dummycomponent from "../components/Dummycomponent";
import HowItWorks from "../components/HowItWorks";
import SponsorsAndPartners from "../components/SponsorsAndPartners";

export class Dummycontainer extends Component {
    render() {
        return (
          <div>
            <Dummycomponent />
            <HowItWorks />
            <SponsorsAndPartners />
          </div>
        );
    }
}

export default Dummycontainer;
