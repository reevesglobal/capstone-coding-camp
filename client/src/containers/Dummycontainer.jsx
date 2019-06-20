import React, { Component } from "react";
import Dummycomponent from "../components/Dummycomponent";
import SponsorsAndPartners from "../components/SponsorsAndPartners";
import Button from "../styles/Button";
import JumboNavContainer from "./JumboNavContainer";

export class Dummycontainer extends Component {
    render() {
        return (
          <div>
            <JumboNavContainer />
            <Dummycomponent />
            <SponsorsAndPartners />
            <Button />
          </div>
        );
    }
}

export default Dummycontainer;
