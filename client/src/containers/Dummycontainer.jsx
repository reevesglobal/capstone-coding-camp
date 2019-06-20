import React, { Component } from "react";
import Dummycomponent from "../components/Dummycomponent";
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
            <Dummycomponent />
            <SponsorsAndPartners />
          </div>
        );
    }
}

export default Dummycontainer;
