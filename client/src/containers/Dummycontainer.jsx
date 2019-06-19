import React, { Component } from "react";
import Dummycomponent from "../components/Dummycomponent";
import SponsorsAndPartners from "../components/SponsorsAndPartners";

export class Dummycontainer extends Component {
    render() {
        return (
          <div>
            <Dummycomponent />
            <SponsorsAndPartners />
          </div>
        );
    }
}

export default Dummycontainer;
